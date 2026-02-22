"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/routing";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LOCALES } from "@/constants/locale";
import { HEADER_NAVIGATION } from "@/constants/navigation";
import { ThemeOptionInterface, THEMES } from "@/components/utils/Theme";
import { updateUtilsReducer } from "@/redux/slices/utilsSlice";

import { ThemeType } from "@/types/utils.type";

export default function NavbarMobile({
  activeSection,
}: {
  activeSection: string;
}) {
  const t = useTranslations("landing");

  const dispatch = useDispatch();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const { theme } = useSelector((state: RootState) => state.utils);

  const [actualTheme, setActualTheme] = useState<ThemeOptionInterface>(() => {
    const initialTheme = THEMES.find((item) => item.tag === theme);

    if (initialTheme) return initialTheme;
    return THEMES[THEMES.length - 1];
  });

  useEffect(() => {
    const newTheme = THEMES.find((item) => item.tag === theme);

    if (newTheme) {
      setActualTheme(newTheme);
    }
  }, [theme]);

  const handleChangeTheme = (value: ThemeType) => {
    dispatch(updateUtilsReducer({ theme: value }));
  };

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
    <Sheet>
      <Tooltip>
        <TooltipTrigger asChild>
          <SheetTrigger asChild>
            <button className="w-8 h-8 sm:w-10 sm:h-10 flex lg:hidden justify-center items-center text-white rounded-full bg-linear-to-r from-[#3e090a] to-[#d11f22] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="size-4 sm:size-6"
              >
                <path
                  d="M4.12402 7.12146H19.8728"
                  stroke="currentColor"
                  strokeWidth="2.24983"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M4.12402 11.9962H19.8728"
                  stroke="currentColor"
                  strokeWidth="2.24983"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M4.12402 16.8708H19.8728"
                  stroke="currentColor"
                  strokeWidth="2.24983"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </SheetTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"Menu"}</p>
        </TooltipContent>
      </Tooltip>
      <SheetContent>
        <SheetHeader className="hidden"></SheetHeader>
        <div className="p-8 flex flex-col gap-10">
          <div className="w-full">
            <h4 className="text-xl sm:text-2xl font-semibold">Navigation</h4>
            <nav className="mt-6">
              <ul className="flex flex-col gap-4 sm:gap-6">
                {HEADER_NAVIGATION.map((item) => {
                  const anchor = t(`navigation.${item}.anchor`);
                  const isActive = activeSection === anchor;

                  return (
                    <li key={`nav-${item}`}>
                      <a
                        href={`#${anchor}`}
                        className={cn(
                          "relative text-lg sm:text-xl",
                          isActive
                            ? "font-semibold px-1.5 bg-linear-to-r from-[#3e090a] to-[#d11f22] bg-clip-text text-transparent"
                            : "hover:text-[#d11f22]",
                        )}
                      >
                        {t(`navigation.${item}.label`)}
                        {isActive && (
                          <span className="absolute -bottom-2 w-full h-1.5 flex rounded-full bg-linear-to-r from-[#3e090a] to-[#d11f22]" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="w-full">
            <h4 className="text-xl sm:text-2xl font-semibold">Thème</h4>
            <ul className="mt-6 w-full flex gap-4 select-none">
              {THEMES.map((item) => (
                <li
                  key={`theme-${item.tag}`}
                  className={cn(
                    "flex-1 flex justify-center items-center gap-2 px-2 py-2 rounded-md",
                    actualTheme.tag === item.tag
                      ? "font-semibold bg-gray-100 dark:bg-black cursor-default text-[#d11f22]"
                      : "cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800",
                  )}
                  onClick={() => handleChangeTheme(item.tag)}
                >
                  <div className="w-4 h-4 rounded-full">{item.icon}</div>
                  <p className="text-sm">{t(`theme.${item.tag}`)}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <h4 className="text-xl sm:text-2xl font-semibold">Langues</h4>
            <ul className="mt-6 grid grid-cols-2 gap-4 select-none">
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
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
