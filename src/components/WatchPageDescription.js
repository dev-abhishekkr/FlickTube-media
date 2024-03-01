import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchPageDescription = ({ info }) => {
  //   console.log(info);

  return (
    <div>
      <h1 className="text-2xl font-bold">{info[0]?.snippet.title}</h1>
      <hr />
      <div className="my-3 flex justify-start items-center ">
        <img
          className="h-11 mx-3"
          src="https://images.pngnice.com/download/2314/Account-PNG-HD.png"
          alt="user"
        />
        <h1 className="text-xl font-bold">{info[0]?.snippet.channelTitle}</h1>
        <button className="text-xl mx-5 bg-black text-white px-5 py-3 rounded-full">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default WatchPageDescription;
