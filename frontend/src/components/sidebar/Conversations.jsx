import React from "react";
import Conversation from "./Conversation";
import usegetConversation from "../../hooks/usegetConversation";

const Conversations = () => {
  const { loading, conversations } = usegetConversation();
  // console.log(conversations);
  return (
    <div className="flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={index === conversations.length - 1}
        ></Conversation>
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
