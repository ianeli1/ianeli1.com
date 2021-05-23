import { CSSProperties } from "react";
import { Title } from "./Title";

export interface PhotoBoxProps {
  src?: string;
  title?: string;
  desc?: string;
  className?: string;
  styles?: CSSProperties;
  onClick?: () => void;
}

export function PhotoBox({
  src,
  title,
  desc,
  className,
  styles,
  onClick,
}: PhotoBoxProps) {
  return (
    <div
      className={`${className} ${
        onClick && "cursor-pointer"
      } border rounded bg-white `}
      onClick={onClick}
      style={styles}
    >
      {src && (
        <img
          src={src}
          className="absolute top-0 right-0 w-full h-full object-cover"
        />
      )}
      <section className="p-2 absolute bottom-0 left-0 right-0 bg-opacity-70 bg-gray-200">
        <Title>{title}</Title>
        <p>{desc}</p>
      </section>
    </div>
  );
}
