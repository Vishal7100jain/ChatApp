import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'message',
        default: []
    }]

}, { timestamps: true })

const Conversation = new mongoose.model("conversation", conversationSchema)
export default Conversation