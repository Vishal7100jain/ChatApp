import React from 'react'
import { useSelector } from 'react-redux'

const message = ({ Message }) => {
    const time = new Date(Message.createdAt).toLocaleTimeString()
    const user = JSON.parse(localStorage.getItem('User'))?.user
    const { SelectedUserToChat } = useSelector(state => state.user)

    return (
        <div div className={`chat ${Message.senderId === user._id ? "chat-end" : "chat-start"} `}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={Message.senderId === user._id ? user.ProfilePic : SelectedUserToChat.ProfilePic} alt="user avatar" />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`}> {Message.message}</div>
            <div className={`chat-fotter opacity-50 text-xs flex gap-1 items-center`}>{time}</div>
        </div >
    )
}

export default message
