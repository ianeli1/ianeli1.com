interface LineProps {
  vertical?: boolean;
  className?: string;
}

export function Line({ vertical, className }: LineProps) {
  return (
    <div
      className={`m-2 rounded
            ${className ?? "bg-gray-700"}
            ${vertical ? "w-1 h-full" : "h-1 w-full"}`}
    />
  );
}
