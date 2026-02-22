import Image from "next/image";

import { getLocale, getTranslations } from "next-intl/server";
import { HEADER_NAVIGATION } from "@/constants/navigation";

export default async function Footer() {
  const t = await getTranslations("landing");
  const locale = await getLocale();

  return (
    <div className="py-8">
      <div className="w-full flex justify-center px-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1281"
          height="100"
          viewBox="0 0 1281 100"
          fill="none"
          className="w-full max-w-7xl h-25"
        >
          <line
            x1="10.0009"
            y1="19.5"
            x2="567"
            y2="20.5018"
            stroke="url(#paint0_linear_93_47)"
          />
          <path d="M714 20H1271" stroke="url(#paint1_linear_93_47)" />
          <path d="M289 69H567" stroke="url(#paint2_linear_93_47)" />
          <path d="M714 69L992 69" stroke="url(#paint3_linear_93_47)" />
          <path
            d="M1.81198e-05 20C1.81198e-05 22.7614 2.2386 25 5.00002 25C7.76144 25 10 22.7614 10 20C10 17.2386 7.76144 15 5.00002 15C2.2386 15 1.81198e-05 17.2386 1.81198e-05 20Z"
            fill="url(#paint4_linear_93_47)"
          />
          <path
            d="M992 69C992 71.7614 994.239 74 997 74C999.761 74 1002 71.7614 1002 69C1002 66.2386 999.761 64 997 64C994.239 64 992 66.2386 992 69Z"
            fill="url(#paint5_linear_93_47)"
          />
          <path
            d="M284 73.5C286.485 73.5 288.5 71.4853 288.5 69C288.5 66.5147 286.485 64.5 284 64.5C281.515 64.5 279.5 66.5147 279.5 69C279.5 71.4853 281.515 73.5 284 73.5Z"
            stroke="url(#paint6_linear_93_47)"
          />
          <path
            d="M1276 24.5C1278.49 24.5 1280.5 22.4853 1280.5 20C1280.5 17.5147 1278.49 15.5 1276 15.5C1273.51 15.5 1271.5 17.5147 1271.5 20C1271.5 22.4853 1273.51 24.5 1276 24.5Z"
            stroke="url(#paint7_linear_93_47)"
          />
          <circle cx="641" cy="50" r="50" fill="url(#paint8_linear_93_47)" />
          <line
            x1="689.354"
            y1="44.6464"
            x2="714.102"
            y2="69.3952"
            stroke="url(#paint9_linear_93_47)"
          />
          <line
            x1="566.354"
            y1="19.6464"
            x2="591.102"
            y2="44.3952"
            stroke="url(#paint10_linear_93_47)"
          />
          <line
            x1="566.646"
            y1="69.395"
            x2="591.395"
            y2="44.6462"
            stroke="url(#paint11_linear_93_47)"
          />
          <line
            x1="689.646"
            y1="44.395"
            x2="714.395"
            y2="19.6462"
            stroke="url(#paint12_linear_93_47)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93_47"
              x1="9.9991"
              y1="20.5"
              x2="566.998"
              y2="21.5018"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D11F22" />
              <stop offset="1" stopColor="#3E090A" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93_47"
              x1="714"
              y1="20.5"
              x2="1271"
              y2="20.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D11F22" />
              <stop offset="1" stopColor="#3E090A" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_93_47"
              x1="289"
              y1="69.5"
              x2="567"
              y2="69.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E090A" />
              <stop offset="1" stopColor="#D11F22" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_93_47"
              x1="714"
              y1="69.5"
              x2="992"
              y2="69.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E090A" />
              <stop offset="1" stopColor="#D11F22" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_93_47"
              x1="10"
              y1="20"
              x2="0"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D11F22" />
              <stop offset="1" stopColor="#3E090A" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_93_47"
              x1="1002"
              y1="69"
              x2="992"
              y2="69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E090A" />
              <stop offset="1" stopColor="#D11F22" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_93_47"
              x1="279"
              y1="69"
              x2="289"
              y2="69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D11F22" />
              <stop offset="1" stopColor="#3E090A" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_93_47"
              x1="1271"
              y1="20"
              x2="1281"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E090A" />
              <stop offset="1" stopColor="#D11F22" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_93_47"
              x1="591"
              y1="50"
              x2="691"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E090A" />
              <stop offset="1" stopColor="#D11F22" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_93_47"
              x1="688.646"
              y1="45.3536"
              x2="713.395"
              y2="70.1023"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D11F22" />
              <stop offset="1" stopColor="#3E090A" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_93_47"
              x1="565.646"
              y1="20.3536"
              x2="590.395"
              y2="45.1023"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D11F22" />
              <stop offset="1" stopColor="#3E090A" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_93_47"
              x1="567.354"
              y1="70.1021"
              x2="592.102"
              y2="45.3534"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D11F22" />
              <stop offset="1" stopColor="#3E090A" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_93_47"
              x1="690.354"
              y1="45.1021"
              x2="715.102"
              y2="20.3534"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D11F22" />
              <stop offset="1" stopColor="#3E090A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <footer className="opacity-80 text-sm pt-16 px-10 md:px-20">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-between">
          <div className="flex-1">
            <div className="flex flex-nowrap items-center">
              <div className="w-16 h-16">
                <Image
                  src="/mini-logo.png"
                  alt="Logo"
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>
              <span className="text-2xl whitespace-nowrap">cudoo Holding</span>
            </div>
            <p className="max-w-xs mt-6 text-lg font-medium leading-6">
              {t("footer.1.title")}
            </p>
          </div>

          <div className="flex-1">
            <h6 className="text-xl font-semibold">{t("footer.2.title")}</h6>
            <ul className="mt-6 flex flex-col gap-2 list-disc list-inside">
              {HEADER_NAVIGATION.map((item) => (
                <li key={`nav-${item}`} className="">
                  <a
                    href={`#${t(`navigation.${item}.anchor`)}`}
                    className="relative font-medium hover:underline hover:text-[#3E090A]"
                  >
                    {t(`navigation.${item}.label`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h6 className="text-xl font-semibold">{t("footer.3.title")}</h6>
            <p className="text-lg font-medium mt-6">{t("footer.3.subTitle")}</p>
            <p className="mt-4 max-w-sm">{t("footer.3.description")}</p>
            <a
              href={`/locales/${locale}/plan.pdf`}
              download
              className="w-max mt-4 flex items-center justify-center gap-2 px-8 py-2 text-white font-medium text-lg rounded-full bg-linear-to-r from-[#3e090a] to-[#d11f22] cursor-pointer transition hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="size-5"
              >
                <path
                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{t("footer.3.button")}</span>
            </a>
          </div>
        </div>

        <div className="mt-16 relative flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="855"
            height="31"
            viewBox="0 0 855 31"
            fill="none"
            className="w-full"
          >
            <path
              d="M260 0.707031L595 0.707031"
              stroke="url(#paint0_linear_94_48)"
            />
            <path
              d="M845 25.707C845 28.4685 847.239 30.707 850 30.707C852.761 30.707 855 28.4685 855 25.707C855 22.9456 852.761 20.707 850 20.707C847.239 20.707 845 22.9456 845 25.707Z"
              fill="url(#paint1_linear_94_48)"
            />
            <path
              d="M5.00003 30.207C7.4853 30.207 9.50003 28.1923 9.50003 25.707C9.50003 23.2218 7.4853 21.207 5.00003 21.207C2.51475 21.207 0.500031 23.2217 0.500031 25.707C0.500031 28.1923 2.51475 30.207 5.00003 30.207Z"
              stroke="url(#paint2_linear_94_48)"
            />
            <line
              x1="594.354"
              y1="0.353478"
              x2="620.101"
              y2="26.101"
              stroke="url(#paint3_linear_94_48)"
            />
            <line
              x1="234.646"
              y1="26.101"
              x2="260.394"
              y2="0.353534"
              stroke="url(#paint4_linear_94_48)"
            />
            <line x1="620" y1="26.207" x2="845" y2="26.207" stroke="black" />
            <line x1="10" y1="26.207" x2="235" y2="26.207" stroke="black" />
            <defs>
              <linearGradient
                id="paint0_linear_94_48"
                x1="260"
                y1="1.20703"
                x2="595"
                y2="1.20703"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3E090A" />
                <stop offset="1" stopColor="#D11F22" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94_48"
                x1="855"
                y1="25.707"
                x2="845"
                y2="25.707"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3E090A" />
                <stop offset="1" stopColor="#D11F22" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94_48"
                x1="3.05176e-05"
                y1="25.707"
                x2="10"
                y2="25.707"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D11F22" />
                <stop offset="1" stopColor="#3E090A" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94_48"
                x1="593.646"
                y1="1.06058"
                x2="619.394"
                y2="26.8081"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D11F22" />
                <stop offset="1" stopColor="#3E090A" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94_48"
                x1="235.354"
                y1="26.8081"
                x2="261.101"
                y2="1.06064"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D11F22" />
                <stop offset="1" stopColor="#3E090A" />
              </linearGradient>
            </defs>
          </svg>

          <p className="mt-4 md:text-sm text-center">{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
