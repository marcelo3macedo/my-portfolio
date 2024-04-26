import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { getFontClass } from "@/configs/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const fontClass = getFontClass();

  return (
    <html lang={locale}>
      <body className={fontClass}>{children}</body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}
