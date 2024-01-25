import React, { useEffect, useState } from "react";
import { youtube_api } from "../../../utils/contains";
import VideoCart from "./videocart/VideoCart";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getvideos();
  }, []);

  async function getvideos() {
    const data = await fetch(youtube_api);
    const responce = await data.json();

    setVideos(responce.items);
  }
  return (
    <>
      <div className="pt-5  flex flex-wrap justify-around ">
        {videos.map((video) => {
          return (
            <Link to={"/watch?v=" + video.id} className="my-2">
              <VideoCart info={video} key={video.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Videocontainer;
