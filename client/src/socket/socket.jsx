import { useEffect } from 'react'
import io from 'socket.io-client'
import { useDispatch } from 'react-redux'
import { UserAction } from '../store/user'
import { MessageAction } from '../store/message'
import { useSelector } from 'react-redux'
import NofiSound from '../assets/Sound.mp3'

export const Socket = () => {
    let ShakeMessage = false
    const dispatch = useDispatch()

    useEffect(() => {
        const socket = io("https://chatapp-k0b4.onrender.com/", {
            query: {
                userId: JSON.parse(localStorage.getItem('User'))?.user._id
            }
        })

        socket.on("OnlineUser", (data) => {
            dispatch(UserAction.setOnlineFriends(data))
        })

        socket.on("message", (msg) => {
            const Sound = new Audio(NofiSound)
            Sound.play()
            dispatch(UserAction.ShakeMessage(true))
            dispatch(MessageAction.LiveMessageStore(msg))
        })

        socket.on("emoji", (MsgWithEmoji) => {
            // console.log(MsgWithEmoji, "haa bhai mai live data")
            dispatch(MessageAction.SetEmojiOnMessageLive(MsgWithEmoji))
        })
    }, [])
    return null
}