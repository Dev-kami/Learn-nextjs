"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

const PostItem = ({
  post,
  onDelete,
}: {
  post: Posts;
  onDelete: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    val: number
  ) => void;
}) => {
  const router = useRouter();

  const { id, title, body } = post;

  return (
    <li
      onClick={() => router.push(`/posts/${id}`)}
      className="border border-stone-600 p-3 text-left text-stone-700 space-y-3 hover:bg-stone-300 cursor-pointer flex flex-col relative"
    >
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="pb-14">{body}</p>

      <Button
        onClick={(e) => onDelete(e, id)}
        className="bg-red-400/50 hover:bg-red-400/60 absolute bottom-5"
      >
        Delete
      </Button>
    </li>
  );
};

export default PostItem;
