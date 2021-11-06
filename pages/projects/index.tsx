import { Accordion } from "components/Accordion";
import { Default } from "components/layout/default";
import { Gallery } from "components/layout/Gallery";
import { GalleryCard } from "components/layout/GalleryCard";
import { ScrollPages } from "components/layout/ScrollPages";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import FakeLink from "../../components/FakeLink";
import { FloatingCard } from "../../components/FloatingCard";
import { ListEntries, ListEntry } from "../../components/List";
import { OneColumn } from "../../components/layout/oneColumn";

const githubURL = "https://api.github.com/users/ianeli1/repos";

export async function getServerSideProps() {
  return {
    props: {
      GHProjects: await (await fetch(githubURL)).json(),
    },
  };
}

const projectData = [
  {
    title: "SimpleChat",
    background:
      "https://camo.githubusercontent.com/8af0f97b258441d5cbfdd15600397677aae00aecfd7c2ea5c1123b14441da994/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3631363331393932393533323032323739362f3737343835393535343236353632383639322f70726f6d6f2e706e67",
    description: "Simple Slack&Discord-like instant messaging app!",
    links: [
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
    ],
  },
  {
    title: "Discordjs-DIY.",
    background:
      "https://cdn.discordapp.com/attachments/616319929532022796/849456877737082940/unknown.png",
    description:
      "Easy to use, do-it-yourself Discord.js mini-framework. Use it for making Discord.JS bots when you're in a hurry. You can get started with only 2 lines! (incluiding the import)!",
    links: [
      {
        name: "Based on",
        value: "discord.js",
        href: "https://www.npmjs.com/package/discord.js",
      },
      {
        name: "Repo",
        value: "Github",
        href: "https://github.com/ianeli1/discordjs-diy",
      },
      {
        name: "Wiki",
        value: "GitHub pages",
        href: "https://ianeli1.github.io/discordjs-diy/",
      },
    ],
  },
];

export const Projects: React.FC<{
  GHProjects: GitHubProject[];
}> = ({ GHProjects }) => {
  const pages = (
    <Gallery background={""} key={2}>
      <GalleryCard
        title="And more!"
        desc="You can find all the projects I have uploaded to GitHub below."
      ></GalleryCard>
    </Gallery>
  );
  return (
    <Default
      seo={{
        title: "Projects",
        description:
          "I enjoy making projects and you can find more about them here!",
      }}
    >
      <OneColumn minWidth="80%">
        {projectData.map(({ title, description, background, links }) => (
          <FloatingCard margin="2rem" image={background} title={title}>
            <h1>{description}</h1>
            <ListEntries>
              {links.map(({ name, value, href }) => (
                <ListEntry>
                  {name}:{" "}
                  {href ? (
                    <FakeLink href={href ?? ""}>{value}</FakeLink>
                  ) : (
                    value
                  )}
                </ListEntry>
              ))}
            </ListEntries>
          </FloatingCard>
        ))}
        <FloatingCard margin="2rem" image="" title="More on GitHub!">
          <Accordion
            entries={GHProjects.map(
              ({
                name,
                description,
                html_url,
                language,
                updated_at,
                homepage,
              }) => ({
                title: name,
                subtitle: description,
                children: (
                  <>
                    <SocialIcon
                      url={html_url}
                      network="github"
                      target="_blank"
                    />
                    {homepage && (
                      <SocialIcon
                        className="ml-1"
                        url={homepage}
                        network="rss"
                        bgColor="#24292e"
                      />
                    )}
                    <div className="ml-1">
                      {language ? (
                        <>
                          Language: <b>{language}</b>
                          <br />
                        </>
                      ) : (
                        ""
                      )}
                      Last updated: {updated_at.split("T")[0]}
                    </div>
                  </>
                ),
              })
            )}
          />
        </FloatingCard>
      </OneColumn>
    </Default>
  );
};

export default Projects;
