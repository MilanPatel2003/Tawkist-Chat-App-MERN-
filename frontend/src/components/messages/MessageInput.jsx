import React, { useState } from "react";

import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const { loading, sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      return; //return nothing if the field is empty and user hit the send button
    }
    await sendMessage(message);
    setMessage(""); //clearing the input field after sending message
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-900 border-gray-600 text-white "
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute text-primary inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
