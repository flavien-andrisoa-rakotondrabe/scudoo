"use client";

import { useLocale, useTranslations } from "next-intl";

export default function Vision() {
  const t = useTranslations("landing");
  const { locale } = useLocale();

  return (
    <section id={t("navigation.vision.anchor")}>
      <div className="w-full flex items-center justify-between">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="111"
            height="356"
            viewBox="0 0 111 356"
            fill="none"
          >
            <path
              d="M-1 1.72272L-1 353.348L110.409 177.535L-1 1.72272Z"
              stroke="url(#paint0_linear_44_58)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_44_58"
                x1="36"
                y1="382.535"
                x2="36"
                y2="-27.4648"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3E090A" />
                <stop offset="1" stop-color="#D11F22" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 className="max-w-3xl text-6xl font-semibold text-center">
          Un{" "}
          <span className="bg-linear-to-r from-[#3e090a] to-[#d11f22] bg-clip-text text-transparent">
            écosystème
          </span>{" "}
          en pleine croissance
        </h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="111"
            height="356"
            viewBox="0 0 111 356"
            fill="none"
          >
            <path
              d="M112 1.72272L112 353.348L0.59082 177.535L112 1.72272Z"
              stroke="url(#paint0_linear_44_49)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_44_49"
                x1="75"
                y1="382.535"
                x2="75"
                y2="-27.4648"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3E090A" />
                <stop offset="1" stop-color="#D11F22" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
