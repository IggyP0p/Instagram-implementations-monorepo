import express from "express";
const router = express.Router();
import ConversationController from "../controllers/conversationsController.js";

router.post("/conversation", ConversationController.insertConversation);
router.get("/conversation", ConversationController.getConversation);
router.delete("/conversation", ConversationController.eraseConversation);

export default router;
