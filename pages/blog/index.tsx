import BlogWindow from "components/BlogWindow";
import { BoxDisplay } from "components/BoxDisplay";
import { Default } from "components/layout/default";
import { OneColumn } from "components/layout/oneColumn";
import { Line } from "components/Line";
import { Timeline } from "components/Timeline";
import { Title } from "components/Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  const { push: routerPush, replace } = useRouter();

  function onPostClick(id?: string) {
    setPostId(id);
    if (id) {
      routerPush("/blog", `/blog/${id}`);
    } else {
      replace("/blog");
    }
  }

  return (
    <Default
      seo={{
        title: "Blog",
        description: "Where you can find my blog posts!",
      }}
    >
      <OneColumn minWidth="30%">
        <BlogWindow
          show={!!postId}
          id={postId}
          onClose={() => onPostClick(undefined)}
        />
        <Title className="self-start">Featured</Title>
        <Line />

        <BoxDisplay
          elements={postList.map((post) => ({
            desc: post.desc,
            src: post.image,
            title: post.title,
            id: post.id,
          }))}
          onClick={(id) => onPostClick(id)}
        />

        <Title className="self-start">Timeline</Title>
        <Line />

        <Timeline entries={postList} onClick={(id) => onPostClick(id)} />
      </OneColumn>
    </Default>
  );
}
