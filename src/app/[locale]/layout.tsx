import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import code from "@/assets/images/code.png";
import { getFontClass } from "@/configs/fonts";
import { listLocales } from "@/configs/locales";
import { Props } from "@/interfaces/metadata";

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const fontClass = getFontClass();
  const messages = useMessages();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href={code.src} sizes="any" />
      </head>
      <body className={fontClass}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return listLocales.map(x => ({ locale: x }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({
    locale,
    namespace: "metadata",
  });
  const canonical = process.env.NEXT_PUBLIC_ENDPOINT || "";

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(canonical),
    openGraph: {
      images: "/code.png",
    },
  };
}
