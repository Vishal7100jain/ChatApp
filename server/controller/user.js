import User from "../models/user.js"

export const SignUp = async (req, res) => {
    const { Name, password, gender, ProfilePic } = req.body
    console.log(req.body)
    const newUser = await new User({ username: Name, password, gender, ProfilePic })
    await newUser.save().catch(err => res.status(400).json(err))
    res.status(200).json(newUser)
}

export const Login = async (req, res) => {
    res.send("Login page")
}

export const Logout = async (req, res) => {
    res.send("logout route")
}