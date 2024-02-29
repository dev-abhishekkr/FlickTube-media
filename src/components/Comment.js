import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-1 shadow-sm bg-gray-100 my-2">
      <div className="flex">
        <img
          className="w-7 h-7"
          src="https://static.thenounproject.com/png/1743561-200.png"
          alt="user"
        />
      </div>
      <div className="flex flex-col px-1">
        <h1 className="font-bold">{name}</h1>
        <h1 className="px-1">{text}</h1>
      </div>
    </div>
  );
};
export default Comment;
