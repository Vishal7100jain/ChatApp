import React from 'react'
import Conversation from './Conversation'
import { useDispatch, useSelector } from 'react-redux'

const Conversations = () => {
    // const { conversations } = useSelector(state => state.conversations)
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            <Conversation></Conversation>
        </div>
    )
}

export default Conversations
