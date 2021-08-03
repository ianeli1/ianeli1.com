import { Accordion } from "components/Accordion";
import { Default } from "components/layout/default";
import { Gallery } from "components/layout/Gallery";
import { GalleryCard } from "components/layout/GalleryCard";
import { ScrollPages } from "components/layout/ScrollPages";
import React, { useMemo } from "react";
import { SocialIcon } from "react-social-icons";

const githubURL = "https://api.github.com/users/ianeli1/repos";

export async function getServerSideProps() {
  return {
    props: {
      GHProjects: await (await fetch(githubURL)).json(),
    },
  };
}

export const Projects: React.FC<{
  GHProjects: GitHubProject[];
}> = ({ GHProjects }) => {
  const pages = useMemo(
    () => [
      <Gallery
        background={
          "https://camo.githubusercontent.com/8af0f97b258441d5cbfdd15600397677aae00aecfd7c2ea5c1123b14441da994/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3631363331393932393533323032323739362f3737343835393535343236353632383639322f70726f6d6f2e706e67"
        }
        key={0}
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
      <Gallery
        background={
          "https://cdn.discordapp.com/attachments/616319929532022796/849456877737082940/unknown.png"
        }
        right
        key={1}
      >
        <GalleryCard
          title="Discordjs-DIY."
          desc="Easy to use, do-it-yourself Discord.js mini-framework. Use it for making Discord.JS bots when you're in a hurry. You can get started with only 2 lines! (incluiding the import)!"
          links={[
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
          ]}
        />
      </Gallery>,
      <Gallery background={""} key={2}>
        <GalleryCard
          title="And more!"
          desc="You can find all the projects I have uploaded to GitHub below."
        >
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
        </GalleryCard>
      </Gallery>,
    ],
    []
  );

  return (
    <Default
      seo={{
        title: "Projects",
        description:
          "I enjoy making projects and you can find more about them here!",
      }}
    >
      <ScrollPages>{pages}</ScrollPages>
    </Default>
  );
};

export default Projects;
