import { useTranslations } from "next-intl";
import { companies } from "@/configs/content";

export default function ExperienceContainer() {
  const t = useTranslations("experience");

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          {t("title")}
        </h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
          {t("description")}
        </p>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 text-base uppercase">
              {t("types.company")}
            </h6>

            {companies.map(c => (
              <p
                key={c.company}
                className="font-semibold text-gray-600 text-base"
              >
                {c.company}
                <span className="font-normal text-gray-300">/ {c.city}</span>
              </p>
            ))}
          </div>

          <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 text-base uppercase">
              {t("types.position")}
            </h6>

            {companies.map(c => (
              <p
                key={c.company}
                className="font-normal text-gray-400 text-base"
              >
                {t(c.position)}
              </p>
            ))}
          </div>

          <div className="space-y-8 md:space-y-16">
            <h6 className="font-medium text-gray-400 text-base uppercase">
              {t("types.year")}
            </h6>

            {companies.map(c => (
              <p
                key={c.company}
                className="font-normal text-gray-400 text-base"
              >
                {c.year}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
