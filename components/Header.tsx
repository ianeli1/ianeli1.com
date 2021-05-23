import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { darkCtx } from "./context/useDarkTheme";
import Link from "next/link";

const links = [
  {
    text: "Start",
    href: "/",
  },
  {
    text: "Blog",
    href: "/blog",
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const headerRef = useRef<HTMLElement>();

  const [{ dark }, setDark] = useContext(darkCtx);

  function toggleDarkTheme() {
    setDark((a) => ({ ...a, dark: !a.dark }));
  }

  const onMouseEnter = useCallback(() => {
    setOpen(true);
  }, [setOpen]);
  const onMouseLeave = useCallback(() => setOpen(false), [setOpen]);

  useEffect(() => {
    headerRef.current?.addEventListener("mouseenter", onMouseEnter);
    headerRef.current?.addEventListener("mouseleave", onMouseLeave);
    return () => {
      headerRef.current?.removeEventListener("mouseenter", onMouseEnter);
      headerRef.current?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [headerRef.current]);

  return (
    <header
      ref={(e) => (headerRef.current = e ?? undefined)}
      className={`${open ? "h-40" : "h-16"} 
      ${dark ? "text-black bg-gray-500" : "text-white bg-black"}
      flex items-center fixed w-full justify-between z-20 border-b-2 border-black`}
      style={{
        transition: "height 300ms, background-color 300ms, color 300ms",
      }}
    >
      <h1 className="text-5xl">
        <span
          className={`font-bold m-2 inline-block transition-transform transform ${
            open ? " rotate-90 " : undefined
          }`}
        >
          {">"}
        </span>
        ian★
      </h1>
      <div className="flex-1 flex h-full">
        {links.map(({ text, href }) => (
          <Link key={text} href={href}>
            <HeaderLink text={text} dark={dark} />
          </Link>
        ))}
      </div>
      <HeaderLink
        dark={dark}
        text={dark ? "🌞" : "🌚"}
        onClick={toggleDarkTheme}
      />
    </header>
  );
}

interface HLProps {
  text: string;
  onClick?: () => void;
  dark: boolean;
}

function HeaderLink({ text, onClick, dark }: HLProps) {
  return (
    <div
      onClick={onClick}
      className={`${
        dark
          ? "hover:bg-black hover:text-white"
          : "hover:bg-white hover:text-black"
      } w-32 h-full flex items-center justify-center cursor-pointer`}
    >
      {text}
    </div>
  );
}
