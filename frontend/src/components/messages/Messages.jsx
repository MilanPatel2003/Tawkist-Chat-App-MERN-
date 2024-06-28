import React, { useEffect, useRef } from "react";
import Message from "./Message";
import usegetMessage from "../../hooks/usegetMessage";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import usegetMessageRealtime from "../../hooks/usegetMessageRealtime";

const Messages = () => {
  const { loading, messages } = usegetMessage();
  usegetMessageRealtime();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Adjust the delay time (in milliseconds) as needed
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={messagesEndRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-base-300">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
