import { darkCtx } from "components/context/useDarkTheme";
import { Default } from "components/layout/default";
import SeeThrough from "components/layout/SeeThrough";
import React, { useContext } from "react";

export default function Home() {
  const [{ dark }] = useContext(darkCtx);
  return (
    <Default
      seo={{
        title: "Home",
        description: "Welcome to the homepage of my portfolio!",
      }}
    >
      <SeeThrough
        background={
          <img
            className="h-full p-10 absolute right-0 object-cover rotate-45 transform"
            src="./signature.svg"
            style={{
              filter: !dark
                ? "invert(0%) sepia(0%) saturate(0%) hue-rotate(21deg) brightness(100%) contrast(103%)"
                : "invert(100%) sepia(100%) saturate(0%) hue-rotate(96deg) brightness(105%) contrast(104%)",
              top: "-10%",
            }}
          />
        }
      >
        <div
          style={{ clipPath: "polygon(0 0, 50% 0, 80% 100%, 0% 100%)" }}
          className={`w-full h-full ${
            dark ? "bg-black" : "bg-gray-500"
          }  relative`}
        >
          <div className="font-normal" style={{ padding: "5%" }}>
            <h2 className="text-8xl font-bold">hola,</h2>
            <h3 className="text-5xl font-thin">my name is</h3>
            <h1 className="text-9xl">ian</h1>
            <h1 className="text-8xl">elizondo</h1>
          </div>
        </div>
        <div className="flex absolute bottom-10 right-20">
          <h1 className="mt-5 font-extrabold text-6xl font-serif ">
            {"() => "}
          </h1>

          <section
            className={`m-3 p-5 rounded-xl text-3xl font-mono text-white ${
              dark ? "bg-gray-500" : "bg-black"
            }`}
          >
            and i'm a<Entry dark={dark}>full-stack developer*</Entry>
            <Entry dark={dark}>cool guy</Entry>
            <Entry dark={dark}>*in the making</Entry>
          </section>
        </div>
      </SeeThrough>
    </Default>
  );
}

interface EntryProps {
  children: string;
  dark: boolean;
}

function Entry({ children, dark }: EntryProps) {
  return (
    <div
      className={`p-2 ${
        dark ? "bg-black" : "bg-gray-500"
      } text-5xl rounded-xl mb-3`}
    >
      {">" + children}
    </div>
  );
}
