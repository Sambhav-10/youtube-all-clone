import React from "react";

const VideoCart = ({ info }) => {
  // Check if info is defined before accessing its properties
  if (!info) {
    console.log("first fase");
    return <div>Error: Video information not available.</div>;
  }

  const { snippet, statistics } = info;
  // Check if snippet is defined before accessing its properties
  if (!snippet) {
    console.log("2 fase");
    return <div>Error: Video snippet not available.</div>;
  }

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-80 flex-wrap h-80 shadow-lg">
      <img className="w-80  " src={thumbnails.medium.url} alt="" />
      <div className="p-2">
        <div className="font-bold">{channelTitle}</div>
        <div>{title}</div>
        <div>views- {statistics.viewCount}</div>
      </div>
    </div>
  );
};

export default VideoCart;
