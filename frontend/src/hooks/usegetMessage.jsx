import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";

const usegetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();
  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const res = await fetch(`api/message/${selectedConversation._id}`);
        const data = await res.json();
        if (res.ok) {
          setMessages(data);
        } else {
          console.error("Failed to fetch messages", res.status);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessage();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default usegetMessage;
