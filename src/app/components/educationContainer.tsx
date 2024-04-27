import Link from "next/link";
import { useTranslations } from "next-intl";
import { education } from "@/configs/content";

export default function EducationContainer() {
  const t = useTranslations("education");

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          {t("title")}
        </h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
          {t("description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map(e => (
            <div key={e.title} className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                {t(e.title)}
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                {t(e.description)}
              </p>

              {e.keywords
                ? t(e.keywords)
                    .split("|")
                    .map(k => (
                      <p key={k} className="text-sm text-gray-400 text-md mb-1">
                        {k}
                      </p>
                    ))
                : ""}

              <div className="relative mt-4">
                <Link href={e.link} target="_blank">
                  <h6 className="font-semibold text-gray-500 text-md relative z-10">
                    {t("seeDetails")}
                  </h6>
                  <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
