const Conversation = require("../models/chat/conversation.model");
const Message = require("../models/chat/message.model");
const User = require("../models/user.model");

module.exports.chatCtrl = {
  createConversaion: async (req, res) => {
    const newConversation = new Conversation({
      members: [req.body.senderId, req.body.receiverId],
    });
  },
  createNewMes: async (req, res) => {
    const newMes = await Message.create(req.body);
    try {
      const savedMessage = await newMes.save();
      res.status(200).json(savedMessage);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  getMessage: async (req, res) => {
    const messages = await Message.find({
      sender: {
        $in: [req.user.id, req.body.receiverId],
      },
      recipient: {
        $in: [req.user.id, req.body.receiverId],
      },
    })
      .populate("sender recipient", "_id avatar")
      .sort({ createdAt: 1 });
    res.status(200).json({ messages });
  },

};
