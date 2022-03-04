import { darkCtx } from "components/context/useDarkTheme";
import { Default } from "components/layout/default";
import SeeThrough from "components/layout/SeeThrough";
import React, { useContext } from "react";
import { DopeBg } from "../components/DopeBg";
import { MainIndex } from "../components/mainIndex";

export default function Home() {
  return (
    <Default
      seo={{
        title: "Home",
        description: "Welcome to the homepage of my portfolio!",
      }}
    >
      <SeeThrough background={<DopeBg />}>
        <div className="overflow-hidden flex flex-col relative">
          <MainIndex />
        </div>
      </SeeThrough>
    </Default>
  );
}
