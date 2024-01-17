"use client";

import { CirclesWithBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="mt-20">
      <CirclesWithBar
        height="60"
        width="60"
        color="#A8A29E"
        outerCircleColor="#A8A29E"
        innerCircleColor="#A8A29E"
        barColor="#A8A29E"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
