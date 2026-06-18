import { insertConversation } from "../models/mongodb/conversations.js";

export const createConversation = async (req, res) => {
    try {
        const { user1, user2 } = req.body;

        const participants = [user1, user2];

        const newConversationData = {
            participants
        }

        const newConversation = await insertConversation(newConversationData);

        return res.status(201).json(newConversation);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}