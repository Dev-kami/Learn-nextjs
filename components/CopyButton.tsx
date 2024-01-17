"use client";

import { useCopyToClipboard } from "react-use";

const CopyButton = ({ Icon, title }: { title: string; Icon?: string }) => {
  const [state, copyToClipboard] = useCopyToClipboard();

  return <button>{Icon ? <Icon /> : "Copy text"}</button>;
};

export default CopyButton;
