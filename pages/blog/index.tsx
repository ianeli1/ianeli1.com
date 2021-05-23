import BlogWindow from "components/BlogWindow";
import { BoxDisplay } from "components/BoxDisplay";
import { Default } from "components/layout/default";
import { OneColumn } from "components/layout/oneColumn";
import { Line } from "components/Line";
import { Timeline } from "components/Timeline";
import { Title } from "components/Title";
import { useState } from "react";
import { getPosts } from "utils/posts";

export async function getServerSideProps() {
  return {
    props: {
      postList: await getPosts(),
    },
  };
}

interface BlogProps {
  postList: ReturnType<typeof getPosts>;
}

export default function Blog({ postList }: BlogProps) {
  const [postId, setPostId] = useState<string | undefined>();

  return (
    <Default>
      <OneColumn minWidth="30%">
        <BlogWindow
          show={!!postId}
          id={postId}
          onClose={() => setPostId(undefined)}
        />
        <Title className="self-start">Featured</Title>
        <Line />

        <BoxDisplay
          elements={postList.map((post) => ({
            desc: post.desc,
            src: post.image,
            title: post.title,
          }))}
        />

        <Title className="self-start">Timeline</Title>
        <Line />

        <Timeline entries={postList} onClick={(id) => setPostId(id)} />
      </OneColumn>
    </Default>
  );
}
