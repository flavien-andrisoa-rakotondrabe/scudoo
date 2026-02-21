"use client";

import Image from "next/image";
import Lang from "@/components/utils/Lang";
import Button from "@/components/utils/Button";
import Theme from "@/components/utils/Theme";

import { useTranslations } from "next-intl";
import { HEADER_NAVIGATION } from "@/constants/navigation";

export default function NavBar() {
  const t = useTranslations("landing");

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
              <a href={t(`navigation.${item}.anchor`)} className="text-xl">
                {t(`navigation.${item}.label`)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <Theme />
          <Lang />
        </div>
        <Button label={t("joinUs")} href="/join-us" />
      </div>
    </header>
  );
}
