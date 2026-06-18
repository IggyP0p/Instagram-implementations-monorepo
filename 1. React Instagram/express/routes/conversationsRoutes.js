import express from "express";
const router = express.Router();
import { createConversation } from "../controllers/conversationsController.js";

router.post("/conversation", createConversation);

export default router;