import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
const Message = ({ message }) => {
  const { token } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === token._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? token.profilePic
    : selectedConversation?.profilePic;
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };
  const shakeClass = message.shouldShake ? "shake" : "";
  console.log("chatClassName:", chatClassName);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-accent ${shakeClass} pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-gray-100 text-xs flex gap-1 items-center">
        {formatTime(message.createdAt)}
      </div>
    </div>
  );
};
export default Message;
