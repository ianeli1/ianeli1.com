import { darkCtx } from "components/context/useDarkTheme";
import { Default } from "components/layout/default";
import { Gallery } from "components/layout/Gallery";
import { GalleryCard } from "components/layout/GalleryCard";
import { ScrollPages } from "components/layout/ScrollPages";
import React, { useContext, useMemo } from "react";

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
          <GitHubWidget projects={GHProjects} />
        </GalleryCard>
      </Gallery>,
    ],
    []
  );

  return (
    <Default>
      <ScrollPages>{pages}</ScrollPages>
    </Default>
  );
};

export default Projects;

interface GitHubProject {
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  homepage: string;
  language: null | string;
  languages_url: string; //add a button to see all?
}

const GitHubWidget: React.FC<{
  projects: GitHubProject[];
}> = ({ projects = [] }) => {
  const [{ dark }] = useContext(darkCtx);
  dark;
  return (
    <main className="w-full flex-1  overflow-y-auto overflow-x-hidden p-2 rounded-lg bg-black">
      {projects.map((project, i) => (
        <GHWEntry key={i} project={project} />
      ))}
    </main>
  );
};

const GHWEntry: React.FC<{
  project: GitHubProject;
}> = ({ project: { name, description } }) => {
  return (
    <section>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <h1>{">"}</h1>
    </section>
  );
};
