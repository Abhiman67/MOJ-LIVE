import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET })
  const { pathname } = req.nextUrl
  const isLoggedIn = !!token

  if ((pathname.startsWith('/dashboard') || pathname.startsWith('/profile')) && !isLoggedIn) {
    const callbackUrl = encodeURIComponent(pathname)
    return NextResponse.redirect(new URL(`/auth?callbackUrl=${callbackUrl}`, req.url))
  }

  if (pathname.startsWith('/auth') && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/auth'],
}
