"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={router.back}
      className="py-1 px-3.5 bg-stone-300 border border-stone-400 rounded-md hover:border-stone-500"
    >
      Go back
    </button>
  );
};

export default BackButton;
