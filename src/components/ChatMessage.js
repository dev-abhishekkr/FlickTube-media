import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <>
      {/* <h1 className="mb-2 border border-x-black bg-gray-300 font-bold py-1 px-3">
        Live chat
      </h1> */}
      <div className="flex gap-1 mb-2 shadow-sm">
        <img
          className="h-7"
          src="https://static.thenounproject.com/png/1743561-200.png"
          alt="user"
        />
        <span className="font-semibold">{name}</span>
        <span className="px-1">{message}</span>
      </div>
    </>
  );
};

export default ChatMessage;
