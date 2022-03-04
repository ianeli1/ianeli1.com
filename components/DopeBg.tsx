import { useContext, useEffect, useRef } from "react";
import classes from "../styles/DopeBg.module.css";
import { darkCtx } from "./context/useDarkTheme";

export function DopeBg() {
  const ref = useRef<HTMLDivElement>();
  const [{ dark }] = useContext(darkCtx);
  useEffect(() => {
    async function doStuff() {
      const PIXI = await import("pixi.js");
      if (ref.current) {
        const height = ref.current.clientHeight;
        const width = ref.current.clientWidth;

        function getColor(x: number, y: number) {
          const diag = Math.hypot(width, height);
          const start = [2, 30, 87];
          const end = [215, 5, 111];
          const R = (x: number) =>
            Math.floor((x * (end[0] - start[0])) / diag + start[0]);
          const G = (x: number) =>
            Math.floor((x * (end[1] - start[1])) / diag + start[1]);
          const B = (x: number) =>
            Math.floor((x * (end[2] - start[2])) / diag + start[2]);
          const pX = Math.hypot(x, y);
          return B(pX) + 256 * (G(pX) + R(pX) * 256);
        }

        const app = new PIXI.Application({
          height,
          width,
          antialias: true,
          backgroundAlpha: 0,
        });
        const canvas = ref.current.appendChild(app.view);
        const graphics = new PIXI.Graphics();

        graphics.lineStyle({
          width: 1.8,
          color: 0x493457,
        });

        function draw() {
          let prevPoints: [number, number][] = [];
          let Y = 50;
          while (Y <= height) {
            let X = Math.random() * 70 + 30;
            const points: [number, number][] = [[X, Y]];
            graphics.moveTo(X, Y);
            while (X <= width - 100) {
              const angle = ((Math.random() * 45 - 23) * Math.PI) / 180; //-15 to 15 deg
              const length = Math.random() * 30 + 50;
              X += Math.cos(angle) * length;
              Y += Math.sin(angle) * length;
              graphics.lineTo(X, Y);
              points.push([X, Y]);
            }
            if (prevPoints.length) {
              for (let i = 0, j = points.length; i < j; i++) {
                graphics.beginFill(getColor(...points[i]));
                graphics.moveTo(...points[i]);
                prevPoints[i] && graphics.lineTo(...prevPoints[i]);
                prevPoints[i + 1] && graphics.lineTo(...prevPoints[i + 1]);
                graphics.endFill();
                if (points[i + 1] && prevPoints[i + 1]) {
                  graphics.beginFill(getColor(...(points[i + 1] ?? points[i])));
                  graphics.moveTo(...prevPoints[i + 1]);
                  graphics.lineTo(...points[i]);
                  graphics.lineTo(...points[i + 1]);
                  graphics.endFill();
                }
              }
            }
            prevPoints = points;
            Y += Math.random() * 60 + 60;
          }
        }
        draw();

        app.ticker.maxFPS = 30;
        app.stage.addChild(graphics);
        canvas.classList.add(classes.appear);
      }
    }
    doStuff();
    return () => void (ref.current && (ref.current.innerHTML = ""));
  }, [ref]);
  return (
    <div
      className={`flex w-full ${classes.filter}`}
      style={{
        height: "calc(100vh - 8rem)",
        transition: "all ease 1000ms",
        background: dark ? "black" : "#EEE",
      }}
      ref={(r) => r && (ref.current = r)}
    />
  );
}
