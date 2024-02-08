"use client";

import React from "react";
import PostItem from "./PostItem";
import SearchPosts from "./SearchPosts";
import AddPosts from "./AddPosts";

const Posts = ({ posts }: { posts: Posts[] }) => {
  const [query, setQuery] = React.useState("");
  const [allPosts, setAllPosts] = React.useState(posts);

  const filteredPosts =
    query.length > 0
      ? allPosts.filter((post) =>
          `${post.title} + ${post.body}`
            .toLowerCase()
            .includes(query.toLowerCase())
        )
      : allPosts;

  return (
    <>
      <div className="flex gap-10 md:px-14 px-5 flex-col md:flex-row">
        <AddPosts setAllPosts={setAllPosts} />
        <SearchPosts query={query} setQuery={setQuery} />
      </div>
      <ul className="h-full grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 gap-5 md:px-14 px-5 mt-10">
        {filteredPosts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </ul>
    </>
  );
};

export default Posts;
