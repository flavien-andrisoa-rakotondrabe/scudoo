import Image from "next/image";

import { getLocale, getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("landing");
  const locale = await getLocale();

  return (
    <section
      id={t("navigation.home.anchor")}
      className="relative min-h-[calc(100vh-9rem)] grid grid-rows-[1fr] py-20 lg:py-36"
    >
      <div className="min-h-0">
        <div className="h-full flex gap-8">
          <div className="w-full lg:w-[calc(50%-1.25rem)] h-full min-h-[calc(100vh-5rem)] md:min-h-auto p-8 md:p-16 lg:p-0 lg:ps-20 flex flex-col gap-10 bg-[linear-gradient(to_top,black,transparent,black),url('/main-hero.png')] bg-center bg-cover lg:bg-none">
            <div className="flex-1 flex flex-col justify-center gap-10 text-white lg:text-foreground">
              <h1 className="text-4xl sm:text-6xl font-semibold max-w-96 md:max-w-160">
                {t("hero.title.1")}{" "}
                <span className="bg-linear-to-r from-[#3e090a] to-[#d11f22] bg-clip-text text-transparent">
                  {t("hero.title.2")}
                </span>{" "}
                {t("hero.title.3")}
              </h1>
              <p className="text-md sm:text-lg max-w-xl">
                {t("hero.description")}
              </p>
              <a
                href={`/locales/${locale}/plan.pdf`}
                download
                className="w-max flex items-center justify-center gap-2 px-8 sm:px-10 py-2 md:py-3 text-white font-semibold text-lg sm:text-xl rounded-full bg-linear-to-r from-[#3e090a] to-[#d11f22] cursor-pointer transition hover:opacity-90"
              >
                {t("hero.button")}
              </a>
            </div>

            <div className="hidden md:block py-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="544"
                height="58"
                viewBox="0 0 544 58"
                fill="none"
              >
                <line
                  y1="52.5"
                  x2="425"
                  y2="52.5"
                  stroke="url(#paint0_linear_14_89)"
                />
                <path
                  d="M435 53C435 55.7614 432.761 58 430 58C427.239 58 425 55.7614 425 53C425 50.2386 427.239 48 430 48C432.761 48 435 50.2386 435 53Z"
                  fill="url(#paint1_linear_14_89)"
                />
                <path
                  d="M214.625 52.7119L262.5 4.5"
                  stroke="url(#paint2_linear_14_89)"
                />
                <path
                  d="M539 0.5C541.485 0.50001 543.5 2.51473 543.5 5C543.5 7.48527 541.485 9.49999 539 9.5C536.515 9.5 534.5 7.48528 534.5 5C534.5 2.51472 536.515 0.5 539 0.5Z"
                  stroke="url(#paint3_linear_14_89)"
                />
                <path
                  d="M262.5 4.50006H534.007"
                  stroke="url(#paint4_linear_14_89)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_14_89"
                    x1="0"
                    y1="53.5"
                    x2="425"
                    y2="53.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3E090A" />
                    <stop offset="1" stopColor="#D11F22" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_14_89"
                    x1="425"
                    y1="53"
                    x2="435"
                    y2="53"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D11F22" />
                    <stop offset="1" stopColor="#3E090A" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_14_89"
                    x1="214.54"
                    y1="52.6278"
                    x2="262.584"
                    y2="4.58414"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3E090A" />
                    <stop offset="1" stopColor="#D11F22" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_14_89"
                    x1="534"
                    y1="5"
                    x2="544"
                    y2="5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3E090A" />
                    <stop offset="1" stopColor="#D11F22" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_14_89"
                    x1="262.5"
                    y1="5.00006"
                    x2="534.007"
                    y2="5.00006"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D11F22" />
                    <stop offset="1" stopColor="#3E090A" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="w-[calc(50%-1.25rem)] hidden lg:flex justify-end">
            <div className="relative w-full h-150">
              <Image
                src="/main-hero.png"
                alt="Hero"
                width={600}
                height={600}
                priority
                className="w-full h-full rounded-l-[280px] object-cover"
              />
              <div className="w-80 h-42 absolute -bottom-21 right-12">
                <Image
                  src="/weight.png"
                  alt="Weight"
                  width={320}
                  height={168}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
