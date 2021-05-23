import { BlogViewer } from "components/BlogViewer";
import { Default } from "components/layout/default";
import { OneColumn } from "components/layout/oneColumn";
import { GetServerSidePropsContext } from "next";
import { getPost } from "utils/posts";

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const id: string =
    params?.id instanceof Array ? params.id[0] : params?.id ?? "";

  return {
    props: {
      postData: await getPost(id),
    },
  };
}

type AsyncReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any;

interface BlogSiteProps {
  postData: AsyncReturnType<typeof getPost>;
}

export default function BlogSite({ postData }: BlogSiteProps) {
  return (
    <Default>
      <OneColumn minWidth="40%">
        {postData ? (
          <BlogViewer article={postData.contentHtml} {...postData} />
        ) : (
          "error"
        )}
      </OneColumn>
    </Default>
  );
}
