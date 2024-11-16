import { FaUserCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { ImCross } from "react-icons/im";
import { AcceptFriendReqActionFun, RejectFriendReqActionFun } from '../../action/user';
import { MdPendingActions } from "react-icons/md";
import { UserAction } from "../../store/user";
import { useState } from "react";
import toast from "react-hot-toast";

const SiderProfile = () => {
    const user = useSelector(state => state.user.user) || JSON.parse(localStorage.getItem('User'))?.user
    const dispatch = useDispatch()
    const [isloading, setIsloading] = useState(false)

    const handleRemoveReq = (e, id) => {
        e.preventDefault()
        dispatch(RejectFriendReqActionFun(id))
    }

    const handleAcceptReq = (e, id) => {
        e.preventDefault()
        dispatch(AcceptFriendReqActionFun(id))
    }

    const hanldeLogout = () => {
        try {
            setIsloading(true)
            dispatch(UserAction.setUser({ user: null }))
            localStorage.removeItem('User')
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            toast.success('Logout SuccessFully')
            setIsloading(false)
        }
    }

    return (
        <div className="drawer z-[99] bg-zinc-700 ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu overflow-x-scroll overflow-y-hidden p-4 xs:w-full md:w-1/3 bg-base-200 text-base-content " style={{ height: "90%" }}>
                    <div className=' font-sans font-bold flex text-xl items-center'>
                        <div className="flex-row flex items-center w-4/5 gap-2">
                            <div className='avatar'>
                                <span className='w-12 rounded-full'>
                                    <img src={user.ProfilePic} alt="user avatar" />
                                </span>
                            </div>
                            <h1 style={{ display: 'inline-flex' }} className="text-2xl">{user.username}</h1>
                        </div>
                        <button disabled={isloading} className="btn btn-outline btn-primary border btn-sm" onClick={() => hanldeLogout()}>Logout</button>
                    </div>
                    <li>
                        <div className="dropdown dropdown-bottom  hover:bg-white">
                            <div tabIndex={0} role="button" className="  hover:text-black p-1 text-xl" style={{ width: "17rem", display: "flex", alignItems: 'center' }}>
                                <MdPendingActions /> &nbsp; Pending Requests
                            </div>
                            <div className="divider"></div>
                            <ul tabIndex={0} className="dropdown-content  z-[1] m-0 menu p-2 shadow bg-base-100 rounded-box w-full">
                                {user?.PendingReq?.length === 0 ? <li className='p-2'>No Pending Requests</li> :
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
            </div>
        </div >
    )
}

export default SiderProfile
