import Conversation from './Conversation'
import { useSelector } from 'react-redux'

const Conversations = () => {
    const { Friends } = useSelector(state => state.user)
    const { getUserToAddFriend } = useSelector(state => state.user)

    return <>
        {getUserToAddFriend.length !== 0 ? (getUserToAddFriend.map((U) => {
            return (
                <div className='py-2 flex flex-col overflow-auto' key={U._id}>
                    <Conversation key={U._id} UserToSendFriendReq={[U._id, U.username, U.ProfilePic]}></Conversation>
                </div >
            )
        })) :
            <div className='py-2 flex flex-col overflow-auto'>
                {Friends.length !== 0 ? (
                    Friends.Friends.map((con) => {
                        return <Conversation key={con._id} conversationData={con} />;
                    }
                    )) : (
                    <div className='flex items-center justify-center h-96'>
                        <h1 className='text-2xl font-semibold text-gray-300'>
                            No Conversations
                        </h1>
                    </div>
                )
                }
            </div>
        }
    </>
}

export default Conversations
