import { useTranslations } from "next-intl";
import GalleryContainer from "./containerTypes/gallery";
import LinkContainer from "./containerTypes/link";
import TextContainer from "./containerTypes/text";
import { projects } from "@/configs/content";
import { PROJECT_TYPE_GALLERY, PROJECT_TYPE_LINK } from "@/constants/projects";
import { IContainer } from "@/interfaces/container";
import { indexToPosition } from "@/utils/number";

export default function ProjectsContainer() {
  const t = useTranslations("projects");

  function loadContainer(c: IContainer) {
    if (!c) return <></>;

    if (c.type === PROJECT_TYPE_LINK)
      return <LinkContainer key={c.value} href={c.href} value={t(c.value)} />;

    if (c.type === PROJECT_TYPE_GALLERY)
      return <GalleryContainer key={c.value} items={t(c.value).split("|")} />;

    return <TextContainer key={c.value} value={t(c.value)} />;
  }

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              {t("title")}
            </h1>

            <p className="font-normal text-gray-500 text-xs md:text-base">
              {t("description")}
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((p, i) => (
              <div className="flex space-x-6" key={i}>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  {indexToPosition(i)}
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    {t(p.title)}
                  </h1>

                  {p.contents.map(c => loadContainer(c))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
