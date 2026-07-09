import express from "express";
const router = express.Router();
import CommentController from "../controllers/commentController.js";

router.post("/comment", CommentController.createComment);
router.get("/comment", CommentController.deleteComment);

export default router;
