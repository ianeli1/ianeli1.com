import React, { useContext } from "react";
import { AccordionEntry, AccordionEntryProps } from "./AccordionEntry";
import { darkCtx } from "./context/useDarkTheme";

export const Accordion: React.FC<{
  entries: AccordionEntryProps[];
}> = ({ entries }) => {
  const [{ dark }] = useContext(darkCtx);

  dark;
  return (
    <main
      className={`w-full flex-1  overflow-y-auto overflow-x-hidden p-2 rounded-lg ${
        dark ? "bg-black" : "bg-gray-100"
      }`}
    >
      {entries.map((x, i) => (
        <AccordionEntry key={i} {...x} />
      ))}
    </main>
  );
};
