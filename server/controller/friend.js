import User from "../models/user.js"

export const SendFriendReq = async (req, res) => {
    console.log(req.userId)
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) return res.status(400).json({ message: 'User not found' })
    if (user.Friends.includes(req.userId)) return res.status(400).json({ message: 'Already a friend' })
    if (user.PendingReq.includes(req.userId)) return res.status(400).json({ message: 'Request already sent' })
    user.PendingReq.push(req.userId)
    await user.save()
    res.status(200).json({ message: 'Request Sent' })
}