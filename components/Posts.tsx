"use client";

import React from "react";
import PostItem from "./PostItem";
import SearchPosts from "./SearchPosts";

const Posts = ({ posts }: { posts: Posts[] }) => {
  const [query, setQuery] = React.useState("");
  const [post, setPost] = React.useState(posts);

  const filteredPosts =
    post.length > 0
      ? posts.filter((post) =>
          `${post.title} + ${post.body}`
            .toLowerCase()
            .includes(query.toLowerCase())
        )
      : posts;

  return (
    <>
      <SearchPosts query={query} setQuery={setQuery} />
      <ul className="h-full grid grid-cols-3 gap-5 px-14">
        {filteredPosts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </ul>
    </>
  );
};

export default Posts;
