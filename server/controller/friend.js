import User from "../models/user.js"

export const SendFriendReq = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) return res.status(400).json({ message: 'User not found' })
    if (user.Friends.includes(req.userId)) return res.status(400).json({ message: 'Already a friend' })
    if (user.PendingReq.includes(req.userId)) return res.status(400).json({ message: 'Request already sent' })
    user.PendingReq.push(req.userId)
    await user.save()
    res.status(200).json({ Successmessage: 'Request Sent' })
}

export const AcceptFriendReq = async (req, res) => {
    const { id } = req.params
    const userToAddFriend = await User.findById(id)
    const CurrUser = await User.findById(req.userId)

    if (!userToAddFriend) return res.status(400).json({ message: 'User not found' })

    if (CurrUser.Friends.includes(id)) return res.status(400).json({ message: 'Already a friend' })

    if (!CurrUser.PendingReq.includes(id)) return res.status(400).json({ message: 'No Request Found' })

    CurrUser.PendingReq.pop(id)
    CurrUser.Friends.push(id)
    await CurrUser.save()

    res.status(200).json({ Successmessage: 'Request Accepted', user: CurrUser })
}

export const RejectFriendReq = async (req, res) => {
    const { id } = req.params
    const userToReject = await User.findById(id)
    const CurrUser = await User.findById(req.userId)

    if (!userToReject) return res.status(400).json({ message: 'User not found' })
    if (!CurrUser.PendingReq.includes(id)) return res.status(400).json({ message: 'No Request Found' })

    CurrUser.PendingReq.pop(id)
    await CurrUser.save()

    res.status(200).json({ Successmessage: 'Request Rejected', user: CurrUser })
}

export const ConvWithFriend = async (req, res) => {
    const LoggedInUser = req.userId
    const Friends = await User.findById(LoggedInUser).populate('Friends')
    res.status(200).json(Friends)
}
