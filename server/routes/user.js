import express from 'express'
import User from '../models/user.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/users', auth, async (req, res) => {
    const LoggedInUser = req.userId
    await User.find()
    const user = await User.find({ _id: { $ne: LoggedInUser } }).select("-password")

    //friends list now we going to add
    res.status(200).json(user)
})

export default router
