import React, { useState } from 'react'
import { IoPersonAddSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux'
import { SendFriendReqActionFun } from '../../action/user';
import { TiTick } from "react-icons/ti";

const Conversation = ({ UserToSendFriendReq }) => {
    let [ChangeIcon, SetChangeIcon] = useState(false)
    const dispatch = useDispatch()
    const SendFriendReq = (e) => {
        e.preventDefault()
        dispatch(SendFriendReqActionFun(UserToSendFriendReq[0]))
        SetChangeIcon(true)
    }


    return <>
        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar online '>
                <div className='w-12 rounded-full'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-vXdcr9hlDYAQ5-ncVfxtlXW2zUv7z7bQ02cxnz6KA&s" alt="user avatar" />
                </div>
            </div>
            <div className='flex flex-col flex-1 '>
                <div className='flex gap-3 justify-between'>
                    {UserToSendFriendReq ? <>
                        <p className='font-blod text-gray-200'>{UserToSendFriendReq[1]}</p>
                        <button onClick={(e) => SendFriendReq(e)} className="btn btn-outline  bg-white rounded-full">
                            {ChangeIcon ?
                                <TiTick style={{ color: 'black', fontSize: "33px" }} /> : <IoPersonAddSharp style={{ color: 'black' }} />
                            }
                        </button>
                    </>
                        : <>
                            <p className='font-blod text-gray-200'>hari om</p>
                        </>}
                </div>
            </div>
        </div >
        <div className='divider my-0 py-0 h-1'></div>
    </>
}

export default Conversation
