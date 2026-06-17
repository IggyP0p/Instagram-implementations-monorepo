import express from "express";
const router = express.Router();
import { createLikes } from "../controllers/postLikesController";

router.post('/Likes', createLikes);

export default router;