import { getPosts } from "@/services/getPosts";

export async function usePosts() {
  const posts = await getPosts();

  return posts;
}
