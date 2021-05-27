interface STProps {
  background: React.ReactNode;
  children: React.ReactNode;
}

export default function SeeThrough({ background, children }: STProps) {
  return (
    <section
      className="flex-1 w-full relative overflow-hidden"
      style={{ height: "calc(100vh - 8rem)" }}
    >
      <div className="absolute w-full h-full">{background}</div>
      <div className="absolute w-full h-full">{children}</div>
    </section>
  );
}
