"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useState } from "react";
import LanguageList from "./list";
import { LANGUAGE_PICTURE_SIZE } from "@/constants/languages";
import { getUrlByName } from "@/utils/languages";

export default function LanguageSelector() {
  const locale = useLocale();
  const [modal, setModal] = useState(false);

  function changeModal() {
    setModal(!modal);
  }

  return (
    <div className="relative inline-block">
      <button
        className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
        onClick={changeModal}
      >
        <Image
          src={getUrlByName(locale)}
          width={LANGUAGE_PICTURE_SIZE}
          height={LANGUAGE_PICTURE_SIZE}
          alt={locale}
        />
      </button>

      {modal ? <LanguageList /> : <></>}
    </div>
  );
}
