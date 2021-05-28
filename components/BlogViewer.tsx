import React from "react";
import { Avatar } from "./Avatar";
import { Title } from "./Title";
import styles from "../styles/Blog.module.css";
import { Line } from "./Line";

export interface BVProps {
  title: string;
  image: string;
  author: string;
  avatar: string;
  date: string;
  article: string;
}

export function BlogViewer({ image, title, avatar, article, date }: BVProps) {
  return (
    <div>
      <section className="relative h-96">
        <div className="w-full h-96 absolute">
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
          "p-2",
        ].join(" ")}
      />
    </div>
  );
}
