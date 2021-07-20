export interface oneColumnProps {
  children: React.ReactNode;
  minWidth?: string;
}

export function OneColumn({ children, minWidth }: oneColumnProps) {
  return (
    <section
      className="lg:m-auto m-0 lg:w-min w-full p-2 flex flex-col items-center"
      style={{ minWidth: minWidth }}
    >
      {children}
    </section>
  );
}
