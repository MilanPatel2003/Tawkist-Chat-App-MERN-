import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ lastIndex, conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers}  = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-accent cursor-pointer p-2 py-1 rounded ${
          isSelected ? "bg-accent" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online": ""}`}>
          <div className="w-12 rounded-full"> 
            <img src={conversation.profilePic} alt="user-avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
