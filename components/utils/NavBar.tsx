"use client";

import Image from "next/image";
import Button from "@/components/utils/Button";

import { useLocale, useTranslations } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LOCALES } from "@/constants/locale";
import { HEADER_NAVIGATION } from "@/constants/navigation";

export default function NavBar() {
  const t = useTranslations("landing.navigation");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;

    const { locale: _, ...restParams } = params;

    const currentQuery = Object.fromEntries(searchParams.entries());

    const hasParams = Object.keys(restParams).length > 0;

    router.replace(
      {
        pathname: pathname as any,
        query: currentQuery,
        ...(hasParams ? { params: restParams } : {}),
      },
      { locale: newLocale as any },
    );
  };

  return (
    <header className="w-full px-20 py-10 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-16 h-16">
          <Image
            src="/mini-logo.png"
            alt="Logo"
            width={64}
            height={64}
            className="w-full h-full"
          />
        </div>
        <span className="text-2xl">cudoo Holding</span>
      </div>
      <nav>
        <ul className="flex items-center gap-8">
          {HEADER_NAVIGATION.map((item) => (
            <li key={`nav-${item}`}>
              <a href={t(`${item}.anchor`)} className="text-xl">
                {t(`${item}.label`)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-6">
        <Popover>
          <PopoverTrigger>
            <div className="w-8 h-8 rounded-full cursor-pointer">
              <Image
                src={`/locales/${locale}/flag.svg`}
                alt={locale}
                width={32}
                height={32}
                className="w-full h-full object-cover rounded-full select-none"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="w-36 p-2 rounded-xl border-none shadow bg-white"
            align="end"
          >
            <ul className="flex flex-col gap-0.5">
              {LOCALES.map((item) => (
                <li
                  key={`lang-${item.tag}`}
                  className={cn(
                    "flex items-center gap-2 px-2 py-1.5 rounded-md",
                    locale === item.tag
                      ? "font-semibold bg-gray-100 cursor-default"
                      : "cursor-pointer hover:bg-gray-50 text-black",
                  )}
                  onClick={() => handleLocaleChange(item.tag)}
                >
                  <div className="w-4 h-4 rounded-full">
                    <Image
                      src={`/locales/${item.tag}/flag.svg`}
                      alt={item.tag}
                      width={16}
                      height={16}
                      className="w-full h-full object-cover rounded-full select-none"
                    />
                  </div>
                  <p className="text-sm">{item.label}</p>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
        <Button label={"Nous rejoindre"} href="/join-us" />
      </div>
    </header>
  );
}
