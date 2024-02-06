import React from "react";
import Button from "./buttons/Button";
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
      <div className="flex w-full h-full ">
        <div >
          <Sidebar />
        </div>

        <div className="w-full ">
          <div className="w-full h-16 md:h-12  flex  gap-10 overflow-scroll  my-4">
            {data.map((e, i) => {
              return <Button key={i} name={e} />;
            })}
          </div>
          <div className="flex">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
