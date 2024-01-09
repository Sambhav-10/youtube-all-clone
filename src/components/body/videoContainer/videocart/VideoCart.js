import React from "react";

const VideoCart = ({ info }) => {
  // Check if info is defined before accessing its properties
  if (!info) {
    console.log("first fase");
    return <div>Error: Video information not available.</div>;
  }

  const { snippet,statistics } = info;
  // Check if snippet is defined before accessing its properties
  if (!snippet) {
    console.log("2 fase");
    return <div>Error: Video snippet not available.</div>;
  }

  const { channelTitle,title,thumbnails } = snippet;

  return (
    <div className="w-[300px]  h-[300px]  shadow-lg m-2">
        <img className="w-[300px] h-[200px] " src={thumbnails.medium.url} alt="" />
      <div>
      <div>{channelTitle}</div>
      <div>{title}</div>
      <div>views- {statistics.viewCount}</div>

      </div>
    </div>
  );
};

export default VideoCart;
