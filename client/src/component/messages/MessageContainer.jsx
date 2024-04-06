import React from 'react'
import Messages from './messages.jsx'
import MessageInput from './MessageInput.jsx'
import { TiMessage } from "react-icons/ti";
import { useSelector } from 'react-redux'

const MessageContainer = () => {
    let noChatSelected = true
    const { SelectedUserToChat } = useSelector(state => state.user)
    if (SelectedUserToChat) {
        noChatSelected = false
    }

    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {noChatSelected ? <NoChatSelected /> : <>
                <div className='bg-state-500 px-4 py-2 mb-2 flex'>
                    <div className='avatar'>
                        <span className=' w-12 rounded-full'>
                            <img src={SelectedUserToChat.ProfilePic} alt="user avatar" />
                        </span>
                    </div>
                    <span className='text-gray-100 font-bold text-2xl align-center'>{SelectedUserToChat.username} </span>
                </div>
                <div className='divider p-0 m-0'></div>
                <Messages conversationData={SelectedUserToChat} />
                <MessageInput />
            </>
            }
        </div>
    )
}

export default MessageContainer


const NoChatSelected = () => {
    const user = JSON.parse(localStorage.getItem('User'))?.user

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome {user.username}</p>
                <p>Select a Chat to Start Messaging</p>
                <TiMessage className='text-3xl md:text-6xl text-center'></TiMessage>
            </div>
        </div>
    )
}