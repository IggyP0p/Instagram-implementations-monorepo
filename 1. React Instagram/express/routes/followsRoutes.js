import express from "express";
const router = express.Router();
import { createFollow } from "../controllers/followsController.js";

router.post("/follow", createFollow);

export default router;