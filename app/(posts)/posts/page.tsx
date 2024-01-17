import React from "react";
import { usePosts } from "@/hooks/usePosts";
import PostItem from "@/components/PostItem";
import SearchPosts from "@/components/SearchPosts";

const PostsPage = async () => {
  const posts: Posts[] = await usePosts();

  return (
    <div>
      <SearchPosts />
      <ul className="h-full grid grid-cols-3 gap-5 px-14">
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
