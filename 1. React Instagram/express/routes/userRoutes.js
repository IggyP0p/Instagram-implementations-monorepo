import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";

router.post('/user', userController.create);
router.get('/user/:id', userController.findById);
router.patch('/user/:id', userController.update);
router.patch('/user/:id/deactivate', userController.deactivate); //soft delete


export default router;