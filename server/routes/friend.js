import express from 'express';
import auth from '../middleware/auth.js';
import WrapAsync from '../utilities/WrapAsync.js';
import { AcceptFriendReq, ConvWithFriend, RejectFriendReq, SendFriendReq } from '../controller/friend.js';

const router = express.Router();

router.post("/Request/:id", auth, WrapAsync(SendFriendReq))
router.post("/Accept/:id", auth, WrapAsync(AcceptFriendReq))
router.get("/Conversations/:id", auth, WrapAsync(ConvWithFriend))
router.post("/Reject/:id", auth, WrapAsync(RejectFriendReq))
export default router;