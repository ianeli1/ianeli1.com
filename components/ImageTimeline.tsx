import { useBlogEntries } from "./hooks/useBlogEntries";
import { ImageCard } from "./ImageCard";
import { TimelineProps } from "./Timeline";

export function ImageTimeline({ entries: propEntries }: TimelineProps) {
  const { entries } = useBlogEntries(propEntries);

  return (
    <section className="grid grid-cols-2 gap-2">
      {entries?.slice(0, 4).map((x) => (
        <ImageCard entry={x} key={x.id} id={x.id} />
      ))}
    </section>
  );
}
