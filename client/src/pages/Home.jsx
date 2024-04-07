import React from 'react'
import Sidebar from '../component/SidBar/Sidebar'
import MessageContainer from '../component/messages/MessageContainer'
import { useDispatch } from 'react-redux'
import { GetFriends } from '../action/user'
import { Socket } from '../socket/socket'

const Home = () => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('User'))

    if (user) {
        dispatch(GetFriends(user._id))
    }
    return (
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar />
            <MessageContainer />
            <Socket />
        </div>
    )
}

export default Home
