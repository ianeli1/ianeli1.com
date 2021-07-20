import { TimelineEntry, TLEntryProps } from "./TimelineEntry";

interface TimelineProps {
  entries: (TLEntryProps & { id: string })[];
  onClick?: (id: string) => void;
}

export function Timeline({ entries, onClick }: TimelineProps) {
  return (
    <main className="flex flex-col w-full overflow-hidden">
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
