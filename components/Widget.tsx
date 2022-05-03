import { ReactNode, useContext, useEffect, useRef } from "react";
import { darkCtx } from "./context/useDarkTheme";
import classes from "../styles/animations.module.css";

interface WidgetProps {
  children: ReactNode;
  className?: string;
  title?: string;
  right?: boolean;
  transparent?: boolean;
}

export function Widget({
  children,
  className,
  title,
  right,
  transparent,
}: WidgetProps) {
  const [{ dark }] = useContext(darkCtx);
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry], opts) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains(classes.appear)
        ) {
          entry.target.classList.add(classes.appear);
          (entry.target as HTMLElement).style.opacity = "1";
        }
      },
      {
        threshold: 0.3,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => ref.current && observer.unobserve(ref.current);
  }, [ref.current]);

  return (
    <section className="flex w-full lg:mt-0 mt-32">
      {right && <div className="flex-1" />}
      <section
        ref={(r) => r && (ref.current = r)}
        className={`relative w-full ${
          transparent ? "" : dark ? "bg-gray-500" : "bg-black "
        } ${className ?? ""}`}
        style={{
          opacity: 0,
        }}
      >
        {title && (
          <h1 className="text-5xl font-bold p-2 absolute -top-16">{title}</h1>
        )}
        {children}
      </section>
    </section>
  );
}
