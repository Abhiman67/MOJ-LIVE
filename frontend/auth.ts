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

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: MongooseAdapter(),
  session: { strategy: 'jwt' },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Apple({
      clientId: process.env.AUTH_APPLE_ID,
      clientSecret: process.env.AUTH_APPLE_SECRET,
    }),
    LinkedIn({
      clientId: process.env.AUTH_LINKEDIN_ID,
      clientSecret: process.env.AUTH_LINKEDIN_SECRET,
    }),
    ...((process.env.AUTH_CREDENTIALS_ENABLED ?? process.env.NEXT_PUBLIC_AUTH_CREDENTIALS_ENABLED ?? 'true') === 'true'
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
