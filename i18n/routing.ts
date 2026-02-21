import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { LOCALES, DEFAULT_LOCALE } from "@/constants/locale";

export const routing = defineRouting({
  locales: LOCALES.map((item) => item.tag),
  defaultLocale: DEFAULT_LOCALE,

  pathnames: {
    "/": "/",
    "/join-us": {
      en: "/join-us",
      fr: "/nous-rejoindre",
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
