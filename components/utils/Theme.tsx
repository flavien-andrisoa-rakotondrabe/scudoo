"use client";

import { ReactNode, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { ThemeType } from "@/types/utils.type";
import { updateUtilsReducer } from "@/redux/slices/utilsSlice";

interface ThemeOptionInterface {
  tag: ThemeType;
  icon: ReactNode;
}

const THEMES: ThemeOptionInterface[] = [
  {
    tag: "light",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="size-5"
      >
        <path
          d="M3.55 18.5398L4.96 19.9498L6.76 18.1598L5.34 16.7398L3.55 18.5398ZM11 22.4498C11.32 22.4498 13 22.4498 13 22.4498V19.4998H11V22.4498ZM12 5.4998C10.4087 5.4998 8.88258 6.13195 7.75736 7.25716C6.63214 8.38238 6 9.90851 6 11.4998C6 13.0911 6.63214 14.6172 7.75736 15.7424C8.88258 16.8677 10.4087 17.4998 12 17.4998C13.5913 17.4998 15.1174 16.8677 16.2426 15.7424C17.3679 14.6172 18 13.0911 18 11.4998C18 8.1798 15.31 5.4998 12 5.4998ZM20 12.4998H23V10.4998H20V12.4998ZM17.24 18.1598L19.04 19.9498L20.45 18.5398L18.66 16.7398L17.24 18.1598ZM20.45 4.4598L19.04 3.0498L17.24 4.8398L18.66 6.2598L20.45 4.4598ZM13 0.549805H11V3.4998H13V0.549805ZM4 10.4998H1V12.4998H4V10.4998ZM6.76 4.8398L4.96 3.0498L3.55 4.4598L5.34 6.2598L6.76 4.8398Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    tag: "dark",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="size-4"
      >
        <path
          d="M13.2754 24C16.9767 24 20.3572 22.316 22.5968 19.5566C22.9281 19.1484 22.5669 18.5521 22.0548 18.6496C16.2328 19.7584 10.8863 15.2945 10.8863 9.41738C10.8863 6.03197 12.6986 2.91886 15.644 1.24266C16.0981 0.984281 15.9839 0.295922 15.468 0.200625C14.7447 0.0672624 14.0108 0.000109516 13.2754 0C6.65153 0 1.27539 5.3677 1.27539 12C1.27539 18.6239 6.64309 24 13.2754 24Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    tag: "system",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="size-5"
      >
        <g clipPath="url(#clip0_2_30458)">
          <path
            d="M14.3 15.9999L13.6 13.9999H10.4L9.7 15.9999H7.8L11 6.99994H13L16.2 15.9999H14.3ZM20 8.68994V3.99994H15.31L12 0.689941L8.69 3.99994H4V8.68994L0.690002 11.9999L4 15.3099V19.9999H8.69L12 23.3099L15.31 19.9999H20V15.3099L23.31 11.9999L20 8.68994ZM10.85 12.6499H13.15L12 8.99994L10.85 12.6499Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_30458">
            <rect width="24" height="24" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

export default function Theme() {
  const t = useTranslations("landing.theme");

  const dispatch = useDispatch();

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

  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <button className="w-8 h-8 flex justify-center items-center rounded-full cursor-pointer bg-gray-100 dark:bg-zinc-800 text-[#d11f22]">
              {actualTheme.icon}
            </button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("title")}</p>
        </TooltipContent>
      </Tooltip>

      <PopoverContent
        className="w-36 p-2 rounded-xl border-none shadow"
        align="end"
      >
        <ul className="flex flex-col gap-0.5 select-none">
          {THEMES.map((item) => (
            <li
              key={`theme-${item.tag}`}
              className={cn(
                "flex items-center gap-2 px-2 py-1.5 rounded-md",
                actualTheme.tag === item.tag
                  ? "font-semibold bg-gray-100 dark:bg-black cursor-default text-[#d11f22]"
                  : "cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800",
              )}
              onClick={() => handleChangeTheme(item.tag)}
            >
              <div className="w-4 h-4 rounded-full">{item.icon}</div>
              <p className="text-sm">{t(item.tag)}</p>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
