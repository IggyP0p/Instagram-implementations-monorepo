import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";

router.post('/user', userController.create); // register
router.get('/user/login', userController.login); 
router.get('/user/:id', userController.findById);
router.patch('/user/:id', userController.update);
router.patch('/user/:id/deactivate', userController.deactivate); //soft delete
router.patch('/user/:id/activate', userController.activate); //soft delete
router.delete('/user/:id', userController.delete);

export default router;