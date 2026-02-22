"use client";

import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { LOCALES } from "@/constants/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Lang() {
  const t = useTranslations("landing");

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
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <button className="hidden lg:block w-8 h-8 rounded-full cursor-pointer">
              <Image
                src={`/locales/${locale}/flag.svg`}
                alt={locale}
                width={32}
                height={32}
                className="w-full h-full object-cover rounded-full select-none"
              />
            </button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("lang")}</p>
        </TooltipContent>
      </Tooltip>

      <PopoverContent
        className="w-36 p-2 rounded-xl border-none shadow"
        align="end"
      >
        <ul className="flex flex-col gap-0.5 select-none">
          {LOCALES.map((item) => (
            <li
              key={`lang-${item.tag}`}
              className={cn(
                "flex items-center gap-2 px-2 py-1.5 rounded-md",
                locale === item.tag
                  ? "font-semibold bg-gray-100 dark:bg-black cursor-default text-[#d11f22]"
                  : "cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800",
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
  );
}
