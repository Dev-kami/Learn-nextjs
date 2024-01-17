"use client";

import { useCopyToClipboard } from "react-use";

const CopyButton = ({ Icon, title }: { title: string; Icon?: string }) => {
  const [state, copyToClipboard] = useCopyToClipboard();

  return (
    <button onClick={() => copyToClipboard(title)}>
      {Icon ? <Icon /> : "Copy text"}
      {state.error ? (
        <p>Unable to copy value: {state.error.message}</p>
      ) : (
        state.value && <p>Copied</p>
      )}
    </button>
  );
};

export default CopyButton;
