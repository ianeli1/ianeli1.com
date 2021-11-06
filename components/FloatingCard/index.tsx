import { FC } from "react";
import { Line } from "../Line";
import { Title } from "../Title";
import classes from "./styles.module.scss";

export interface IFloatingCardProps {
  image?: string;
  title: string;
  children: React.ReactNode;
  margin?: string;
}

export const FloatingCard: FC<IFloatingCardProps> = ({
  image,
  title,
  children,
  margin,
}) => {
  console;
  return (
    <section
      style={{ margin }}
      className="rounded-lg overflow-hidden border grid grid-flow-row lg:grid-flow-col shadow m-2 lg:h-96"
    >
      <div className="h-full" hidden={!image}>
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className=" p-2 pr-6 overflow-hidden flex flex-col">
        <Title className={`text-4xl font-normal ${classes.test}`}>
          {title}
        </Title>
        <Line />
        <div className="h-full overflow-auto">{children}</div>
      </div>
    </section>
  );
};
