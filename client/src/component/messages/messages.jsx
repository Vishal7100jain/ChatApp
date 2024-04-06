import React, { useEffect } from 'react'
import Message from './message.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { GetMessages } from '../../action/user.js'

const messages = () => {
    const { Messages } = useSelector(state => state.message)
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('User'))?.user

    useEffect(() => {
        dispatch(GetMessages(user._id))
    }, [dispatch])

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {Messages && Messages.map((msg) => {
                return < Message key={msg._id} Message={msg} />
            })}
        </div >
    )
}

export default messages
