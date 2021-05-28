import { Default } from "components/layout/default";
import { Gallery } from "components/layout/Gallery";
import { GalleryCard } from "components/layout/GalleryCard";
import { ScrollPages } from "components/layout/ScrollPages";
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
