import Message from '../models/message.js'
import Conversation from '../models/converstion.js'
import { GetReciverSocketId, io } from '../socket/socket.js'

export const SendMessage = async (req, res) => {
    const { message, id: receiver } = req.body
    const sender = req.userId
    const newMessage = await new Message({
        message: message
    })
    newMessage.senderId = sender
    newMessage.receiverId = receiver
    await newMessage.save()

    const conversation = await Conversation.findOne({ members: { $all: [sender, receiver] } })
    if (conversation) {
        conversation.messages.push(newMessage)
        await conversation.save()
    } else {
        const newConversation = await new Conversation({
            members: [sender, receiver],
            messages: [newMessage]
        })
        await newConversation.save()
    }

    const ReceiverScoketId = GetReciverSocketId(req.body.id)

    io.to(ReceiverScoketId).emit('message', [newMessage])
    res.status(200).json([newMessage])
}

export const GetMessages = async (req, res) => {
    const sender = req.userId
    const receiver = req.params.id

    const conversation = await Conversation.findOne({ members: { $all: [sender, receiver] } })
        .populate('messages')

    if (!conversation) {
        const newConversation = await new Conversation({
            members: [sender, receiver],
            messages: []
        })
        await newConversation.save()
        return res.status(200).json(newConversation.messages)
    }

    // console.log(conversation.messages)
    res.status(200).json(conversation.messages)
}

export const EmojiOnMessage = async (req, res) => {
    const { id } = req.params
    const emoji = Object.keys(req.body).join("")
    const msg = await Message.findOneAndUpdate({ _id: id }, { Emoji: emoji }, { new: true })
    io.emit("emoji", msg)
    res.status(200).json(msg)
}

// Conversation.deleteMany({}).then(res => console.log(res)).catch(err => console.log(err))
// Message.deleteMany({}).then(res => console.log(res)).catch(err => console.log(err))