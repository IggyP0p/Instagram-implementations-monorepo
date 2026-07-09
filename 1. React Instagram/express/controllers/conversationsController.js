import ConversationModel from "../models/mongodb/conversations.js";

const ConversationController = {

  async insertConversation(req, res) {
    try {
        const { user1, user2 } = req.body;

        const participants = [user1, user2];

        const newConversationData = {
            participants
        }

        const newConversation = await ConversationModel.insertConversation(newConversationData);

        return res.status(201).json(newConversation);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  },

  // TODO: Fix this method
  async getConversation(req, res) {
    try {
        const { id1, id2 } = req.body;

        const participants = [id1, id2];

        const newConversation = await ConversationModel.bringConversations(participants);

        return res.status(201).json(newConversation);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  },

  // TODO: Fix this method
  async eraseConversation(req, res) {
    try {
        const { user1, user2 } = req.body;

        const participants = [user1, user2];

        const newConversationData = {
            participants
        }

        const newConversation = await ConversationModel.deleteConversation(newConversationData);

        return res.status(201).json(newConversation);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  }
}

export default ConversationController;
