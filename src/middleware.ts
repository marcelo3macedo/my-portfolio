import createMiddleware from "next-intl/middleware";
import { listLocales } from "./configs/locales";
import { LANGUAGE_PT } from "@/constants/languages";

export default createMiddleware({
  locales: listLocales,
  defaultLocale: LANGUAGE_PT,
});

export const config = {
  matcher: ["/", "/(pt|en)/:path*"],
};
