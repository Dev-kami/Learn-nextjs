import React from "react";

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-[calc(100vh-2.5rem)] overflow-auto">{children}</div>;
};

export default PostsLayout;
