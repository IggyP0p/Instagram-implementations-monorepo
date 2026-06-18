import express from "express";
const router = express.Router();
import { createComment } from "../controllers/commentController.js";

router.post("/comment", createComment);

export default router;