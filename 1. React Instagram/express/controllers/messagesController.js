import messagesModel from "../models/mongodb/messagesModel.js";

const messagesController = {

  async sendMessage(req, res) {
    try {
        const { conversationId, senderId, text } = req.body;

        const newMessageData = {
            conversationId,
            senderId,
            text
        }

        const newMessage = await messagesModel.insertMessage(newMessageData);

        return res.status(201).json(newMessage);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  },

  /* TO DO test this method */
  async loadMessages(req, res) {
    try {
      const { id } = req.params;

      const messages = await messagesModel.retrieveMessage(id);

      return res.status(201).json(messages);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};

export default messagesController;
