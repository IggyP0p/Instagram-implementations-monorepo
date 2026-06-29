import likesModel from "../models/mongodb/postLikesModel.js"

const likesController = {
    
    async giveLike (req, res) {
        try {
            const { postId, UserId } = req.body;

            const newLikeData = {
                postId,
                UserId
            }

            const newLike = await likesModel.insertLikes(newLikeData);

            return res.status(201).json(newLike);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async removeLikes (req, res) {
        try {
            const { id } = req.params;

            const like = await likesModel.removeLike(id);

            return res.status(201).json(like);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default likesController;