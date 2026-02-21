"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { DEFAULT_THEME } from "@/constants/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { updateUtilsReducer } from "@/redux/slices/utilsSlice";

import { ResolvedThemeType } from "@/types/utils.type";

interface UtilsProviderContextType {}

const UtilsContext = createContext<UtilsProviderContextType | undefined>(
  undefined,
);

export default function ({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: RootState) => state.utils);

  const [resolvedTheme, setResolvedTheme] =
    useState<ResolvedThemeType>(DEFAULT_THEME);

  useEffect(() => {
    const root = window.document.documentElement;

    const determineTheme = () => {
      if (theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      return theme;
    };

    const finalTheme = determineTheme();
    setResolvedTheme(finalTheme);

    if (finalTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    dispatch(updateUtilsReducer({ resolvedTheme }));
  }, [resolvedTheme]);

  return (
    <UtilsContext.Provider value={{}}>
      <TooltipProvider delayDuration={500}>{children}</TooltipProvider>
    </UtilsContext.Provider>
  );
}
