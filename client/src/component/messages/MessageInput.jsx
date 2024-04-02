import React from 'react'
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
    return (
        <form className='px-4 my-3'>
            <div className='w-full relative'>
                <input type="text" className='border text-sm p-2 focus:outline-none focus rounded-lg block w-full bg-gray-700 border-gray-600 text-white' placeholder='Send a Message' />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {/* buttons */}
                    <BsSend />
                </button>
            </div>
        </form>
    )
}

export default MessageInput
