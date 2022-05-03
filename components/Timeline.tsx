import { useBlogEntries } from "./hooks/useBlogEntries";
import { TimelineEntry, TLEntryProps } from "./TimelineEntry";

export interface TimelineProps {
  entries?: (TLEntryProps & { id: string })[];
  onClick?: (id: string) => void;
}

export function Timeline({ entries: propEntries, onClick }: TimelineProps) {
  const { entries } = useBlogEntries(propEntries);

  return (
    <main className="flex flex-col w-full overflow-hidden gap-2">
      {entries.map((x) => (
        <TimelineEntry
          key={x.id}
          onClick={() => onClick && onClick(x.id)}
          {...x}
        />
      ))}
    </main>
  );
}
