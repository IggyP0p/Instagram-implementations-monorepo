import { insertFollows } from "../models/mongodb/follows.js";

export const createFollow = async (req, res) => {
    try {
        const { followerId, followingId, createdAt } = req.body;

        const newFollowsData = {
            followerId,
            followingId,
            createdAt
        }

        const newFollows = await insertFollows(newFollowsData);

        return res.status(201).json(newFollows);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}