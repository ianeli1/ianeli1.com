import { useState } from "react";
import { useInterval } from "utils";
import { PhotoBoxProps, PhotoBox } from "./PhotoBox";

interface BoxDisplayProps {
  elements: (Omit<PhotoBoxProps, "className"> & { id: string })[];
  interval?: number;
  onClick?: (id: string) => void;
}

export function BoxDisplay({ elements, interval, onClick }: BoxDisplayProps) {
  const [index, setIndex] = useState(0);

  function actionMove(index: number) {
    return () => {
      setIndex((n) => n + index);
    };
  }

  useInterval(() => {
    setIndex((index) => {
      if (index === elements.length - 2) {
        return -1;
      } else {
        return index + 1;
      }
    });
  }, interval ?? 5000);

  return (
    <div className="relative overflow-hidden w-full h-64">
      {elements.map((props, i) => (
        <PhotoBox
          {...props}
          className="absolute w-full h-64"
          key={props.id}
          onClick={() => onClick && onClick(props.id)}
          styles={{
            right: `${100 * (index - i + 1)}%`,
            transition: "right 1s",
          }}
        />
      ))}

      <BoxButton
        onClick={actionMove(-1)}
        disabled={index === -1}
        className="absolute top-1/3 left-0"
      >
        {"<"}
      </BoxButton>
      <BoxButton
        onClick={actionMove(+1)}
        disabled={index === elements.length - 2}
        className="absolute top-1/3 right-0"
      >
        {">"}
      </BoxButton>
    </div>
  );
}

interface BBProps {
  onClick: () => void;
  children: string;
  className?: string;
  disabled?: boolean;
}

function BoxButton({ children, onClick, className, disabled }: BBProps) {
  return (
    <button
      onClick={(!disabled && onClick) || undefined}
      className={`w-8 h-8  ${className} ${
        disabled ? "bg-gray-700" : "bg-blue-600"
      }`}
    >
      {children}
    </button>
  );
}
