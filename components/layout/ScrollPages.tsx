import { useRef, useCallback, useEffect } from "react";

export const ScrollPages: React.FC<{ children: React.ReactNode[] }> = ({
  children,
}) => {
  const mainRef = useRef<HTMLElement>();
  const pagesRef = useRef<HTMLDivElement[]>([]);
  const counter = useRef(0);
  const scrollEffect = useCallback((e: WheelEvent) => {
    //>0 down <0 up
    counter.current += e.deltaY < 0 ? -1 : 1;
    if (counter.current < 0) counter.current = 0;
    if (counter.current >= children.length)
      counter.current = children.length - 1;
    pagesRef.current[counter.current].scrollIntoView({ behavior: "smooth" });
  }, []);
  useEffect(() => {
    const { current } = mainRef;
    current?.addEventListener("wheel", scrollEffect);
    return () => current?.removeEventListener("scroll", scrollEffect);
  }, [mainRef.current]);

  return (
    <main
      className="h-full overflow-hidden"
      style={{ height: "calc(100vh - 8rem)" }}
      ref={(r) => r && (mainRef.current = r)}
    >
      {children.map((node, i) => (
        <div
          key={i}
          className="h-full"
          ref={(r) => r && (pagesRef.current[i] = r)}
        >
          {node}
        </div>
      ))}
    </main>
  );
};
