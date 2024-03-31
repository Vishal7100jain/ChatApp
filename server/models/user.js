import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    ProfilePic: {
        type: String,
        default: ""
    }
})

const User = new mongoose.model("user", userSchema)
export default User


