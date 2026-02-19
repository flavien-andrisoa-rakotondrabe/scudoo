import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from '@/constants/locale';

export default getRequestConfig(async ({ locale }) => {
  const isValidLocale = locales.includes(locale as any);
  const safeLocale = isValidLocale ? (locale as string) : defaultLocale;

  try {
    const [landing] = await Promise.all([
      import(`../locales/${safeLocale}/landing.json`).then((m) => m.default),
    ]);

    return {
      locale: safeLocale,
      messages: {
        landing,
      },
    };
  } catch (error) {
    return {
      locale: safeLocale,
      messages: {},
    };
  }
});
