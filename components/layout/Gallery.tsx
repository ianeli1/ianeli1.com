import { useBreakpoints } from "components/hooks/useBreakpoints";
import React from "react";
import SeeThrough from "./SeeThrough";

export const Gallery: React.FC<{
  background: string | React.ReactNode;
  right?: boolean;
}> = ({ children, background, right }) => {
  const { isLg } = useBreakpoints();

  return (
    <SeeThrough
      background={
        <div
          className={`${
            isLg ? "h-full w-1/3" : "h-1/2 w-full"
          } flex justify-center items-center`}
          style={isLg && right ? { marginLeft: "66.666667%" } : {}}
        >
          {typeof background == "string" ? (
            <img
              src={background}
              className={`${
                isLg
                  ? "h-full w-full object-left"
                  : "h-1/2 w-full object-center"
              } object-cover`}
            />
          ) : (
            background
          )}
        </div>
      }
    >
      <div
        className={`${
          isLg ? "w-2/3 h-full " : "w-full h-1/2"
        } shadow-2xl overflow-hidden`}
        style={
          isLg
            ? right
              ? { marginRight: "33.333333%" }
              : { marginLeft: "33.333333%" }
            : { marginTop: "calc(50vh - 4rem)" }
        }
      >
        {children}
      </div>
    </SeeThrough>
  );
};
