import express from 'express'
import User from '../models/user.js'
import auth from '../middleware/auth.js'
import WrapAsync from '../utilities/WrapAsync.js'
import { ConvWithFriend, SearchUserToFriendReq } from '../controller/user.js'

const router = express.Router()

router.get('/UserSearch/:id', auth, WrapAsync(SearchUserToFriendReq))
router.get('/users', auth, WrapAsync(ConvWithFriend))

// User.deleteMany({}).then(res => console.log(res)).catch(err => console.log(err))
export default router
