import express from 'express'
import User from '../models/user.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/users', auth, async (req, res) => {
    const LoggedInUser = req.userId
    await User.find().then(res => console.log(res.length))
    const user = await User.find({ _id: { $ne: LoggedInUser } }).select("-password")
    console.log(user.length)

    res.status(200).json(user)
})

export default router
