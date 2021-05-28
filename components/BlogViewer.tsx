import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "./Avatar";
import { Title } from "./Title";
import styles from "../styles/Blog.module.css";
import { darkCtx } from "./context/useDarkTheme";

export interface BVProps {
  id: string;
  title: string;
  image: string;
  author: string;
  avatar: string;
  date: string;
  article: string;
}

export function BlogViewer({
  id,
  image,
  title,
  avatar,
  article,
  date,
  author,
}: BVProps) {
  const [clicked, setClicked] = useState(false);
  function onCopy() {
    navigator.clipboard.writeText(`${document.location.host}/blog/${id}`);
    setClicked(true);
  }
  const [{ dark }] = useContext(darkCtx);

  useEffect(() => {
    const k = setTimeout(() => void setClicked(false), 1500);
    return () => void clearTimeout(k);
  }, [clicked]);

  return (
    <div>
      <section className="relative h-96">
        <div className={"w-full h-96 absolute " + styles.topImage}>
          <img
            src={image}
            className="w-full h-full object-cover border-b-2 border-black"
          />
        </div>
        <header className="absolute w-full box-border ">
          <div className="p-3">
            <Avatar image={avatar} />
          </div>

          <div className="m-2 p-3 rounded-md bg-gray-900 bg-opacity-25">
            <Title className="text-5xl">{title}</Title>
          </div>
        </header>
      </section>

      <div className="flex items-center p-5 text-lg">
        <img
          src={clicked ? "/check.svg" : "/link.svg"}
          onClick={onCopy}
          style={{
            filter: !dark
              ? "invert(0%) sepia(0%) saturate(0%) hue-rotate(21deg) brightness(100%) contrast(103%)"
              : "invert(100%) sepia(100%) saturate(0%) hue-rotate(96deg) brightness(105%) contrast(104%)",
          }}
          className={`p-1 m-1 cursor-pointer rounded-md ${
            clicked ? "bg-green-500" : ""
          } transition`}
        />
        <h1 className="font-bold mr-2">{author}</h1>-
        <h1 className="ml-2 font-thin opacity-70">{date}</h1>
      </div>

      <article
        dangerouslySetInnerHTML={{
          __html: article,
        }}
        className={[
          styles.title,
          styles.list,
          styles.quote,
          styles.image,
          styles.code,
          styles.text,
          "p-2",
        ].join(" ")}
      />
    </div>
  );
}
