import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    ProfilePic: {
        type: String,
    },
    Friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    PendingReq: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]
})

const User = new mongoose.model("user", userSchema)
export default User


