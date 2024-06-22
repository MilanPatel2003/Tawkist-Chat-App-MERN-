import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://64.media.tumblr.com/9ccc19be4625a1b2b0ca87f15a7f8091/78e6a2c1a3ba6f48-8f/s1280x1920/0211b5302e78afbbc5b9072de391bfa39fa2283c.jpg"
            alt="chat bubble"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-primary`}>heya whatsup</div>
      <div className="chat-footer opacity-50 text-white text-xs flex gap-1 items-center">12:60</div>
    </div>
  );
};

export default Message;
