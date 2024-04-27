"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSelector from "./languageSelector/main";
import profile from "@/assets/images/profile.jpeg";
import useHero from "@/hooks/useHero";

export default function HeroContainer() {
  const t = useTranslations("hero");
  const { cvHandler, getMailLink } = useHero();

  return (
    <section className="py-10 md:py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex items-center justify-between mb-20">
          <LanguageSelector />

          <button
            className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
            onClick={cvHandler}
          >
            {t("actions.seeCV")}
          </button>
        </nav>

        <div className="text-center">
          <div className="flex justify-center mb-16">
            <Image
              unoptimized
              className="rounded-full max-w-60"
              src={profile.src}
              alt={t("name")}
              width={profile.width}
              height={profile.height}
            />
          </div>

          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
            {t("name")}
          </h6>

          <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
            {t("position")}
          </h1>

          <p className="font-normal text-gray-600 text-md md:text-xl mb-16 max-w-4xl m-auto">
            {t("description")}
          </p>

          <a
            href={getMailLink()}
            className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            {t("actions.contactMe")}
          </a>
        </div>
      </div>
    </section>
  );
}
