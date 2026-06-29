import postModel from "../models/mongodb/postModel.js";

const postController = {

    async createPost (req, res) {
        try {
                const { authorID, caption, mediaType, mediaUrl } = req.body;

                media = [mediaType, mediaUrl]

                const newPostData = {
                    authorID,
                    caption,
                    media,
                    likesCount: 0,
                    commentsCount: 0
                }

                const newPost = await postModel.insertPost(newPostData);

                return res.status(201).json(newPost);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
    },

    async getPost (req, res) {
        try {
            const { id } = req.params;

            const post = await postModel.readPost(id);

            return res.status(201).json(post);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async deletePost (req, res) {
        try {
            const { id } = req.params;

            const post = await postModel.deletePost(id);

            return res.status(201).json(post);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default postController;