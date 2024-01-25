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
      <div className="flex w-full ">
        <div >
          <Sidebar />
        </div>

        <div className="w-full">
          <div className=" flex h-12 gap-10 overflow-scroll  mt-4">
            {data.map((e, i) => {
              return <Button key={i} name={e} />;
            })}
          </div>
          <div className="flex w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
