import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Apple from 'next-auth/providers/apple'
import LinkedIn from 'next-auth/providers/linkedin'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/db'
import { User } from '@/models/User'
import { MongooseAdapter } from '@/lib/mongoose-adapter'
import type { UserRole } from '@/models/User'

const credentialsEnabled =
  (process.env.AUTH_CREDENTIALS_ENABLED ?? process.env.NEXT_PUBLIC_AUTH_CREDENTIALS_ENABLED ?? 'false') === 'true'

// Refresh identity fields from MongoDB, but cache the result briefly so a
// busy dashboard/API won't hit the database on every single request. 60s
// keeps profile edits and role changes visible within a minute.
const IDENTITY_CACHE_TTL_MS = 60_000
interface IdentityCacheEntry {
  role: UserRole
  id: string
  name: string | null | undefined
  email: string | null | undefined
  image: string | null | undefined
  ts: number
}
const identityCache = new Map<string, IdentityCacheEntry>()

function getCachedIdentity(sub: string): IdentityCacheEntry | undefined {
  const entry = identityCache.get(sub)
  if (!entry) return undefined
  if (Date.now() - entry.ts > IDENTITY_CACHE_TTL_MS) {
    identityCache.delete(sub)
    return undefined
  }
  return entry
}

function setCachedIdentity(sub: string, entry: Omit<IdentityCacheEntry, 'ts'>): void {
  identityCache.set(sub, { ...entry, ts: Date.now() })
  if (identityCache.size > 2000) {
    const now = Date.now()
    for (const [key, value] of identityCache) {
      if (now - value.ts > IDENTITY_CACHE_TTL_MS) identityCache.delete(key)
    }
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: MongooseAdapter(),
  session: { strategy: 'jwt' },
  providers: [
    ...(process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
      ? [
          Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
          }),
        ]
      : []),
    ...(process.env.AUTH_APPLE_ID && process.env.AUTH_APPLE_SECRET
      ? [
          Apple({
            clientId: process.env.AUTH_APPLE_ID,
            clientSecret: process.env.AUTH_APPLE_SECRET,
          }),
        ]
      : []),
    ...(process.env.AUTH_LINKEDIN_ID && process.env.AUTH_LINKEDIN_SECRET
      ? [
          LinkedIn({
            clientId: process.env.AUTH_LINKEDIN_ID,
            clientSecret: process.env.AUTH_LINKEDIN_SECRET,
          }),
        ]
      : []),
    ...(credentialsEnabled
      ? [
          Credentials({
            name: 'credentials',
            credentials: {
              email: { label: 'Email', type: 'email' },
              password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
              const email = credentials?.email as string
              const password = credentials?.password as string
              if (!email || !password) return null

              await connectDB()
              const user = await User.findOne({ email: email.toLowerCase(), authProvider: 'credentials' })
              if (!user?.hashedPassword) return null

              const isValid = await bcrypt.compare(password, user.hashedPassword)
              if (!isValid) return null

              return {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                image: user.image,
                role: user.role,
              }
            },
          }),
        ]
      : []),
  ],
  pages: {
    signIn: '/auth',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: UserRole }).role ?? 'general'
        if (user.id) token.id = user.id
      }

      // JWTs keep their claims until expiry. Refresh identity fields from the
      // database so profile edits and role changes (e.g. an admin demotion)
      // take effect quickly instead of at token expiry. A short TTL cache
      // avoids a MongoDB read on every authenticated request.
      if (token.sub) {
        const cached = getCachedIdentity(token.sub)
        if (cached) {
          token.role = cached.role
          token.id = cached.id
          token.name = cached.name
          token.email = cached.email
          token.image = cached.image
        } else {
          await connectDB()
          const currentUser = await User.findById(token.sub).select('role name email image').lean()
          if (currentUser) {
            const role = currentUser.role ?? 'general'
            const id = token.sub
            const name = currentUser.name
            const email = currentUser.email
            const image = currentUser.image ?? null
            token.role = role
            token.id = id
            token.name = name
            token.email = email
            token.image = image
            setCachedIdentity(id, { id, role, name, email, image })
          } else {
            // User was deleted from the database
            identityCache.delete(token.sub)
            delete (token as Record<string, unknown>).sub
            delete (token as Record<string, unknown>).id
            delete (token as Record<string, unknown>).role
          }
        }
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as UserRole
        session.user.id = token.id as string
      }
      return session
    },
  },
})
