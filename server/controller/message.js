import Message from '../models/message.js'
import Conversation from '../models/converstion.js'

export const SendMessage = async (req, res) => {
    const { message } = req.body
    const sender = req.userId
    const receiver = req.params.id
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

    res.status(200).json(newMessage)
}

export const GetMessages = async (req, res) => {
    const sender = req.userId
    const receiver = req.params.id
    const conversation = await Conversation.findOne({ members: { $all: [sender, receiver] } })
        .populate('messages')

    if (!conversation) return res.status(404).json({ message: "No Conversation Found" })

    res.status(200).json(conversation.messages)
}