"use client";

import Image from "next/image";
import Lang from "@/components/utils/Lang";
import Button from "@/components/utils/Button";
import Theme from "@/components/utils/Theme";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { HEADER_NAVIGATION } from "@/constants/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const t = useTranslations("landing");
  const scrollDirection = useScrollDirection();

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const anchors = HEADER_NAVIGATION.map((item) =>
      t(`navigation.${item}.anchor`),
    );

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    anchors.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [t]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full px-20 h-20 flex items-center justify-between bg-background shadow transition",
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0",
      )}
    >
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
          {HEADER_NAVIGATION.map((item) => {
            const anchor = t(`navigation.${item}.anchor`);
            const isActive = activeSection === anchor;

            return (
              <li key={`nav-${item}`}>
                <a
                  href={`#${anchor}`}
                  className={cn(
                    "relative text-xl",
                    isActive &&
                      "font-semibold px-1.5 bg-linear-to-r from-[#3e090a] to-[#d11f22] bg-clip-text text-transparent",
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
