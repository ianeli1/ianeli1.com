import { Avatar } from "components/Avatar";
import { darkCtx } from "components/context/useDarkTheme";
import FakeLink from "components/FakeLink";
import { Default } from "components/layout/default";
import { Gallery } from "components/layout/Gallery";
import { ScrollPages } from "components/layout/ScrollPages";
import { Title } from "components/Title";
import Link from "next/link";
import React, { useContext } from "react";
import Styles from "../styles/About.module.css";

export default function About() {
  return (
    <Default>
      <Gallery
        right
        background={
          <main
            className="h-full w-1/3 flex justify-center items-center"
            style={{ marginLeft: "66.666667%" }}
          >
            <Avatar image="https://cdn.discordapp.com/attachments/616319929532022796/847658206725668894/1612222001434.png" />
          </main>
        }
      >
        <ScrollPages>
          {[
            <section className="p-7 flex flex-col h-full">
              <Title className="text-6xl">Hola, my name is Ian Elizondo!</Title>
              <div className={`text-xl flex-1 m-7 ${Styles.entriesP}`}>
                <p>
                  I am a React developer and Microsoft Azure Support Engineer
                  based in Costa Rica. I am well versed in modern web
                  technologies (JS/TS, React and <FakeLink>more...</FakeLink>)
                  and additionally hold extensive knowledge on PaaS cloud
                  computing, continuous integration, and architecture management
                  on Azure.
                </p>
                {"\t" /*??? */}
                <p>
                  {`I have attended the University of Costa Rica (UCR) for general
                  studies, and the Costa Rican Institute of Technology (TEC) in
                  which I pursued a degree in Mechatronics Engineering. I'm
                  actively pursuing a Bachelor's Degree in Computer Engineering
                  and additionally specializing in full-stack web development
                  using Javascript.`}
                </p>
                <p>
                  I have experience working on a variety of{" "}
                  <FakeLink href="/projects">personal projects</FakeLink> in
                  different fields, such as NPM packages, UI toolkits, chatbots,
                  emulation, and image manipulation. I'm always thriving to be
                  the most helpful in a teamwork scenario, however, I also enjoy
                  being self-sufficient.
                </p>{" "}
                <p>
                  Outside of work and school, I live a simple life spending time
                  with family and friends.
                </p>
              </div>
              <Highlight>
                <p>
                  I'm always ready for a challenge! Feel free to{" "}
                  <FakeLink href="/contact">contact me</FakeLink>.
                </p>
              </Highlight>
            </section>,
            <section className="p-7 flex flex-col h-full">
              <Title className="text-6xl">Let's get to work!</Title>
              <div className="m-7 flex-1">
                <Title className="text-4xl">My skills</Title>
                <SkillEntries>
                  {[
                    "HTML5/CSS3",
                    "Javascript/Typescript ES6+",
                    "ReactJS/ReactNative",
                    "NodeJS/NPM",
                    "Git/GitHub",
                    "REST/GraphQL",
                    "Jest",
                    "ExpressJS",
                    "Azure/AWS/GCP",
                    "Python/C++",
                  ].map((x) => (
                    <SkillEntry>{x}</SkillEntry>
                  ))}
                </SkillEntries>
              </div>
              <Highlight>
                <p>
                  You can find my full resumé{" "}
                  <FakeLink
                    newTab
                    href="https://drive.google.com/file/d/1RA-v0CIKwa6yR1cASejC1NsMSlPl0--D/view?usp=sharing"
                  >
                    here
                  </FakeLink>
                  .
                </p>
              </Highlight>
            </section>,
          ]}
        </ScrollPages>
      </Gallery>
    </Default>
  );
}

const SkillEntry: React.FC<{ children: string }> = ({ children }) => (
  <h1 className="text-lg m-2">
    {"➞ "}
    {children}
  </h1>
);

interface SkillEntriesProps {
  children: React.ReactChild[];
}

function SkillEntries({ children }: SkillEntriesProps) {
  return (
    <div>
      {children.map((c) => (
        <section>{c}</section>
      ))}
    </div>
  );
}

const Highlight: React.FC<{}> = ({ children }) => {
  const [{ dark }] = useContext(darkCtx);

  return (
    <div
      className={`m-4 p-4 rounded-lg flex justify-center items-center text-2xl ${
        dark ? "bg-gray-700" : "bg-gray-900 bg-opacity-5"
      }`}
    >
      {children}
    </div>
  );
};
