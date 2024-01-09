import React, { useEffect, useState } from "react";
import "./nav.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/navSlice";
import { YOUR_SEARCH_API } from "../../utils/contains";
import { wait } from "@testing-library/user-event/dist/utils";
import { json } from "react-router-dom";

const Navbar = () => {

    const [searchQuery,setSearchQuery] = useState("")
useEffect(()=>{
getSearchQuery()
},[searchQuery])

const getSearchQuery = async ()=>{
const data = await fetch(YOUR_SEARCH_API + searchQuery);
const res = await data.json()
console.log(res);
}

  const dispatch = useDispatch();

  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <nav className="flex h-20 w-full justify-between shadow-lg p-5">
      <div className="flex w-1/6 items-center">
        <img
          className="w-[60px] h-[60px] cursor-pointer"
          src="https://static.thenounproject.com/png/2292434-200.png"
          alt=""
          onClick={() => toggleMenuhandler()}
        />
        <img
          className="w-[150px] h-[60px]"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt=""
        />
      </div>
      <div className="flex items-center ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
          className="w-80 h-10 border border-gray-900 rounded-l-full"
        />
        <button className="bg-gray-400 h-10 rounded-e-full p-2">search</button>
      </div>
      <div className="flex w-1/6 align-middle items-center ">
        <img
          className="w-[40px] h-[40px] "
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
