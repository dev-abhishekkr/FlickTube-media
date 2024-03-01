import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsConatiner from "./CommentsConatiner";
import LiveChat from "./LiveChat";
import WatchPageDescription from "./WatchPageDescription";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_API } from "../utils/constats";

const WatchPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  //fetching for video desc

  const videoId = searchParams.get("v");
  const Curr_Video_API = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${GOOGLE_API_KEY}`;

  useEffect(() => {
    getVideoDescription();
  }, []);

  const getVideoDescription = async () => {
    const data = await fetch(Curr_Video_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <>
      <div className="p-2 flex flex-col w-full  ">
        <div className="flex">
          <div>
            <iframe
              width="850"
              height="385"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="m-1 p-3  shadow-md rounded-lg">
              <WatchPageDescription info={videos} />
            </div>
          </div>
          <div className="w-full ">
            <LiveChat />
          </div>
        </div>
        <CommentsConatiner />
      </div>
    </>
  );
};

export default WatchPage;
