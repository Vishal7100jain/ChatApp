import React from 'react'
import Sidebar from '../component/SidBar/Sidebar'
import MessageContainer from '../component/messages/MessageContainer'
import { useDispatch, useSelector } from 'react-redux'
import { GetFriends, GetUserInfoToStoreInRedux } from '../action/user'
import { Socket } from '../socket/socket'


const Home = () => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('User'))
    const getUserFromReduxStore = useSelector(state => state.user.user)

    if (!getUserFromReduxStore) {
        dispatch(GetUserInfoToStoreInRedux(user._id))
    }

    if (user) {
        dispatch(GetFriends(user._id))
    }

    return (
        <div style={{ height: "90vh" }} className='flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar />
            <MessageContainer />
            <Socket />
        </div>
    )
}

export default Home
