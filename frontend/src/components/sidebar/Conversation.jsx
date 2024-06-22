import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-primary cursor-pointer p-2 py-1 rounded">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://64.media.tumblr.com/9ccc19be4625a1b2b0ca87f15a7f8091/78e6a2c1a3ba6f48-8f/s1280x1920/0211b5302e78afbbc5b9072de391bfa39fa2283c.jpg" alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">Milan Patel</p>
            <span className="text-xl">🚀</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
