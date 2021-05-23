import { calcTimePassed } from "utils";
import { Title } from "./Title";

export interface TLEntryProps {
  title: string;
  desc?: string;
  image: string;
  date: string;
  onClick?: () => void;
}

export function TimelineEntry({
  title,
  desc,
  image,
  date,
  onClick,
}: TLEntryProps) {
  return (
    <article
      className="h-24 mt-2 flex w-full justify-between bg-gray-900 bg-opacity-5 rounded p-1"
      onClick={onClick}
    >
      <img className="h-full w-24 object-cover rounded" src={image} />
      <div className="flex flex-col flex-1 m-1">
        <Title>{title}</Title>
        <p>{desc}</p>
      </div>
      <p className="font-thin">{calcTimePassed(new Date(date))}</p>
    </article>
  );
}
