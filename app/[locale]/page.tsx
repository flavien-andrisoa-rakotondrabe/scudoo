import NavBar from "@/components/utils/NavBar";
import Hero from "@/components/landing/Hero";
import Vision from "@/components/landing/Vision";
import Platform from "@/components/landing/Platform";
import Careers from "@/components/landing/Careers";
import Footer from "@/components/landing/Footer";
import ScrollTop from "@/components/utils/ScrollTop";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("metadata");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

  return {
    // BASE
    title: {
      template: t("landing.title.template"),
      default: t("landing.title.default"),
    },
    description: t("landing.description"),
    applicationName: "Scudoo Holding",
    authors: [{ name: "Scudoo Holding", url: baseUrl }],
    keywords: t("landing.keywords").split(","),

    // GOOGLE
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "fr-FR": "/fr",
        "en-US": "/en",
        "x-default": "/en",
      },
    },

    // Facebook, LinkedIn, Discord
    openGraph: {
      title: t("landing.title.default"),
      description: t("landing.description"),
      siteName: "Scudoo Holding",
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      images: [
        {
          url: "/mini-logo.png",
          width: 1200,
          height: 630,
          alt: "Scudoo Holding",
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: t("landing.title.default"),
      description: t("landing.description"),
      images: ["/mini-logo.png"],
    },

    // ROBOTS
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export default async function LandingPage() {
  return (
    <div className="relative w-full min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Vision />
        <Platform />
        <Careers />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
