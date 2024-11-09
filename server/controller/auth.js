import User from "../models/user.js"
import bcrypt from "bcrypt"
import generateJWT from "../utilities/generateJWT.js"

export const SignUp = async (req, res) => {
    let { username, email, gender, ProfilePic } = req.body

    // Checking Unique Username
    const user = await User.findOne({ username: username })
    if (user) return res.status(400).json({ message: "Choose a Unique Username" })

    const hashemail = await bcrypt.hash(email, 12)
    const boyProfilePic = ProfilePic ? ProfilePic : `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = ProfilePic ? ProfilePic : `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = await new User({
        username: username, email: hashemail, gender,
        ProfilePic: gender === "Male" ? boyProfilePic : girlProfilePic
    })

    await newUser.save()

    const token = await generateJWT(newUser._id, res)
    res.status(200).json({ user: newUser, token })
}

export const Login = async (req, res) => {
    let { username, email } = req.body
    const user = await User.findOne({ username: username }).populate("Friends").populate("PendingReq")
    if (!user) return res.status(400).json({ message: "User not found" })
    const clearemail = await bcrypt.compare(email, user.email)
    if (clearemail) {
        const token = await generateJWT(user._id, res)
        res.status(200).json({ user: user, Successmessage: "Logged In Success", token })
    } else res.status(400).json({ message: "Invalid credentials" })
}
