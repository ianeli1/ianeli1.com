import { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "utils/posts";

export interface BlogListBody {
  posts: ReturnType<typeof getPosts>;
}

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const posts = await getPosts();
  return res.status(200).json({
    posts,
  } as BlogListBody);
};
