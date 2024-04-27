import { unstable_setRequestLocale } from "next-intl/server";
import HeroContainer from "../components/heroContainer";
import HighlightContainer from "../components/highlightContainer";

export default function Home({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  return (
    <main className="bg-gray-100 min-h-lvh">
      <HeroContainer />
      <HighlightContainer />
    </main>
  );
}
