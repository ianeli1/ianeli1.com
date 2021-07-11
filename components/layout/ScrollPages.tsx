import { useBreakpoints } from "components/hooks/useBreakpoints";
import {
  useRef,
  useCallback,
  useEffect,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

//implement touch events https://developer.mozilla.org/en-US/docs/Web/API/Touch_events

export const EnableScrollCtx = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>(undefined!);

export const ScrollPages: React.FC<{ children: React.ReactNode[] }> = ({
  children,
}) => {
  const [enable, setEnable] = useState(true);

  const { isLg } = useBreakpoints();

  const mainRef = useRef<HTMLElement>();
  const pagesRef = useRef<HTMLDivElement[]>([]);
  const counter = useRef(0);
  const scrollEffect = useCallback(
    (e: WheelEvent) => {
      //>0 down <0 up
      if (enable) {
        counter.current += e.deltaY < 0 ? -1 : 1;
        if (counter.current < 0) counter.current = 0;
        if (counter.current >= children.length)
          counter.current = children.length - 1;
        pagesRef.current[counter.current].scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    [enable]
  );
  useEffect(() => {
    const { current } = mainRef;
    if (isLg) {
      current?.addEventListener("wheel", scrollEffect);
      return () => current?.removeEventListener("wheel", scrollEffect);
    }
    return;
  }, [mainRef.current, enable, isLg]);

  return (
    <main
      className={`h-full ${isLg ? "overflow-y-hidden" : "overflow-y-auto"}`}
      ref={(r) => r && (mainRef.current = r)}
    >
      <EnableScrollCtx.Provider value={[enable, setEnable]}>
        {children.map((node, i) => (
          <div
            key={i}
            className={`${isLg ? "h-full" : "h-auto"}`}
            ref={(r) => r && (pagesRef.current[i] = r)}
          >
            {node}
          </div>
        ))}
      </EnableScrollCtx.Provider>
    </main>
  );
};
