import BackButton from "@/components/BackButton";
import React from "react";

const notFound = () => {
  return (
    <div className="h-[calc(100vh-2.6rem)] overflow-hidden w-full flex flex-col items-center justify-center bg-stone-400">
      <h1 className="flex items-center gap-2 mb-10">
        <span className="text-5xl">404 &#124;</span> This page could not be
        found
      </h1>
      <BackButton />
    </div>
  );
};

export default notFound;
