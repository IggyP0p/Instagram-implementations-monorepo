import express from "express";
const router = express.Router();
import { createMessage } from "../controllers/messagesController";

router.post("/message", createMessage);

export default router;