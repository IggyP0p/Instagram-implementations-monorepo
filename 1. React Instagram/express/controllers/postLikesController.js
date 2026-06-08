import { insertLikes } from "../models/mongodb/postLikesModel.js"

export const createLikes = async (req, res) => {
    try {
        const { postId, UserId } = req.body;

        const newLikeData = {
            postId,
            UserId
        }

        const newLike = await insertLikes(newLikeData);

        return res.status(201).json(newLike);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}