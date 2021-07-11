import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { darkCtx } from "./context/useDarkTheme";
import Link from "next/link";
import { useRouter } from "next/router";
import { useBreakpoints } from "./hooks/useBreakpoints";
import { FullScreenSelector } from "./FullScreenSelector";

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

  const { pathname, push } = useRouter();

  console.log(pathname);

  function toggleDarkTheme() {
    setDark((a) => ({ ...a, dark: !a.dark }));
  }

  const onMouseEnter = useCallback(() => {
    setOpen(true);
  }, [setOpen]);
  const onMouseLeave = useCallback(() => setOpen(false), [setOpen]);

  const { isLg } = useBreakpoints();

  useEffect(() => {
    if (isLg) {
      headerRef.current?.addEventListener("mouseenter", onMouseEnter);
      headerRef.current?.addEventListener("mouseleave", onMouseLeave);
      return () => {
        headerRef.current?.removeEventListener("mouseenter", onMouseEnter);
        headerRef.current?.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, [headerRef.current]);

  return (
    <>
      <header
        ref={(e) => (headerRef.current = e ?? undefined)}
        className={`${isLg && open ? "h-40" : "h-16"} 
      ${dark ? "text-black bg-gray-500" : "text-white bg-black"}
      flex flex-col items-center fixed w-full justify-between z-20 border-b-2 border-black`}
        style={{
          transition: "height 300ms, background-color 300ms, color 300ms",
        }}
      >
        <div className="flex items-center h-full w-full">
          {!isLg && ( //this > svg, lol
            <div
              className="flex flex-col justify-evenly h-5/6 p-2 m-1 mr-2 bg-gray-900 rounded cursor-pointer"
              onClick={() => setOpen(true)}
              style={{ aspectRatio: "1/1" }}
            >
              <div className="border-2 rounded" />
              <div className="border-2 rounded" />
              <div className="border-2 rounded" />
            </div>
          )}
          <h1 className="text-5xl">
            {isLg && (
              <span
                className={`font-bold m-2 inline-block transition-transform transform ${
                  isLg && open ? " rotate-90 " : undefined
                }`}
              >
                {">"}
              </span>
            )}
            ian★
          </h1>
          {isLg && (
            <div className="flex h-full">
              {links.map(({ text, href }) => (
                <Link key={text} href={href} passHref>
                  <HeaderLink
                    text={text}
                    selected={`/${pathname.split("/")[1]}` == href}
                    dark={dark}
                  />
                </Link>
              ))}
            </div>
          )}
          <div className="flex-1" />
          <HeaderLink
            dark={dark}
            text={dark ? "🌞" : "🌚"}
            onClick={toggleDarkTheme}
          />
        </div>
      </header>
      <FullScreenSelector
        open={!isLg && open}
        onClose={() => setOpen(false)}
        options={links.map(({ text, href }) => ({
          onClick: () => push(href),
          text,
        }))}
      />
    </>
  );
}

interface HLProps {
  text: string;
  onClick?: () => void;
  dark: boolean;
  selected?: boolean;
  href?: string;
}

function HeaderLink({ href, text, onClick, dark, selected }: HLProps) {
  return (
    <a href={href} className="h-full">
      <div
        onClick={onClick}
        className={`${
          dark
            ? "hover:bg-black hover:text-white"
            : "hover:bg-white hover:text-black"
        }
      
      ${selected ? (dark ? "bg-black text-white" : "bg-white text-black") : ""}
      
      w-32 h-full flex items-center justify-center cursor-pointer`}
      >
        {text}
      </div>
    </a>
  );
}
