import React from "react";

const videoCard = ({ info }) => {
  // console.log(info);
  // const { snippet, statistics } = info;

  // const { thumbnails, channelTitle, title } = snippet;

  return (
    <div className="p-2 m-2 w-64 shadow-xl">
      <img
        className="rounded-lg"
        src={info.snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{info.snippet.title}</li>
        <div className="text-center flex gap-1">
          <li>
            <img
              className="h-5"
              src="https://images.pngnice.com/download/2314/Account-PNG-HD.png"
              alt="user"
            />
          </li>
          <li className="font-semibold">{info.snippet.channelTitle}</li>
        </div>
        <li>{info.statistics.viewCount + " views"}</li>
      </ul>
    </div>
  );
};

export default videoCard;
