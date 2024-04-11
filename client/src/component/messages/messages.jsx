import React, { useEffect } from 'react'
import Message from './message.jsx'
import { useDispatch, useSelector } from 'react-redux'

const messages = () => {
    const { Messages } = useSelector(state => state.message)

    return (
        <div className='px-4 w-full flex-1 overflow-auto mb-10 mt-10'>
            {Messages && Messages.map((msg) => {
                return < Message key={msg._id} Message={msg} />
            })}
        </div >
    )
}

export default messages
