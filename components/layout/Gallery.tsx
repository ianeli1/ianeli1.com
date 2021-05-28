import React from "react";
import SeeThrough from "./SeeThrough";

export const Gallery: React.FC<{
  background: string | React.ReactNode;
  right?: boolean;
}> = ({ children, background, right }) => (
  <SeeThrough
    background={
      typeof background == "string" ? (
        <img
          src={background}
          className="h-full w-1/3 object-cover object-left"
          style={right ? { marginLeft: "66.666667%" } : undefined}
        />
      ) : (
        background
      )
    }
  >
    <div
      className="w-2/3 h-full shadow-2xl"
      style={
        right ? { marginRight: "33.333333%" } : { marginLeft: "33.333333%" }
      }
    >
      {children}
    </div>
  </SeeThrough>
);
