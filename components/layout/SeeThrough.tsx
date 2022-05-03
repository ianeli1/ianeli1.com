import { useEffect, useRef, useState } from "react";
import classes from "../../styles/Home.module.css";

interface STProps {
  background: (props: { height?: number }) => JSX.Element;
  children: React.ReactNode;
}

export default function SeeThrough({
  background: Background,
  children,
}: STProps) {
  const res = useRef<HTMLElement>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    if (res.current?.clientHeight && height !== res.current.clientHeight) {
      setHeight(res.current.clientHeight * 1.5);
    }
  }, [res, res.current]);

  return (
    <section
      className={`flex-1 w-full relative overflow-y-auto overflow-x-hidden ${classes.wrapper}`}
      style={{ height: "calc(100vh - 8rem)" }}
    >
      <div
        className={`w-full overflow-hidden ${classes.parallax}`}
        style={{ height }}
      >
        <Background height={height} />
        <h1 className="absolute bottom-0">{`firefox! :)`}</h1>
      </div>
      <div className={`w-full relative`} ref={(r) => r && (res.current = r)}>
        {children}
      </div>
    </section>
  );
}
