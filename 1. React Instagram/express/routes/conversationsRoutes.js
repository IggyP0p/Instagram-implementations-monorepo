import express from "express";
const router = express.Router();
import { createConversation } from "../controllers/conversationsController";

router.post("/conversation", createConversation);

export default router;