import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomChat } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Hello!  " + makeRandomChat(11) + " 🚀",
        })
      );
      //   console.log("API Polling");
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[405px] ml-2 pl-1 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Abhishek Kumar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-72 px-2"
          type="text"
          placeholder="Send live Chats..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="mx-2 bg-black text-white px-3 py-1 rounded-lg ">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
