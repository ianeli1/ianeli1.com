import { useState, useContext, useRef } from "react";
import { darkCtx } from "./context/useDarkTheme";

export interface AccordionEntryProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const AccordionEntry: React.FC<AccordionEntryProps> = ({
  title,
  subtitle,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [{ dark }] = useContext(darkCtx);

  const contentRef = useRef<HTMLDivElement>(null!);

  return (
    <div
      className={`${
        dark ? "bg-white text-black" : "bg-gray-900 text-white"
      } p-2 m-2 rounded-md`}
    >
      <section
        className="cursor-pointer flex"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="flex-1">
          <h1 className="text-xl">{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <h1
          className={`m-auto text-5xl mx-4 ${
            open ? "rotate-90" : "rotate-0"
          } transform-gpu transition-transform`}
        >
          {">"}
        </h1>
      </section>
      <div
        className={`${
          open ? "max-h-40" : "max-h-0"
        } transition-max-height overflow-hidden`}
        style={{
          maxHeight: `${open ? contentRef.current.scrollHeight * 1.5 : 0}px`,
        }}
      >
        <div ref={contentRef}>
          <section
            className={`${
              dark ? "bg-gray-900 text-white" : "bg-white text-black"
            } p-1 m-1 rounded box-border flex`}
          >
            {children}
          </section>
        </div>
      </div>
    </div>
  );
};
