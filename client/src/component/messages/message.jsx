import React from 'react'

const message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-vXdcr9hlDYAQ5-ncVfxtlXW2zUv7z7bQ02cxnz6KA&s" alt="user avatar" />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>Hi, Whats app</div>
            <div className={`chat-fotter opacity-50 text-xs flex gap-1 items-center`}>12:42</div>
        </div >
    )
}

export default message
