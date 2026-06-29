import express from "express";
const router = express.Router();
import postController from "../controllers/postController.js";

router.post('/post', postController.createPost);
router.get('/post/:id', postController.getPost);
router.delete('/post/:id', postController.deletePost);

export default router;