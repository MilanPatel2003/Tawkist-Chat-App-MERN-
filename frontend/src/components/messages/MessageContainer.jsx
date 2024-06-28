import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import { useAuthContext } from "../../context/AuthContext";
const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const isOnline = selectedConversation
    ? onlineUsers.includes(selectedConversation._id)
    : false;

  return (
    <div className=" md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected></NoChatSelected>
      ) : (
        <>
          {/* header */}
          <div className="py-2 px-4 mb-2 bg-slate-500 ">
            <span className="label-text">To:</span>
            <span className="font-bold text-grey-900">
              {selectedConversation.fullName}
              {isOnline && <span className="text-green-500 ml-2">Online</span>}
            </span>
          </div>
          <Messages></Messages>
          <MessageInput></MessageInput>
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { token } = useAuthContext();
  return (
    <div className="flex items-center w-full h-full justify-center">
      <div className="px-4 text-center sm:text-lg md:text-xl flex flex-col items-center font-semibold gap-2 text-gray-200">
        <p>Welcome 👋 {token.fullName} </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
