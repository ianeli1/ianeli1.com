import { useContext, useEffect, useRef } from "react";
import classes from "../styles/animations.module.css";
import { darkCtx } from "./context/useDarkTheme";

interface DopeBgProps {
  /**Number of pixels */
  height?: number;
}

export function DopeBg({ height }: DopeBgProps) {
  const ref = useRef<HTMLDivElement>();
  const [{ dark }] = useContext(darkCtx);
  useEffect(() => {
    async function doStuff() {
      const PIXI = await import("pixi.js");
      if (ref.current) {
        const bgHeight = height!;
        const width = ref.current.clientWidth;

        function getColor(x: number, y: number) {
          const diag = Math.hypot(width, bgHeight);
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
          height: bgHeight,
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
          while (Y <= bgHeight) {
            let X = Math.random() * 70 + 30;
            const points: [number, number][] = [[X, Y]];
            graphics.moveTo(X, Y);
            while (X <= width - 100) {
              const angle = ((Math.random() * 45 - 23) * Math.PI) / 180; //-15 to 15 deg
              const length = Math.random() * 20 + 40;
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
        canvas.classList.add(classes.appearSlow);
      }
    }
    if (height) {
      console.log({ height });
      doStuff();
    }
    return () => void (ref.current && (ref.current.innerHTML = ""));
  }, [ref, height]);
  return (
    <div
      className={`flex w-full ${classes.hueRotate}`}
      style={{
        height: height ?? "100vh",
        transition: "all ease 1000ms",
        background: dark ? "black" : "#EEE",
      }}
      ref={(r) => r && (ref.current = r)}
    />
  );
}
