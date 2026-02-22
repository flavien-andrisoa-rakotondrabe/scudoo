"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Vision() {
  const t = useTranslations("landing");

  const ECOSYSTEMS = [
    {
      label: t("vision.items.1.title"),
      description: t("vision.items.1.description"),
      image: "/innovation.jpg",
    },
    {
      label: t("vision.items.2.title"),
      description: t("vision.items.2.description"),
      image: "/e-commerce.avif",
    },
    {
      label: t("vision.items.3.title"),
      description: t("vision.items.3.description"),
      image: "/equipments.jpg",
    },
  ];

  const index = 0;

  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(index);

  useEffect(() => {
    if (!api) return;

    // Positionner le carousel sur l’index reçu
    api.scrollTo(index, true);

    const update = () => {
      const selected = api.selectedScrollSnap();
      setCurrentIndex(selected);
    };

    // Sync initiale
    update();

    // Listeners
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api, index]);

  return (
    <section className="py-16 md:py-36">
      <div className="relative w-full flex items-center justify-center">
        <div className="absolute left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="111"
            height="356"
            viewBox="0 0 111 356"
            fill="none"
            className="w-14 md:w-28 h-45 md:h-90"
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
                <stop stopColor="#3E090A" />
                <stop offset="1" stopColor="#D11F22" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1
          id={t("navigation.vision.anchor")}
          className="z-10 max-w-xl md:max-w-3xl text-4xl md:text-6xl font-semibold text-center"
        >
          {t("vision.title.1")}{" "}
          <span className="bg-linear-to-r from-[#3e090a] to-[#d11f22] bg-clip-text text-transparent">
            {t("vision.title.2")}
          </span>{" "}
          {t("vision.title.3")}
        </h1>
        <div className="absolute right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="111"
            height="356"
            viewBox="0 0 111 356"
            fill="none"
            className="w-14 md:w-28 h-45 md:h-90"
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
                <stop stopColor="#3E090A" />
                <stop offset="1" stopColor="#D11F22" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="relative w-full flex items-center justify-between gap-4 lg:gap-8 p-8 lg:p-16">
        <button
          className="hidden lg:block cursor-pointer hover:opacity-80 trnasition disabled:opacity-50 disabled:cursor-default"
          onClick={() => api?.scrollPrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="size-12"
          >
            <path
              d="M8.5002 12.8L14.2002 18.4C14.6002 18.8 15.2002 18.8 15.6002 18.4C16.0002 18 16.0002 17.4 15.6002 17L10.7002 12L15.6002 7.00005C16.0002 6.60005 16.0002 6.00005 15.6002 5.60005C15.4002 5.40005 15.2002 5.30005 14.9002 5.30005C14.6002 5.30005 14.4002 5.40005 14.2002 5.60005L8.5002 11.2C8.1002 11.7 8.1002 12.3 8.5002 12.8C8.5002 12.7 8.5002 12.7 8.5002 12.8Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <div className="w-full lg:w-[calc(100%-8rem)] flex flex-col items-center justify-center lg:gap-8">
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="relative max-w-full"
          >
            <CarouselContent>
              {ECOSYSTEMS.map((item) => (
                <CarouselItem key={`carousel-${item.label}`}>
                  <div className="relative w-full h-140">
                    <div
                      className="w-full h-full flex flex-col justify-end gap-3 p-8 rounded-4xl"
                      style={{
                        background: `linear-gradient(to top, #000, transparent), center / cover url(${item.image})`,
                      }}
                    >
                      <h2 className="text-4xl md:text-[3rem] text-white font-semibold">
                        {item.label}
                      </h2>
                      <p className="max-w-sm md:max-w-2xl text-gray-100 text-sm md:text-md">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute -bottom-20 -right-20 hidden lg:block">
              <Carousel setApi={setApi} className="max-w-sm">
                <CarouselContent>
                  {ECOSYSTEMS.map(
                    (item, index) =>
                      currentIndex !== index && (
                        <CarouselItem
                          key={`carousel-${item.label}`}
                          onClick={() => api?.scrollTo(index)}
                          className="basis-1/2"
                        >
                          <div className="relative w-full h-40 rounded-4xl shadow group overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.label}
                              width={240}
                              height={160}
                              className="w-full h-full object-cover rounded-4xl group-hover:scale-105 transition"
                            />
                          </div>
                        </CarouselItem>
                      ),
                  )}
                </CarouselContent>
              </Carousel>
            </div>
          </Carousel>

          <div className="mt-4 space-x-2">
            {ECOSYSTEMS.map((item, index) => (
              <button
                key={`carousel-dot-${item.label}`}
                onClick={() => api?.scrollTo(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-6 bg-linear-to-r from-[#3e090a] to-[#d11f22]"
                    : "w-2.5 bg-gray-200 hover:bg-gray-300 cursor-pointer"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          className="hidden lg:block cursor-pointer hover:opacity-80  trnasition disabled:opacity-50 disabled:cursor-default"
          onClick={() => api?.scrollNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="size-12"
          >
            <path
              d="M15.5402 11.29L9.88023 5.64004C9.78726 5.54631 9.67666 5.47191 9.5548 5.42115C9.43294 5.37038 9.30224 5.34424 9.17023 5.34424C9.03821 5.34424 8.90751 5.37038 8.78565 5.42115C8.66379 5.47191 8.55319 5.54631 8.46023 5.64004C8.27398 5.8274 8.16943 6.08085 8.16943 6.34504C8.16943 6.60922 8.27398 6.86267 8.46023 7.05004L13.4102 12.05L8.46023 17C8.27398 17.1874 8.16943 17.4409 8.16943 17.705C8.16943 17.9692 8.27398 18.2227 8.46023 18.41C8.55284 18.5045 8.66329 18.5797 8.78516 18.6312C8.90704 18.6827 9.03792 18.7095 9.17023 18.71C9.30253 18.7095 9.43342 18.6827 9.55529 18.6312C9.67717 18.5797 9.78761 18.5045 9.88023 18.41L15.5402 12.76C15.6417 12.6664 15.7227 12.5527 15.7781 12.4262C15.8336 12.2997 15.8622 12.1631 15.8622 12.025C15.8622 11.8869 15.8336 11.7503 15.7781 11.6238C15.7227 11.4973 15.6417 11.3837 15.5402 11.29Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
