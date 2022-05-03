import { useEffect, useState } from "react";
import { BlogListBody } from "../../pages/api/blog";
import { TLEntryProps } from "../TimelineEntry";

export function useBlogEntries(
  initEntries?: (TLEntryProps & { id: string })[]
) {
  const [entries, setEntries] = useState(initEntries ?? []);

  useEffect(() => {
    setEntries(initEntries ?? []);
  }, [initEntries]);

  useEffect(() => {
    async function fetchEntries() {
      const res = await fetch("/api/blog");
      const body: BlogListBody = await res.json();
      if (body.posts) {
        setEntries(body.posts);
      }
    }
    if (!initEntries) {
      fetchEntries();
    }
  }, []);

  return { entries };
}
