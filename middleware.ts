import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from '@/constants/locale';

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localeDetection: true,
});

export const config = {
  matcher: ['/', '/(fr|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
