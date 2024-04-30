import { IText } from "@/interfaces/container";

export default function TextContainer({ value }: IText) {
  return (
    <p className="font-normal text-gray-500 text-sm md:text-base py-1">
      {value}
    </p>
  );
}
