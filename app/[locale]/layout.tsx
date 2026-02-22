import "../globals.css";

import ReduxProvider from "@/providers/ReduxProvider";
import UtilsProvider from "@/providers/UtilsProvider";
import ToastProvider from "@/providers/ToastProvider";

import { ReactNode } from "react";
import { Bai_Jamjuree } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
});

export const metadata: Metadata = {
  title: "Scudoo Holding",
  description: "Scudoo Holding",
  metadataBase: new URL(baseUrl),
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${baiJamjuree.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <UtilsProvider>
              <ToastProvider>{children}</ToastProvider>
            </UtilsProvider>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
