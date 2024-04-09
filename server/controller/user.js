import User from '../models/user.js'

export const SearchUserToFriendReq = async (req, res) => {
    const username = req.params.id

    const users = await User.find({
        $and: [
            { username: { $regex: username, $options: 'i' } },
            { _id: { $ne: req.userId } }
        ]
    }).select("-password")

    if (!users) return res.status(400).json({ message: 'User not found' })

    console.log(users)
    res.status(200).json(users)
}

export const GetMyData = async (req, res) => {
    const user = await User.findById(req.userId).select("-password").populate('Friends').populate('PendingReq')
    res.status(200).json(user)
}