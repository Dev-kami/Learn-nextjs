"use client";

import React from "react";
import Button from "./Button";

const SearchPosts = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col flex-1 gap-5 items-end">
      <h1 className="text-2xl mt-5 font-medium underline">Search posts</h1>
      <div className="space-x-5">
        <input
          type="search"
          placeholder="Search Posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-9 w-72 px-3 rounded-md outline-none focus:outline-2 focus:outline-stone-400 text-stone-700"
        />
        <Button onClick={() => setQuery("")} color="#A8A29E">
          Clear Search
        </Button>
      </div>
    </div>
  );
};

export default SearchPosts;
