import { useEffect } from 'react'
import Sidebar from '../component/SidBar/Sidebar'
import MessageContainer from '../component/messages/MessageContainer'
import { useDispatch, useSelector } from 'react-redux'
import { GetFriends, GetUserInfoToStoreInRedux } from '../action/user'
import { Socket } from '../socket/socket'
import { Navigate } from 'react-router-dom'


const Home = () => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('User'))
    const getUserFromReduxStore = useSelector(state => state.user.user)



    useEffect(() => {
        if (user) {
            dispatch(GetFriends(user._id))
        } else {
            Navigate('/login')
        }
        if (!getUserFromReduxStore) {
            dispatch(GetUserInfoToStoreInRedux(user._id))
        }
    }, [user])

    return (
        <div id="Main" className='flex rounded-lg fixed bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar />
            <MessageContainer />
            <Socket />
        </div>
    )
}

export default Home
