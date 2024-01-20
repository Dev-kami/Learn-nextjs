import React from "react";
import { usePosts } from "@/hooks/usePosts";
import Posts from "@/components/Posts";

const PostsPage = async () => {
  const posts: Posts[] = await usePosts();

  return <Posts posts={posts} />;
};

export default PostsPage;
