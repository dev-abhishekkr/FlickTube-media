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
        <li>{info.snippet.channelTitle}</li>
        <li>{info.statistics.viewCount + " views"}</li>
      </ul>
    </div>
  );
};

export default videoCard;
