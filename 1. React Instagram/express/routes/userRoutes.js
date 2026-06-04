import express from "express";
const router = express.Router();

import { createUser } from "../controllers/userController.js";

router.post('/usuarios', createUser);

export default router;