import { useEffect } from 'react'
import io from 'socket.io-client'
import { useDispatch } from 'react-redux'
import { UserAction } from '../store/user'
import { MessageAction } from '../store/message'

export const Socket = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const socket = io("http://localhost:9000", {
            query: {
                userId: JSON.parse(localStorage.getItem('User'))?.user._id
            }
        })

        socket.on("OnlineUser", (data) => {
            dispatch(UserAction.setOnlineFriends(data))
        })

        socket.on("message", (msg) => {
            dispatch(MessageAction.Messages(msg))
        })

        socket.on("connect", () => {
            console.log("Connected")
        })
    }, [])
    return null
}