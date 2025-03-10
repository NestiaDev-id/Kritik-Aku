import express from "express";

import {
  createMessage,
  getMessages,
} from "../controllers/messageController.js";

const router = express.Router();

router.post("/send", createMessage);
router.get("/getAll", getMessages);

export default router;
