import User from "../models/user.js"
import bcrypt from "bcrypt"
import generateJWT from "../utilities/generateJWT.js"

export const SignUp = async (req, res) => {
    let { username, email, gender, ProfilePic } = req.body

    // Checking Unique Username
    const user = await User.findOne({ username: username })
    if (user) return res.status(400).json({ message: "Choose a Unique Username" })

    const boyProfilePic = ProfilePic ? ProfilePic : `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = ProfilePic ? ProfilePic : `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = await new User({
        username: username, email: email, gender,
        ProfilePic: gender === "Male" ? boyProfilePic : girlProfilePic
    })

    await newUser.save()

    const token = await generateJWT(newUser._id, res)
    res.status(200).json({ user: newUser, token })
}

export const Login = async (req, res) => {
    let { email } = req.body
    const user = await User.findOne({ email: email }).populate("Friends").populate("PendingReq")
    if (!user) return res.status(400).json({ message: "User not found" })
    const token = await generateJWT(user._id, res)
    res.status(200).json({ user: user, Successmessage: "Logged In Success", token })
}
