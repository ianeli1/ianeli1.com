import classes from "../../styles/Home.module.css";

interface STProps {
  background: React.ReactNode;
  children: React.ReactNode;
}

export default function SeeThrough({ background, children }: STProps) {
  return (
    <section
      className={`flex-1 w-full relative overflow-y-auto overflow-x-hidden ${classes.wrapper}`}
      style={{ height: "calc(100vh - 8rem)" }}
    >
      <div className={`w-full h-full ${classes.section} ${classes.parallax}`}>
        {background}
      </div>
      <div className={`w-full overflow-y-auto ${classes.section}`}>
        {children}
      </div>
    </section>
  );
}
