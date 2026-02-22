import Link from "next/link";

import { getLocale, getTranslations } from "next-intl/server";

export default async function Careers() {
  const t = await getTranslations("landing");
  const locale = await getLocale();

  return (
    <section
      id={t("navigation.careers.anchor")}
      className="relative px-10 md:px-20 py-16 md:py-36"
    >
      <div className="w-100 h-100 md:w-125 md:h-125 absolute top-0 right-0 bg-linear-to-l from-[#3e090a] to-[#d11f22] blur-[300px]"></div>

      <div className="relative z-10 min-h-85 flex flex-col justify-between gap-6 md:gap-8 items-center p-8 sm:p-16 lg:p-36 bg-linear-to-r from-[#3e090a] to-[#d11f22] rounded-[2rem]">
        <h2 className="text-3xl sm:text-4xl md:text-[3rem] text-center font-semibold text-white">
          Rejoignez l’équipe SCUDOO
        </h2>
        <p className="max-w-sm md:max-w-xl text-center text-white text-sm md:text-md">
          Nous recherchons des bâtisseurs capables de concevoir des systèmes
          évolutifs, sécurisés et performants.
        </p>
        <Link
          href="/join-us"
          className="w-max px-8 md:px-10 py-2 md:py-3 font-semibold text-lg md:text-xl rounded-full bg-white transition hover:opacity-90"
        >
          <p className="bg-linear-to-r from-[#3e090a] to-[#d11f22] bg-clip-text text-transparent">
            Soumettre ma candidature
          </p>
        </Link>
      </div>

      <div className="w-100 h-100 md:w-125 md:h-125 absolute bottom-0 left-0 bg-linear-to-r from-[#d11f22] to-[#3e090a] blur-[200px]"></div>
    </section>
  );
}
