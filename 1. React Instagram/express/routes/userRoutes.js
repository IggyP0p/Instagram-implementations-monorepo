import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";

router.post('/user', userController.create);
router.get('/user/:id', userController.findById);

export default router;