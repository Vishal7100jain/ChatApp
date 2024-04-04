import User from "../models/user.js"
import bcrypt from "bcrypt"
import generateJWT from "../utilities/generateJWT.js"

export const SignUp = async (req, res) => {
    let { username, password, gender, ProfilePic } = req.body
    //Hashing the password
    const hashPassword = await bcrypt.hash(password, 12)
    const boyProfilePic = ProfilePic ? ProfilePic : "https://avatar.iran.liara.run/public/boy"
    const girlProfilePic = ProfilePic ? ProfilePic : "https://avatar.iran.liara.run/public/girl"

    const newUser = await new User({
        username: username, password: hashPassword, gender,
        ProfilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })

    await newUser.save()

    const token = await generateJWT(newUser._id, res)
    res.status(200).json({ userId: newUser._id, token })
}

export const Login = async (req, res) => {
    let { username, password } = req.body
    const user = await User.findOne({ username: username })
    if (!user) return res.status(400).json({ message: "User not found" })
    const clearPassword = await bcrypt.compare(password, user.password)

    if (clearPassword) {
        const token = await generateJWT(user._id, res)
        res.status(200).json({ userId: user._id, token })
    } else res.status(400).json({ message: "Invalid credentials" })
}

export const Logout = async (req, res) => {
    if (!req.cookies.token) return res.status(400).json({ message: 'You are not logged in' })
    res.clearCookie('token')
    res.status(200).json({ message: 'loggout successfully' })
}