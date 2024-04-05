import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { ImCross } from "react-icons/im";
import { AcceptFriendReqActionFun, RejectFriendReqActionFun } from '../../action/user';
import { MdPendingActions } from "react-icons/md";

const siderProfile = () => {
    const user = useSelector(state => state.user.user) || JSON.parse(localStorage.getItem('User'))?.user
    const dispatch = useDispatch()

    const handleRemoveReq = (e, id) => {
        e.preventDefault()
        dispatch(RejectFriendReqActionFun(id))
    }

    const handleAcceptReq = (e, id) => {
        e.preventDefault()
        dispatch(AcceptFriendReqActionFun(id))
    }
    return (
        <div className="drawer z-[99] bg-zinc-700">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu overflow-scroll p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <div className=' font-sans font-bold underline flex items-center text-xl  justify-center'>
                        <FaUserCircle color='white' /> <h1 className='px-2'>{user.username}</h1>
                    </div>
                    <li>
                        <div className="dropdown dropdown-bottom hover:bg-white hover:text-black ">
                            <div tabIndex={0} role="button" className="p-1 text-xl" style={{ width: "17rem", display: "flex", alignItems: 'center' }}><MdPendingActions /> &nbsp; Pending Requests </div>
                            <div className="divider"></div>
                            <ul tabIndex={0} className="dropdown-content  z-[1] m-0 menu p-2 shadow bg-base-100 rounded-box w-full">
                                {user.PendingReq.length === 0 ? <li className='p-2'>No Pending Requests</li> :
                                    user.PendingReq.map((FriendReqUser) => {
                                        return <div key={FriendReqUser._id} className='flex justify-around align-middle '>
                                            <li className='p-2 text-lg font-bold'>{FriendReqUser.username}</li>
                                            <div className="buttons">
                                                <button onClick={(e) => handleRemoveReq(e, FriendReqUser._id)} className='btn btn-outline rounded-full m-1 text-sm'><ImCross /></button>
                                                <button onClick={(e) => handleAcceptReq(e, FriendReqUser._id)} className='btn btn-outline rounded-full m-0'><FaUserCheck></FaUserCheck></button>
                                            </div>
                                        </div>
                                    })}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div >
        </div >
    )
}

export default siderProfile
