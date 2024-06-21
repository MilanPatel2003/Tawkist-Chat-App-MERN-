import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; // getting this from Middleware

    let conversation = await Conversation.findOne({
      participants: [senderId, receiverId],
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new  Message({
        senderId,
        receiverId,
        message
    })

    if (newMessage) {
        conversation.messages.push(newMessage._id)
    }
    // await conversation.save()
    // await newMessage.save()

    //this will wprl parellely
   await  Promise.all([conversation.save(),newMessage.save()])

    res.status(200).json(newMessage)

  } catch (error) {
    console.log("Error while Sending Message", error.message);
    res.status(400).json({ error: "Internal Server error" });
  }
};

export const getMessage = async (req,res) =>{
    try {
        const {id: receiverId} = req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants:{$all: [senderId, receiverId]}
        }).populate("messages")

        if (!conversation) {
            res.status(200).jsom([])
        }

        const messages = conversation.messages;
        res.status(200).json(messages)

    } catch (error) {
        console.log("Error while Getting Message", error.message);
        res.status(400).json({ error: "Internal Server error" });
    }
}