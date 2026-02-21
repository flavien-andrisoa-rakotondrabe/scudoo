import { getRequestConfig } from "next-intl/server";
import { LOCALES, DEFAULT_LOCALE } from "@/constants/locale";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  const tags = LOCALES.map((item) => item.tag);

  const isValidLocale = tags.includes(locale as any);
  const safeLocale = isValidLocale ? (locale as string) : DEFAULT_LOCALE;

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
