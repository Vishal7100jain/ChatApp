import User from '../models/user.js'

export const SearchUserToFriendReq = async (req, res) => {
    const { email } = req.params
    const users = await User.find({
        $and: [
            { email: { $regex: email, $options: 'i' } },
            { _id: { $ne: req.userId } }
        ]
    })
    if (!users) return res.status(400).json({ message: 'User not found' })
    res.status(200).json(users)
}

export const GetMyData = async (req, res) => {
    const user = await User.findById(req.userId).populate('Friends').populate('PendingReq')
    res.status(200).json(user)
}