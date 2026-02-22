import Link from "next/link";
import Image from "next/image";
import JoinUs from "@/components/join-us/JoinUs";

export default function JoinUsPage() {
  return (
    <>
      <header>
        <Link href="/" className="flex items-center px-20 py-10">
          <div className="w-16 h-16 cursor-pointer">
            <Image
              src="/mini-logo.png"
              alt="Logo"
              width={64}
              height={64}
              className="w-full h-full"
            />
          </div>
          <span className="text-2xl">cudoo Holding</span>
        </Link>
      </header>

      <main className="relative flex flex-col justify-center items-center">
        <h1 className="text-6xl font-semibold bg-linear-to-r from-[#3e090a] to-[#d11f22] bg-clip-text text-transparent">
          Nous rejoindre
        </h1>

        <section className="z-10 w-full p-20">
          <div className="w-full p-16 bg-primary-background rounded-4xl">
            <JoinUs />
          </div>
        </section>

        <div className="absolute top-0 w-125 h-125 bg-linear-to-r from-[#3e090a] to-[#d11f22] blur-[250px]"></div>
      </main>
    </>
  );
}
