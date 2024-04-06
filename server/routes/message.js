import express from "express";
import WrapAsync from "../utilities/WrapAsync.js";
import { GetMessages, SendMessage, GetConversations } from "../controller/message.js";
const router = express.Router()

router.post("/SendMessage/:id", WrapAsync(SendMessage))
router.get("/GetMessages/:id", WrapAsync(GetMessages))

export default router