import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();


router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id",protectRoute,getMessage)

export default router;
