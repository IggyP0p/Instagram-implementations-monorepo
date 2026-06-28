import express from "express";
const router = express.Router();
import storiesController from "../controllers/storiesController.js";

router.post('/stories', storiesController.createStory);
router.delete('/stories/:id', storiesController.deleteStory);

export default router;