import express from "express";
const router = express.Router();
import { createStory } from "../controllers/storiesController.js";

router.post('/stories', createStory);

export default router;