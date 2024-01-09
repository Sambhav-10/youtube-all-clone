import React from "react";
import Button from "./buttons/Button";
import Videocontainer from "./videoContainer/Videocontainer";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  const data = [
    "All",
    "Javascript",
    "Data science",
    "Graphic design",
    "Music",
    "Stock market",
    "Trading",
    "Business idea",
    "News",
  ];
  return (
    <>
       

      <div className="relative  flex w-full bg-blue-400  ">
        <div className="flex gap-10">
          {data.map((e, i) => {
            return <Button key={i} name={e} />;
          })}
        </div>
      </div>

      <div className="flex">
        <Outlet/>
       
      </div>
    </>
  );
};

export default Body;
