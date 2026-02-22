import { getRequestConfig } from "next-intl/server";
import { LOCALES, DEFAULT_LOCALE } from "@/constants/locale";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  const tags = LOCALES.map((item) => item.tag);

  const isValidLocale = tags.includes(locale as any);
  const safeLocale = isValidLocale ? (locale as string) : DEFAULT_LOCALE;

  try {
    const [metadata, landing, joinUs] = await Promise.all([
      import(`../locales/${safeLocale}/metadata.json`).then((m) => m.default),
      import(`../locales/${safeLocale}/landing.json`).then((m) => m.default),
      import(`../locales/${safeLocale}/joinUs.json`).then((m) => m.default),
    ]);

    return {
      locale: safeLocale,
      messages: {
        metadata,
        landing,
        joinUs,
      },
    };
  } catch (error) {
    return {
      locale: safeLocale,
      messages: {},
    };
  }
});
