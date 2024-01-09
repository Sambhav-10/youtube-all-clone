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
    console.log(responce);
    setVideos(responce.items);
  }
  return (
    <>
        <Sidebar/>

    <div className="pt-5 w-full flex flex-wrap">
      {videos.map((video) => {
          return <Link to={"/watch?v=" + video.id}><VideoCart info={video} key={video.id} /></Link>;
        })}
    </div>
        </>
  );
};

export default Videocontainer;
