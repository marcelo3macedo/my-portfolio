import { ILink } from "@/interfaces/container";

export default function LinkContainer({ href, value }: ILink) {
  return (
    <div className="pb-2">
      <a
        className="text-gray-500 italic text-sm hover:text-gray-400"
        href={href}
        target="_blanks"
      >
        {value}
      </a>
    </div>
  );
}
