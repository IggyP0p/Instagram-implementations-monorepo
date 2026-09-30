import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
   const token = request.cookies.get('token')?.value;
   const { pathname } = request.nextUrl;

   const isProtectedRoute =
      pathname.startsWith('/Homepage') ||
      pathname.startsWith('/Directpage') ||
      pathname.startsWith('/Profile') ||
      pathname.startsWith('/Reels');

   const isAuthRoute =
      pathname === '/' ||
      pathname === '/cadastrar' ||
      pathname === '/recuperar-senha';

   if (isProtectedRoute && !token) {
      return NextResponse.redirect(new URL('/', request.url));
   }

   if (isAuthRoute && token) {
      return NextResponse.redirect(new URL('/Homepage', request.url));
   }

   return NextResponse.next();
}

export const config = {
   matcher: [
      '/',
      '/cadastrar',
      '/recuperar-senha',
      '/Homepage/:path*',
      '/Directpage/:path*',
      '/Profile/:path*',
      '/Reels/:path*',
   ],
};
