import express from "express";
const router = express.Router();
import messagesController from "../controllers/messagesController.js";

router.post("/messages", messagesController.sendMessage);
router.get("/messages/:id", messagesController.loadMessages); /* TO DO test this method */

export default router;
