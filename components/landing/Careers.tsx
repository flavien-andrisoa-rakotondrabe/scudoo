import Link from "next/link";

import { getLocale, getTranslations } from "next-intl/server";

export default async function Careers() {
  const t = await getTranslations("landing");
  const locale = await getLocale();

  return (
    <section
      id={t("navigation.careers.anchor")}
      className="relative px-20 py-36"
    >
      <div className="w-125 h-125 absolute top-0 right-0 bg-linear-to-l from-[#3e090a] to-[#d11f22] blur-[250px]"></div>

      <div className="relative z-10 flex flex-col gap-8 justify-center items-center p-36 bg-linear-to-r from-[#3e090a] to-[#d11f22] rounded-[2rem]">
        <h2 className="text-[3rem] font-semibold text-white">
          Rejoignez l’équipe SCUDOO
        </h2>
        <p className="max-w-xl text-center text-white">
          Nous recherchons des bâtisseurs capables de concevoir des systèmes
          évolutifs, sécurisés et performants.
        </p>
        <Link
          href="/join-us"
          className="w-max px-10 py-3 font-semibold text-xl rounded-full bg-white transition hover:opacity-90"
        >
          <p className="bg-linear-to-r from-[#3e090a] to-[#d11f22] bg-clip-text text-transparent">
            Soumettre ma candidature
          </p>
        </Link>
      </div>

      <div className="w-125 h-125 absolute bottom-0 left-0 bg-linear-to-r from-[#d11f22] to-[#3e090a] blur-[200px]"></div>
    </section>
  );
}
