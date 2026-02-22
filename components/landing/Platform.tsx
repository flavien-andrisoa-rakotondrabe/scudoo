import Image from "next/image";

import { cn } from "@/lib/utils";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Platform() {
  const t = await getTranslations("landing");
  const locale = await getLocale();

  const PLATFORMS = [
    {
      label: "Gym",
      image: "/gym-system.jpg",
      tag: "SaaS & IoT",
      description:
        "Inscription en moins de 5 min, contrôle d'accès NFC/Biométrie, visioconférence WebRTC intégrée et suivi des données de santé.",
    },
    {
      label: "Plateforme E-Commerce",
      image: "/e-commerce-system.jpg",
      tag: "Wellness & Subscription",
      description:
        "Gestion des abonnements récurrents via Stripe, automatisation CRM, et système d'affiliation pour influenceurs.",
    },
    {
      label: "Retail Tech & Équipements",
      image: "/equipments-system.avif",
      tag: "Expertise 3D",
      description:
        "Catalogue avec visualisation 3D interactive, intégration de scans corporels et outils de financement en ligne.",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1266"
          height="92"
          viewBox="0 0 1266 92"
          fill="none"
        >
          <line
            y1="46.0942"
            x2="381.001"
            y2="46.0942"
            stroke="url(#paint0_linear_32_315)"
          />
          <line
            x1="885"
            y1="45.7257"
            x2="1266"
            y2="45.7257"
            stroke="url(#paint1_linear_32_315)"
          />
          <line
            y1="-0.5"
            x2="63.7622"
            y2="-0.5"
            transform="matrix(0.707107 0.707107 -0.678844 0.734282 380.323 46.6635)"
            stroke="url(#paint2_linear_32_315)"
          />
          <line
            y1="-0.5"
            x2="63.7622"
            y2="-0.5"
            transform="matrix(0.707107 -0.707107 0.734282 0.678844 840 91.3125)"
            stroke="url(#paint3_linear_32_315)"
          />
          <path d="M425 91.4758H840.001" stroke="url(#paint4_linear_32_315)" />
          <line
            y1="-0.5"
            x2="63.7622"
            y2="-0.5"
            transform="matrix(0.707107 -0.707107 -0.678844 -0.734282 380 45.3123)"
            stroke="url(#paint5_linear_32_315)"
          />
          <line
            y1="-0.5"
            x2="63.7622"
            y2="-0.5"
            transform="matrix(0.707107 0.707107 0.734282 -0.678844 839.677 0.66333)"
            stroke="url(#paint6_linear_32_315)"
          />
          <path d="M424.677 0.5H839.678" stroke="url(#paint7_linear_32_315)" />
          <defs>
            <linearGradient
              id="paint0_linear_32_315"
              x1="0"
              y1="47.0942"
              x2="381.001"
              y2="47.0942"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E090A" />
              <stop offset="1" stopColor="#D11F22" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_32_315"
              x1="885"
              y1="46.7257"
              x2="1266"
              y2="46.7257"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D11F22" />
              <stop offset="1" stopColor="#3E090A" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_32_315"
              x1="0"
              y1="0.5"
              x2="63.7622"
              y2="0.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E090A" />
              <stop offset="1" stopColor="#D11F22" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_32_315"
              x1="0"
              y1="0.5"
              x2="63.7622"
              y2="0.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E090A" />
              <stop offset="1" stopColor="#D11F22" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_32_315"
              x1="425"
              y1="91.9758"
              x2="840.001"
              y2="91.9758"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D11F22" />
              <stop offset="1" stopColor="#3E090A" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_32_315"
              x1="0"
              y1="0.5"
              x2="63.7622"
              y2="0.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E090A" />
              <stop offset="1" stopColor="#D11F22" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_32_315"
              x1="0"
              y1="0.5"
              x2="63.7622"
              y2="0.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E090A" />
              <stop offset="1" stopColor="#D11F22" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_32_315"
              x1="424.677"
              y1="0"
              x2="839.678"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D11F22" />
              <stop offset="1" stopColor="#3E090A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <section className="flex flex-col gap-16 md:gap-36 px-10 md:px-20 py-20 md:py-40">
        <div className="w-full flex justify-center">
          <h2
            id={t("navigation.platform.anchor")}
            className="text-4xl md:text-6xl font-semibold text-center py-4"
          >
            Nos{" "}
            <span className="bg-linear-to-r from-[#3e090a] to-[#d11f22] bg-clip-text text-transparent">
              Plateformes
            </span>{" "}
            Digitales
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {PLATFORMS.map((item, index) => (
            <div key={`platform-${item.label}`} className="flex flex-col gap-8">
              <div
                className={cn(
                  "relative flex-1 flex items-center gap-8",
                  index % 2 !== 0 && "flex-row-reverse",
                )}
              >
                <div className="flex-1">
                  <div className="relative w-full h-100 rounded-4xl shadow">
                    <Image
                      src={item.image}
                      alt={item.label}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-4xl"
                    />
                    <p className="absolute top-4 left-4 w-max py-2 px-6 rounded-full bg-linear-to-r from-[#3e090a] to-[#d11f22] text-white font-semibold">
                      {item.tag}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 md:relative flex-1 flex items-center justify-center">
                  {index % 2 === 0 && (
                    <div className="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="325"
                        height="87"
                        viewBox="0 0 325 87"
                        fill="none"
                        className="w-full"
                      >
                        <path
                          d="M5 86.5002C2.51473 86.5002 0.5 84.4855 0.5 82.0002C0.5 79.515 2.51473 77.5003 5 77.5002C7.48528 77.5002 9.5 79.515 9.5 82.0002C9.5 84.4855 7.48528 86.5002 5 86.5002Z"
                          stroke="url(#paint0_linear_85_45)"
                        />
                        <path
                          d="M5 9.5C2.51472 9.5 0.5 7.48528 0.5 5C0.5 2.51472 2.51472 0.5 5 0.5C7.48528 0.5 9.5 2.51472 9.5 5C9.5 7.48528 7.48528 9.5 5 9.5Z"
                          stroke="url(#paint1_linear_85_45)"
                        />
                        <path
                          d="M10 44.0002C10 46.7617 7.76142 49.0002 5 49.0002C2.23858 49.0002 0 46.7617 0 44.0002C0 41.2388 2.23858 39.0002 5 39.0002C7.76142 39.0002 10 41.2388 10 44.0002Z"
                          fill="url(#paint2_linear_85_45)"
                        />
                        <line
                          y1="-0.5"
                          x2="59.829"
                          y2="-0.5"
                          transform="matrix(0.768221 -0.640185 0.768221 0.640185 96.5312 82.4597)"
                          stroke="url(#paint3_linear_85_45)"
                        />
                        <line
                          x1="9.52838"
                          y1="81.5745"
                          x2="96.5341"
                          y2="81.5745"
                          stroke="url(#paint4_linear_85_45)"
                        />
                        <line
                          x1="9.53125"
                          y1="43.6584"
                          x2="324.531"
                          y2="43.6584"
                          stroke="url(#paint5_linear_85_45)"
                        />
                        <path
                          d="M50.5312 4.99023L96.4932 43.2919"
                          stroke="url(#paint6_linear_85_45)"
                        />
                        <line
                          x1="9.53125"
                          y1="5.3252"
                          x2="50.549"
                          y2="5.3252"
                          stroke="url(#paint7_linear_85_45)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_85_45"
                            x1="10"
                            y1="82.0002"
                            x2="0"
                            y2="82.0002"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3E090A" />
                            <stop offset="1" stopColor="#D11F22" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_85_45"
                            x1="10"
                            y1="5"
                            x2="0"
                            y2="5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3E090A" />
                            <stop offset="1" stopColor="#D11F22" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_85_45"
                            x1="0"
                            y1="44.0002"
                            x2="10"
                            y2="44.0002"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3E090A" />
                            <stop offset="1" stopColor="#D11F22" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_85_45"
                            x1="0"
                            y1="0.5"
                            x2="59.829"
                            y2="0.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3E090A" />
                            <stop offset="1" stopColor="#D11F22" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_85_45"
                            x1="9.52838"
                            y1="82.5745"
                            x2="96.5341"
                            y2="82.5745"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#D11F22" />
                            <stop offset="1" stopColor="#3E090A" />
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear_85_45"
                            x1="9.53125"
                            y1="44.6584"
                            x2="324.531"
                            y2="44.6584"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#D11F22" />
                            <stop offset="1" stopColor="#3E090A" />
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear_85_45"
                            x1="50.1471"
                            y1="5.31033"
                            x2="87.8209"
                            y2="50.5188"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3E090A" />
                            <stop offset="1" stopColor="#D11F22" />
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear_85_45"
                            x1="9.53125"
                            y1="6.3252"
                            x2="50.549"
                            y2="6.3252"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#D11F22" />
                            <stop offset="1" stopColor="#3E090A" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                  <p className="w-25 h-25 min-w-25 min-h-25 flex justify-center items-center font-bold text-[3rem] bg-linear-to-r from-[#3e090a] to-[#d11f22] text-white rounded-full">
                    {index + 1}
                  </p>
                  {index % 2 !== 0 && (
                    <div className="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="325"
                        height="87"
                        viewBox="0 0 325 87"
                        fill="none"
                        className="w-full"
                      >
                        <path
                          d="M319.469 48.5C321.954 48.5 323.969 46.4853 323.969 44C323.969 41.5147 321.954 39.5 319.469 39.5C316.983 39.5 314.969 41.5147 314.969 44C314.969 46.4853 316.983 48.5 319.469 48.5Z"
                          stroke="url(#paint0_linear_88_45)"
                        />
                        <path
                          d="M314.469 5C314.469 7.76142 316.707 10 319.469 10C322.23 10 324.469 7.76142 324.469 5C324.469 2.23858 322.23 0 319.469 0C316.707 0 314.469 2.23858 314.469 5Z"
                          fill="url(#paint1_linear_88_45)"
                        />
                        <path
                          d="M314.469 81.9998C314.469 84.7612 316.707 86.9998 319.469 86.9998C322.23 86.9998 324.469 84.7612 324.469 81.9998C324.469 79.2383 322.23 76.9998 319.469 76.9998C316.707 76.9998 314.469 79.2383 314.469 81.9998Z"
                          fill="url(#paint2_linear_88_45)"
                        />
                        <line
                          y1="-0.5"
                          x2="60.1924"
                          y2="-0.5"
                          transform="matrix(-0.763584 -0.645709 -0.763584 0.645709 228 83.5603)"
                          stroke="url(#paint3_linear_88_45)"
                        />
                        <line
                          y1="-0.5"
                          x2="87.0057"
                          y2="-0.5"
                          transform="matrix(-1 0 0 1 315.003 83.1702)"
                          stroke="url(#paint4_linear_88_45)"
                        />
                        <line
                          y1="-0.5"
                          x2="315"
                          y2="-0.5"
                          transform="matrix(-1 0 0 1 315 44.6948)"
                          stroke="url(#paint5_linear_88_45)"
                        />
                        <path
                          d="M274 4.9502L228.038 43.8169"
                          stroke="url(#paint6_linear_88_45)"
                        />
                        <line
                          y1="-0.5"
                          x2="41.0177"
                          y2="-0.5"
                          transform="matrix(-1 0 0 1 315 5.79492)"
                          stroke="url(#paint7_linear_88_45)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_88_45"
                            x1="314.469"
                            y1="44"
                            x2="324.469"
                            y2="44"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3E090A" />
                            <stop offset="1" stopColor="#D11F22" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_88_45"
                            x1="324.469"
                            y1="5"
                            x2="314.469"
                            y2="5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3E090A" />
                            <stop offset="1" stopColor="#D11F22" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_88_45"
                            x1="324.469"
                            y1="81.9998"
                            x2="314.469"
                            y2="81.9998"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3E090A" />
                            <stop offset="1" stopColor="#D11F22" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_88_45"
                            x1="0"
                            y1="0.5"
                            x2="60.1924"
                            y2="0.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3E090A" />
                            <stop offset="1" stopColor="#D11F22" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_88_45"
                            x1="0"
                            y1="0.5"
                            x2="87.0057"
                            y2="0.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#D11F22" />
                            <stop offset="1" stopColor="#3E090A" />
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear_88_45"
                            x1="0"
                            y1="0.5"
                            x2="315"
                            y2="0.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#D11F22" />
                            <stop offset="1" stopColor="#3E090A" />
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear_88_45"
                            x1="274.382"
                            y1="5.27305"
                            x2="236.055"
                            y2="50.5964"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3E090A" />
                            <stop offset="1" stopColor="#D11F22" />
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear_88_45"
                            x1="0"
                            y1="0.5"
                            x2="41.0177"
                            y2="0.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#D11F22" />
                            <stop offset="1" stopColor="#3E090A" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              <div
                className={cn(
                  "flex items-center gap-8",
                  index % 2 !== 0 && "flex-row-reverse",
                )}
              >
                <div className="flex-1 flex justify-center items-center">
                  <p className="text-xl text-center max-w-120">
                    {item.description}
                  </p>
                </div>
                <div className="flex-1 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
