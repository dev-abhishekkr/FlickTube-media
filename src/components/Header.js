import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constats";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQery]) {
        setSuggestions(searchCache[searchQery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQery]);
  /**
DEBOUNCING
**/
  const getSearchSuggestion = async () => {
    // console.log(searchQery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json);
    //update cache
    dispatch(
      cacheResults({
        [searchQery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
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
          <div>
            <input
              className="px-5 w-1/2 p-2 border border-gray-800 rounded-l-full"
              type="text"
              value={searchQery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className="border border-gray-700 rounded-r-full px-5 py-2 bg-slate-200">
              🔍
            </button>
          </div>
          {showSuggestion && (
            <div className="absolute bg-white w-4/12 py-2 shadow-lg rounded-lg border border-gray-200">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="px-2 py-2 shadow-sm hover:bg-gray-200">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <img
            className="h-12"
            src="https://static.thenounproject.com/png/1743561-200.png"
            alt="user"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
