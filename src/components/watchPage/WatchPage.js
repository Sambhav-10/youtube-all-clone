import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/navSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { youtube_api } from "../../utils/contains";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getdata();
  }, []);

  async function getdata() {
    let data = await fetch(youtube_api);
    let responce = await data.json();
    console.log(responce);
  }
  return (
    <div className="w-full h-full">
      <div className=" md:w-1/2 h-full">
        <iframe
        
         className=" w-full h-60  md:w-full md:h-96 px-5 "
          src={`https://www.youtube.com/embed/${searchParams.get(
            "v"
          )}?si=ZxaFFMwM4MMgVQ5a`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div></div>
      </div>
    </div>
  );
};

export default WatchPage;
