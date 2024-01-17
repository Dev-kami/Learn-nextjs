"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface IPostItem {
  id: number;
  title: string;
  body: string;
}

const PostItem = ({ id, title, body }: IPostItem) => {
  const router = useRouter();

  return (
    <li
      onClick={() => router.push(`/posts/${id}`)}
      className="border border-stone-600 p-3 text-left space-y-3 hover:bg-stone-300 cursor-pointer"
    >
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p>{body}</p>
    </li>
  );
};

export default PostItem;