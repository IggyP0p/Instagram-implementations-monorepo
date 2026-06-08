import { insertComment } from "../models/mongodb/comment.js";

export const createComment = async (req, res) => {
    try {
        const { postId, authorId, content, likesCount } = req.body;

        const newCommentData = {
            postId,
            authorId,
            content,
            likesCount
        }

        const newComment = await insertComment(newCommentData);

        return res.status(201).json(newComment);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}