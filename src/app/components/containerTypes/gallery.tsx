import { IGallery } from "@/interfaces/container";

export default function GalleryContainer({ items }: IGallery) {
  if (!items) return;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
      {items.map((i: string) => (
        <p className="font-xs text-gray-500" key={i}>
          {i}
        </p>
      ))}
    </div>
  );
}
