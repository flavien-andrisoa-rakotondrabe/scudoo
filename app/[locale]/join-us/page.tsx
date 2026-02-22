import Link from "next/link";
import Image from "next/image";
import JoinUs from "@/components/join-us/JoinUs";

import { getTranslations } from "next-intl/server";

export default async function JoinUsPage() {
  const t = await getTranslations("joinUs");

  return (
    <>
      <header>
        <Link
          href="/"
          className="flex items-center flex-nowrap px-2 md:px-20 py-2 md:py-10"
        >
          <label className="w-16 h-16 cursor-pointer">
            <Image
              src="/mini-logo.png"
              alt="Logo"
              width={64}
              height={64}
              className="w-full h-full"
            />
          </label>
          <p className="text-2xl whitespace-nowrap">cudoo Holding</p>
        </Link>
      </header>

      <main className="relative mt-4 md:mt-0 flex flex-col justify-center items-center">
        <h1 className="z-10 text-4xl md:text-6xl font-semibold">
          {t("title.1")}{" "}
          <span className="bg-linear-to-r from-[#3e090a] to-[#d11f22] bg-clip-text text-transparent">
            {t("title.2")}
          </span>
        </h1>

        <section className="z-10 w-full px-4 py-8 md:p-20">
          <div className="w-full bg-primary-background rounded-2xl md:rounded-4xl">
            <JoinUs />
          </div>
        </section>

        <div className="absolute top-0 w-full md:w-130 h-100 md:h-125 bg-linear-to-r from-[#3e090a] to-[#d11f22] blur-[250px]"></div>
      </main>
    </>
  );
}
