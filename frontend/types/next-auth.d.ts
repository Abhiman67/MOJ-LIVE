import type { UserRole } from '@/models/User'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role: UserRole
    }
  }

  interface User {
    role?: UserRole
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: UserRole
    id: string
  }
}
