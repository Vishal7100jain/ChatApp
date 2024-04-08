import React, { useRef, useState } from 'react'
import { BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { SendMessageActionFun } from '../../action/user';
import { MdEmojiEmotions } from "react-icons/md";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'


const MessageInput = () => {
    const dispatch = useDispatch()
    const { SelectedUserToChat } = useSelector(state => state.user)
    let message = useRef(" ")
    let [ShowEmoji, SetEmojiPicker] = useState(false)
    const user = JSON.parse(localStorage.getItem('User'))?.user

    const handleSendMessage = (e) => {
        e.preventDefault()
        dispatch(SendMessageActionFun({ message: message.current.value, id: SelectedUserToChat._id }))
        message.current.value = " "
    }

    const ShowEmojiPicker = () => {
        console.log('clicked')
        SetEmojiPicker((pre) => !pre)
    }

    const HandleEmojiToInput = (e) => {
        // console.log(e)
        message.current.value += e.native
    }

    window.addEventListener('click', (e) => {
        console.log(e.target.className)
        if (e.target.className !== 'Emoji absolute inset-y-0 start-0 flex items-center px-2') {
            SetEmojiPicker(false)
        }
    })

    return (
        <form className='px-4 my-3' onSubmit={(e) => handleSendMessage(e)}>
            {ShowEmoji && <Picker data={data} onEmojiSelect={(e) => HandleEmojiToInput(e)} />}
            <div className='w-full relative'>
                <div className="Emoji absolute inset-y-0 start-0 flex items-center px-2" onClick={() => ShowEmojiPicker()}>
                    <MdEmojiEmotions />
                </div>
                <input type="text" ref={message} className='border text-sm p-2 px-8 focus:outline-none focus rounded-lg block w-full bg-gray-700 border-gray-600 text-white' placeholder='Send a Message' />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    <BsSend />
                </button>
            </div>
        </form>
    )
}

export default MessageInput
