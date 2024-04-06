import React, { useRef } from 'react'
import { BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { SendMessageActionFun } from '../../action/user';
import { MessageAction } from '../../store/message';

const MessageInput = () => {
    const dispatch = useDispatch()
    const { SelectedUserToChat } = useSelector(state => state.user)
    let message = useRef(" ")
    const user = JSON.parse(localStorage.getItem('User'))?.user

    const handleSendMessage = (e) => {
        e.preventDefault()
        dispatch(SendMessageActionFun({ message: message.current.value, id: SelectedUserToChat._id }))
        message.current.value = " "
    }

    return (
        <form className='px-4 my-3' onSubmit={(e) => handleSendMessage(e)}>
            <div className='w-full relative'>
                <input type="text" ref={message} className='border text-sm p-2 focus:outline-none focus rounded-lg block w-full bg-gray-700 border-gray-600 text-white' placeholder='Send a Message' />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    <BsSend />
                </button>
            </div>
        </form>
    )
}

export default MessageInput
