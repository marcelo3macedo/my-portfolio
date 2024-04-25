import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { listLocales } from "./configs/locales";

const locales = listLocales;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
