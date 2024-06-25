import React from "react";
import useConversation from "../zustand/useConversation";
import { useState } from "react";

const useSendMessage = () => {
  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // Extracting selected conversation and messages from Zustand store
  const { selectedConversation, messages, setMessages } = useConversation();

  // Function to send a message
  const sendMessage = async (message) => {
    // Set loading state to true while sending message
    setLoading(true);

    try {
      // Send POST request to send the message to the server
      const res = await fetch(`api/message/send/${selectedConversation._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      // Parse response from the server
      const data = await res.json();

      // If the response is OK, update the messages state
      if (res.ok) {
        setMessages([...messages, data]); // Add the new message to the existing messages
        console.log(data.message); // Log the sent message for debugging
      }
    } catch (error) {
      // Log any errors that occur during the fetch operation
      console.log(error);
    } finally {
      // Set loading state to false after the operation completes
      setLoading(false);
    }
  };

  // Return loading state and sendMessage function
  return { loading, sendMessage };
};

export default useSendMessage;
