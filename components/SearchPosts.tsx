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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center py-5 gap-5 w-dvw"
    >
      <input
        type="search"
        placeholder="Search Posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-9 w-72 px-3 rounded-md outline-none focus:outline-2 focus:outline-stone-400 text-stone-700"
      />
      <Button color="#A8A29E">Search</Button>
    </form>
  );
};

export default SearchPosts;
