import en from "@/assets/images/countries/en.svg";
import pt from "@/assets/images/countries/pt.svg";
import { LANGUAGE_PT } from "@/constants/languages";

function getUrlByName(l: string) {
  return l === LANGUAGE_PT ? pt.src : en.src;
}

export { getUrlByName };
