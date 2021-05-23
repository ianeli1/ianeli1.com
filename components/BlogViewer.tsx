import React from "react";
import { Avatar } from "./Avatar";
import { Title } from "./Title";

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
      <header>
        <Avatar image={avatar} />
        <Title>{title}</Title>
      </header>
      <div className="w-full h-96">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <article
        dangerouslySetInnerHTML={{
          __html: article,
        }}
      />
    </div>
  );
}
