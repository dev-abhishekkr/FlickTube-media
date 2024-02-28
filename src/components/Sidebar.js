import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 w-48 shadow-lg">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Live</li>
        <li>YT Mixed</li>
      </ul>
      <h1 className=" text-lg font-bold pt-2">You</h1>
      <ul>
        <li>Watch later</li>
        <li>Saved</li>
        <li>History</li>
        <li>Your Channel</li>
      </ul>
      <h1 className="text-lg font-bold pt-2">Subscription</h1>
      <ul>
        <li>Think School</li>
        <li>Tanmay Bhat</li>
        <li>WTF Podcasts</li>
        <li>James Jani</li>
      </ul>

      <h1 className="text-lg font-bold pt-2">Explore</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
