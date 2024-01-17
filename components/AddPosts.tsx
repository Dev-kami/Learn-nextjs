import React, { useState } from "react";
import Button from "./Button";

const AddPosts = ({
  setAllPosts,
}: {
  setAllPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const newPosts: Posts = {
    id: Math.random(),
    title,
    body,
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !body) return;

    setAllPosts((posts) => {
      return [newPosts, ...posts];
    });

    // setTitle("");
    // setBody("");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-5 flex-1"
    >
      <h2 className="text-2xl font-medium mt-5 text-left underline">
        Add a post
      </h2>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Title"
          className="h-9 w-full px-3 rounded-md outline-none focus:outline-2 focus:outline-stone-400 text-stone-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Add a body"
          className="w-full h-32 px-3 rounded-md outline-none focus:outline-2 focus:outline-stone-400 text-stone-700"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <Button buttonClass="w-fit" color="#A8A29E">
        Add Posts
      </Button>
    </form>
  );
};

export default AddPosts;
