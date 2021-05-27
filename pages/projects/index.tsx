import { Default } from "components/layout/default";
import { ScrollPages } from "components/layout/ScrollPages";
import SeeThrough from "components/layout/SeeThrough";
import { Line } from "components/Line";
import React, { useMemo } from "react";

export default function Projects() {
  const pages = useMemo(
    () => [
      <Gallery
        background={
          "https://camo.githubusercontent.com/8af0f97b258441d5cbfdd15600397677aae00aecfd7c2ea5c1123b14441da994/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3631363331393932393533323032323739362f3737343835393535343236353632383639322f70726f6d6f2e706e67"
        }
      >
        <GalleryCard
          title="SimpleChat."
          desc="Simple Slack&Discord-like instant messaging app!"
          links={[
            {
              name: "Stack used",
              value: "PERN (PostgreSQL, Express, React, NodeJS)",
            },
            {
              name: "Technologies",
              value:
                "Typescript, GraphQL, ReactNative, ApolloServer, TypeGraphQL, MikroORM",
            },
            {
              name: "simple-chat (legacy)",
              value: "GitHub",
              href: "https://github.com/ianeli1/simple-chat",
            },
            {
              name: "simple-chat-native",
              value: "GitHub",
              href: "https://github.com/ianeli1/simple-chat-native",
            },
            {
              name: "simple-chat-web",
              value: "GitHub",
              href: "https://github.com/ianeli1/simple-chat-web",
            },
            {
              name: "simple-chat-server",
              value: "GitHub",
              href: "https://github.com/ianeli1/simple-chat-graphql-server",
            },
          ]}
        />
      </Gallery>,
      <Gallery background={""} right>
        <h1>this is the front2</h1>
      </Gallery>,
      <Gallery background={""}>
        <h1>this is the front3</h1>
      </Gallery>,
    ],
    []
  );

  return (
    <Default>
      <ScrollPages>{pages}</ScrollPages>
    </Default>
  );
}

const GalleryLink: React.FC<{
  name: string;
  value: string;
  href?: string;
}> = ({ name, value, href }) => (
  <section className="flex">
    <h2 className="text-2xl font-semibold whitespace-nowrap mr-2">
      {name + ": "}
    </h2>
    {href ? (
      <a className="text-2xl text-blue-600" href={href} target="_blank">
        <h2>{value}</h2>
      </a>
    ) : (
      <h2 className="text-2xl">{value}</h2>
    )}
  </section>
);

const GalleryCard: React.FC<{
  title: string;
  desc: string;
  links: {
    name: string;
    value: string;
    href?: string;
  }[];
}> = ({ title, desc, links }) => {
  const links1 = links.slice(0, 3);
  const links2 = links.slice(3).slice(0, 3);
  return (
    <div className="h-full w-full border-l-2 border-black p-8 flex flex-col">
      <h1 className="text-7xl font-bold">{title}</h1>
      <Line />
      <p className="p-8 text-justify">{desc}</p>
      <div className="flex-1 p-8 flex justify-around">
        <div className="p-8 flex-1 flex flex-col justify-around">
          {links1.map((props) => (
            <GalleryLink {...props} />
          ))}
        </div>
        <Line vertical />
        <div className="p-8 flex-1 flex flex-col justify-around">
          {links2.map((props) => (
            <GalleryLink {...props} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC<{ background: string; right?: boolean }> = ({
  children,
  background,
  right,
}) => (
  <SeeThrough
    background={
      <img
        src={background}
        className="h-full w-1/3 object-cover object-left"
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
