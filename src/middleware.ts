import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('adminToken')?.value;
  const isLoginPage = request.nextUrl.pathname.startsWith('/admin/login');

  // If trying to access admin pages (not login) without a token, redirect to login
  if (request.nextUrl.pathname.startsWith('/admin') && !isLoginPage && !token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // If trying to access login page WITH a token, redirect to dashboard
  if (isLoginPage && token) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
