import express from "express";
const router = express.Router();
import { createMessage } from "../controllers/messagesController.js";

router.post("/message", createMessage);

export default router;