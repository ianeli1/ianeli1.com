import Link from "next/link";
import { calcTimePassed } from "../utils";
import { TLEntryProps } from "./TimelineEntry";

interface ImageCardProps {
  entry: Omit<TLEntryProps, "onClick">;
  id: string;
}

export function ImageCard({
  entry: { date, image, title, desc },
  id,
}: ImageCardProps) {
  return (
    <Link passHref href={`/blog/${id}`}>
      <a
        className="relative block bg-black group min-h-0"
        style={{ aspectRatio: "1/1" }}
      >
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
          src={image}
          alt=""
        />
        <div className="relative p-8 max-h-full">
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase group-hover:opacity-0 opacity-100 transition-opacity">
            {calcTimePassed(new Date(date))}
          </p>

          <p className="text-2xl font-bold text-white group-hover:opacity-0 opacity-100 transition-opacity">
            {title}
          </p>

          <div className="absolute top-0 left-0">
            <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-sm text-white p-3">{desc}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
