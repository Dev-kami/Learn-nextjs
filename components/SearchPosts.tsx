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
    <div className="flex flex-col flex-1 gap-5 md:items-end items-start">
      <h1 className="text-2xl mt-5 font-medium underline">Search posts</h1>
      <div className="md:space-x-5 md:space-y-0 space-y-2 md:flex-row md:items-center flex flex-col items-start">
        <input
          type="search"
          placeholder="Search Posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-9 w-72 px-3 rounded-md outline-none focus:outline-2 focus:outline-stone-400 text-stone-700"
        />
        <Button onClick={() => setQuery("")}>Clear Search</Button>
      </div>
    </div>
  );
};

export default SearchPosts;
