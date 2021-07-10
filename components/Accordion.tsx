import React, { useContext } from "react";
import { AccordionEntry, AccordionEntryProps } from "./AccordionEntry";
import { darkCtx } from "./context/useDarkTheme";
import { EnableScrollCtx } from "./layout/ScrollPages";

export const Accordion: React.FC<{
  entries: AccordionEntryProps[];
}> = ({ entries }) => {
  const [{ dark }] = useContext(darkCtx);
  const [, setScroll] = useContext(EnableScrollCtx);

  dark;
  return (
    <main
      className={`w-full flex-1  overflow-y-auto overflow-x-hidden p-2 rounded-lg ${
        dark ? "bg-black" : "bg-gray-100"
      }`}
      onMouseEnter={() => setScroll(false)}
      onMouseLeave={() => setScroll(true)}
    >
      {entries.map((x, i) => (
        <AccordionEntry key={i} {...x} />
      ))}
    </main>
  );
};
