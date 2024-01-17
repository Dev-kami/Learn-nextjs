import React from "react";
import { usePosts } from "@/hooks/usePosts";
import PostItem from "@/components/PostItem";

const PostsPage = async () => {
  const posts: Posts[] = await usePosts();

  return (
    <ul className="h-full grid grid-cols-3 gap-5 px-14">
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </ul>
  );
};

export default PostsPage;
