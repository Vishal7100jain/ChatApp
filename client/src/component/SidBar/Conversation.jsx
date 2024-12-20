import React, { useState } from 'react'
import { IoPersonAddSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux'
import { GetMessages, SendFriendReqActionFun } from '../../action/user';
import { TiTick } from "react-icons/ti";
import { UserAction } from '../../store/user';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Conversation = ({ UserToSendFriendReq, conversationData }) => {
    const navigate = useNavigate()
    let { PhoneView } = useSelector(state => state.user)

    let [ChangeIcon, SetChangeIcon] = useState(false)

    const dispatch = useDispatch()
    const SendFriendReq = (e) => {
        e.preventDefault()
        dispatch(SendFriendReqActionFun(UserToSendFriendReq[0]))
        SetChangeIcon(true)
    }

    const OnlineFrineds = useSelector(state => state.user.OnlineFriends)

    const handleStartChat = (e) => {
        if (PhoneView) {
            navigate('/Conversation')
        }

        e.preventDefault()
        dispatch(UserAction.StartChatWithUser(conversationData))
        dispatch(GetMessages(conversationData._id))
    }

    return <>
        <div className='flex gap-2 items-center hover:bg-white hover:text-black rounded p-2 py-1 cursor-pointer' onClick={conversationData ? (e) => handleStartChat(e) : null}>
            <div className={`avatar ${OnlineFrineds && OnlineFrineds.includes(conversationData?._id) ? "online" : ""}`}>
                <div className='w-12 rounded-full'>
                    <img src={conversationData ? conversationData.ProfilePic : UserToSendFriendReq[2]} alt="user avatar" />
                </div>
            </div>
            <div className='flex flex-col flex-1 hover:text-black'>
                <div className='flex gap-3 justify-between'>
                    {UserToSendFriendReq ? <>
                        <p className=' font-blod hover:text-black text-3xl'>{UserToSendFriendReq[1]}</p>
                        <button onClick={(e) => SendFriendReq(e)} className="btn btn-outline  bg-white rounded-full">
                            {ChangeIcon ?
                                <TiTick style={{ color: 'black' }} /> : <IoPersonAddSharp style={{ color: 'black' }} />
                            }
                        </button>
                    </>
                        : <>
                            <p className='text-2xl pb-3 font-bold'>{conversationData.username}</p>
                        </>}
                </div>
            </div>
        </div >
        <div className='divider my-0 py-0 h-1'></div>
    </>
}

export default Conversation
