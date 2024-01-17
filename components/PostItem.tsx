"use client";

import { useRouter } from "next/navigation";

const PostItem = ({ id, title, body }: Posts) => {
  const router = useRouter();

  return (
    <li
      onClick={() => router.push(`/posts/${id}`)}
      className="border border-stone-600 p-3 text-left text-stone-700 space-y-3 hover:bg-stone-300 cursor-pointer"
    >
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p>{body}</p>
    </li>
  );
};

export default PostItem;
