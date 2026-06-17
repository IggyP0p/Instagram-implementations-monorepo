import express from "express";
const router = express.Router();
import { createPost } from "../controllers/postController";

router.post('/post', createPost);

export default router;