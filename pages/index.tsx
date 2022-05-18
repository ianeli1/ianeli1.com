import { Default } from "components/layout/default";
import SeeThrough from "components/layout/SeeThrough";
import React from "react";
import { DopeBg } from "../components/DopeBg";
import { ImageTimeline } from "../components/ImageTimeline";
import { MainIndex } from "../components/mainIndex";
import { Widget } from "../components/Widget";

//this is the only change here

export default function Home() {
  return (
    <Default
      seo={{
        title: "Home",
        description: "Welcome to the homepage of my portfolio!",
      }}
    >
      <SeeThrough background={DopeBg}>
        <div className="overflow-hidden flex flex-col relative">
          <MainIndex />

          <Widget
            transparent
            title="recent posts"
            className="lg:ml-24 lg:w-1/3"
          >
            <ImageTimeline />
          </Widget>
        </div>
      </SeeThrough>
    </Default>
  );
}
