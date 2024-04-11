import express from "express";
import WrapAsync from "../utilities/WrapAsync.js";
import { GetMessages, SendMessage, EmojiOnMessage } from "../controller/message.js";
import auth from "../middleware/auth.js";
const router = express.Router()

router.post("/SendMessage/:id", auth, WrapAsync(SendMessage))
router.get("/GetMessages/:id", auth, WrapAsync(GetMessages))
router.patch("/Emoji/:id", auth, WrapAsync(EmojiOnMessage))

export default router