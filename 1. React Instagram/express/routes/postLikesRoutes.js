import express from "express";
const router = express.Router();
import likesController from "../controllers/postLikesController.js";

router.post('/Likes', likesController.giveLike);
router.delete('/Likes/:id', likesController.removeLikes);

export default router;