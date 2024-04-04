import express from 'express';
import auth from '../middleware/auth.js';
import WrapAsync from '../utilities/WrapAsync.js';
import { SendFriendReq } from '../controller/friend.js';
const router = express.Router();

router.post("/Request/:id", auth, WrapAsync(SendFriendReq))

export default router;