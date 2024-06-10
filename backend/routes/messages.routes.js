import express from 'express';

import {sendMessage, getMessages} from "../controllers/messages.controller.js"

import protectRoutes from '../middlewares/protectRoutes.js';

const router = express.Router();

router.use(protectRoutes)
router.get("/:receiverId", getMessages)
router.post("/:receiverId",sendMessage)

export default router