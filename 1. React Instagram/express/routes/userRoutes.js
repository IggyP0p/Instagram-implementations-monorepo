import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";

router.post('/user', userController.create);

export default router;