import React from 'react'
import Conversation from './Conversation'
import { useSelector } from 'react-redux'

const Conversations = () => {
    const { conversation } = useSelector(state => state.user)
    const { getUserToAddFriend } = useSelector(state => state.user)

    return <>
        {getUserToAddFriend ? getUserToAddFriend.map((U) => {
            return (
                <div className='py-2 flex flex-col overflow-auto'>
                    <Conversation key={U._id} UserToSendFriendReq={[U._id, U.username]}></Conversation>
                </div >
            )
        }) :
            <div className='py-2 flex flex-col overflow-auto'>
                {
                    !conversation.length === 0 ? conversation.map((con) => {
                        return <Conversation></Conversation>
                    }) : (<div className='flex items-center justify-center h-96'>
                        <h1 className='text-2xl font-semibold text-gray-300'>No Conversations</h1>
                    </div>
                    )
                }
            </div>
        }
    </>
}

export default Conversations
