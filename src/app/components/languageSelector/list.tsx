import Image from "next/image";
import Link from "next/link";
import { listLocales } from "@/configs/locales";
import { LANGUAGE_PICTURE_SIZE } from "@/constants/languages";
import { getUrlByName } from "@/utils/languages";

export default function LanguageList() {
  const locales = listLocales;

  return (
    <div className="absolute left-0 z-20 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl">
      {locales.map(l => (
        <Link
          key={l}
          href={"/" + l}
          className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform"
        >
          <Image
            src={getUrlByName(l)}
            width={LANGUAGE_PICTURE_SIZE}
            height={LANGUAGE_PICTURE_SIZE}
            alt={l}
          />
        </Link>
      ))}
    </div>
  );
}
