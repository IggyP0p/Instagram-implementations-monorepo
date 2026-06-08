import { insertMessage } from "../models/mongodb/messages.js";

export const createMessage = async (req, res) => {
    try {
        const { conversationId, senderId, text } = req.body;

        const newMessageData = {
            conversationId,
            senderId,
            text
        }

        const newMessage = await insertMessage(newMessageData);

        return res.status(201).json(newMessage);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}