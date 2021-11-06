import React from "react";

interface ListEntriesProps {
  children: React.ReactChild[];
}

export function ListEntries({ children }: ListEntriesProps) {
  return (
    <div>
      {children.map((c, i) => (
        <section key={i}>{c}</section>
      ))}
    </div>
  );
}

export const ListEntry: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h1 className="text-lg m-2">
    {"➞ "}
    {children}
  </h1>
);
