import express from "express";
const router = express.Router();
import followsController from "../controllers/followsController.js";

router.post("/follow", followsController.createFollow);
router.get("/follow/:id", followsController.retrieveFollows);

export default router;
