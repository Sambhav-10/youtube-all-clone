import React, { useEffect, useState } from "react";
import "./nav.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/navSlice";
import { YOUR_SEARCH_API } from "../../utils/contains";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggention, setSuggention] = useState([]);
  const [showsuggention, setShowSuggention] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchQuery();
    }, 200);
    return () => {
      clearTimeout(timer);
    };

 

  }, [searchQuery]);
  
  useEffect(() => {

    window.addEventListener("scroll",close)
      
        return () => window.removeEventListener("scroll", close);
    
  }, [searchQuery]);

  function close(){
   setShowSuggention(false) 
  }


  const getSearchQuery = async () => {
    const data = await fetch(YOUR_SEARCH_API + searchQuery);
    const res = await data.json();
    console.log(res);
    setSuggention(res[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
    console.log("no");
  };
  return (
    <nav className="flex h-20 w-full justify-between shadow-lg p-5">
      <div className="flex w-1/6 items-center">
        <img
          className="w-[50px] h-[50px] cursor-pointer"
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
      <div className="">
        <div>
          <input
         
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
            setShowSuggention(true)
            }
            
            }
            className="hidden md:inline w-32 md:w-80 h-10 border border-gray-900 rounded-l-full px-4"
            onFocus={() => setShowSuggention(true)}
            onBlur={() => setShowSuggention(false)}
            
          />
          <button className="hidden md:inline bg-gray-400 h-10 rounded-e-full p-2">
            search
          </button>
         
        </div>

        {showsuggention ? (
          <div className="fixed z-20 bg-white w-80 p-2 shadow-lg rounded-lg">
            <ul className="">
              {suggention.map((e, i) => {
                return (
                  <li className="cursor-pointer  p-2 shadow-lg" key={i} >
                    {e}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="flex w-1/6 align-middle items-center ">
      <img src={"https://th.bing.com/th/id/OIP.sAzW-VJAXN6oJ3kLmRXEEAHaHa?rs=1&pid=ImgDetMain"} 
        className="md:hidden w-[40px] h-[40px]"
        alt="" />
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
