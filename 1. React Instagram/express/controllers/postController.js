import { insertPost } from "../models/mongodb/postModel.js";

export const createPost = async (req, res) => {
    try {
        const { authorID, caption, media } = req.body;

        const newPostData = {
            authorID,
            caption,
            media,
            likesCount: 0,
            commentsCount: 0
        }

        const newPost = await insertPost(newPostData);

        return res.status(201).json(newPost);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}