import CommentModel from "../models/mongodb/comment.js";

const CommentController = {

  async createComment(req, res) {
    try {
        const { postId, authorId, content, likesCount } = req.body;

        const newCommentData = {
            postId,
            authorId,
            content,
            likesCount
        }

        const newComment = await CommentModel.insertComment(newCommentData);

        return res.status(201).json(newComment);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  },

  // TODO: test this method
  async deleteComment(req, res) {
    try {
        const { postId, authorId } = req.body;

        const newCommentData = {
            postId,
            authorId
        }

        const newComment = await CommentModel.deleteComment(newCommentData);

        return res.status(201).json(newComment);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  }
};

export default CommentController;
