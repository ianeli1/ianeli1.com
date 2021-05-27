import { Default } from "components/layout/default";
import { ScrollPages } from "components/layout/ScrollPages";
import SeeThrough from "components/layout/SeeThrough";
import { Line } from "components/Line";
import React from "react";

const emm =
  "https://cdn.discordapp.com/avatars/524719328826884116/345672eb1faf8bc115840341db61bde5.webp?size=1024";

export default function Projects() {
  return (
    <Default>
      <ScrollPages>
        {[
          <Gallery background={emm}>
            <GalleryCard
              title="This is a card."
              desc="This is the description of the card, repeat, this is the description of the card, repeat, this is the description of the card, repeat, this is the description of the card, repeat, this is the description of the card, repeat, this is the description of the card, repeat, this is the description of the card, repeat, this is the description of the card, repeat, "
              links={{}}
            />
          </Gallery>,
          <Gallery background={emm} right>
            <h1>this is the front2</h1>
          </Gallery>,
          <Gallery background={emm}>
            <h1>this is the front3</h1>
          </Gallery>,
        ]}
      </ScrollPages>
    </Default>
  );
}

const GalleryCard: React.FC<{
  title: string;
  desc: string;
  links: {
    [name: string]: string;
  };
}> = ({ title, desc, links }) => (
  <div className="h-full w-full border-l-2 border-black p-8">
    <h1 className="text-7xl font-bold">{title}</h1>
    <Line />
    <p className="p-8 text-justify">{desc}</p>
  </div>
);

const Gallery: React.FC<{ background: string; right?: boolean }> = ({
  children,
  background,
  right,
}) => (
  <SeeThrough
    background={
      <img
        src={background}
        className="h-full w-1/3 object-cover"
        style={right ? { marginLeft: "66.666667%" } : undefined}
      />
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
