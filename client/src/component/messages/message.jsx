import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import Picker from 'emoji-picker-react'

const message = ({ Message }) => {
    const time = new Date(Message.createdAt).toLocaleTimeString()
    const user = JSON.parse(localStorage.getItem('User'))?.user
    const { SelectedUserToChat } = useSelector(state => state.user)
    let { ShakeMessage } = useSelector(state => state.user)
    const View = useRef()
    let [ShowReaction, SetReaction] = useState(false)
    const { PhoneView } = useSelector(state => state.user)

    useEffect(() => {
        setTimeout(() => {
            View.current.scrollIntoView({ behavior: "smooth" })
        }, 100);
    }, [])

    const ChatPosition = Message.senderId === user._id

    const handleShowReacton = (e) => {
        SetReaction(false)
    }

    const emojis = [
        { id: 1, emoji: "👍" },
        { id: 2, emoji: "❤️" },
        { id: 3, emoji: "😂" },
        { id: 4, emoji: "😮" },
        { id: 5, emoji: "🥺" },
        { id: 6, emoji: "🙏" }
    ]

    return (
        <div className={`chat ${ChatPosition ? "chat-end" : "chat-start"}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={ChatPosition ? user.ProfilePic : SelectedUserToChat?.ProfilePic} alt="user avatar" />
                </div>
            </div>
            <div className='Grid grid-cols-2'>
                {ShowReaction && <div className="emojis text-3xl p-2" style={{ backgroundColor: "#374151" }}>
                    {emojis.map((em) => {
                        return <span onClick={(e) => handleShowReacton(e)} className='hover:text-4xl cursor-pointer'>{em.emoji}</span>
                    })}
                </div>}
                <div style={ChatPosition ? { justifyContent: "end", display: 'grid', position: 'relative' } : null}>
                    <div onClick={() => SetReaction((pre => !pre))} className={`chat-bubble flex text-white bg-blue-500  ${!ChatPosition && ShakeMessage ? "message-shake" : ""} `} ref={View}>
                        {Message.message}
                        <span className='absolute bottom-0 top-10 left-0 rounded-full' style={{ backgroundColor: "#374151" }}>🙏</span>
                    </div>
                    <div className={`chat-fotter opacity-50 text-xs flex gap-1 items-center`}>{time}</div>
                </div>
            </div >
        </div >
    )
}

export default message
