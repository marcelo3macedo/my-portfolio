import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

const getFontClass = () => {
  return poppins.className;
};

export { getFontClass };
