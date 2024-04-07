import React from 'react'

const message = ({ Message }) => {
    const time = new Date(Message.createdAt).toLocaleTimeString()
    const user = JSON.parse(localStorage.getItem('User'))?.user

    return (
        <div div className={`chat ${Message.SenderId === user._id ? "chat-end" : "chat-start"} `}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-vXdcr9hlDYAQ5-ncVfxtlXW2zUv7z7bQ02cxnz6KA&s" alt="user avatar" />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`}> {Message.message}</div>
            <div className={`chat-fotter opacity-50 text-xs flex gap-1 items-center`}>{time}</div>
        </div >
    )
}

export default message
