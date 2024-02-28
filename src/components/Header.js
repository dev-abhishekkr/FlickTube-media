import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />
        <img
          className="h-8 mx-2"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="YT-logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-800 rounded-l-full"
        />
        <button className="border border-gray-700 rounded-r-full px-5 py-2 bg-slate-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-12"
          src="https://i.pinimg.com/474x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
