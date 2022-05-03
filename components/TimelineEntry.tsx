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
      className={`${
        onClick && "cursor-pointer"
      } min-h-24 max-h-48 flex w-full justify-between bg-gray-900 bg-opacity-5 rounded p-1 overflow-hidden`}
      onClick={onClick}
    >
      <img className="h-full w-24 object-cover rounded" src={image} />
      <div className="flex flex-col flex-1 m-1 overflow-ellipsis">
        <Title>{title}</Title>
        <p className="overflow-ellipsis overflow-hidden whitespace-pre-line">
          {desc}
        </p>
      </div>
      <p className="font-thin min-w-0">{calcTimePassed(new Date(date))}</p>
    </article>
  );
}
