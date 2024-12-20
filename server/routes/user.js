import express from 'express'
import User from '../models/user.js'
import auth from '../middleware/auth.js'
import WrapAsync from '../utilities/WrapAsync.js'
import { GetMyData, SearchUserToFriendReq } from '../controller/user.js'

const router = express.Router()

router.get('/UserSearch/:email', auth, WrapAsync(SearchUserToFriendReq))
router.get("/MyData/:id", auth, WrapAsync(GetMyData))

export default router
