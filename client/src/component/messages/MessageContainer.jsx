import { useEffect, } from 'react'
import Messages from './messages.jsx'
import MessageInput from './MessageInput.jsx'
import { TiMessage } from "react-icons/ti";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { GetMessages } from '../../action/user.js';

const MessageContainer = ({ IamPhoneView }) => {
    let noChatSelected = true
    let SelectedUserToChat = useSelector(state => state.user.SelectedUserToChat)

    if (IamPhoneView) SelectedUserToChat = JSON.parse(localStorage.getItem('SelectedUserToChat'))

    const dispatch = useDispatch()
    useEffect(() => {
        if (IamPhoneView) {
            dispatch(GetMessages(JSON.parse(localStorage.getItem('SelectedUserToChat'))._id))
        }
    }, [dispatch])

    if (SelectedUserToChat) {
        noChatSelected = false
    }

    return <>
        <div className={`md:flex ${IamPhoneView ? "" : 'hidden border-l border-slate-500'} overflow-auto h-full w-full flex-col`}>
            {noChatSelected ? <NoChatSelected /> : <>
                <div className="navbar bg-base-100 xs:fixed xs:top-0 md:relative xs:z-[99] gap-3">
                    <div className='avatar'>
                        <span className='w-12 rounded-full'>
                            <img src={SelectedUserToChat.ProfilePic} alt="user avatar" />
                        </span>
                    </div>
                    <div>
                        <div className="indicator">
                            <span className='text-gray-100 font-bold text-3xl align-center'>{SelectedUserToChat.username}</span>
                        </div>
                    </div>
                </div>
                <Messages conversationData={SelectedUserToChat} />
                <MessageInput className="overflow-hidden" />
            </>
            }
        </div >
    </>

}

export default MessageContainer


const NoChatSelected = () => {
    const user = JSON.parse(localStorage.getItem('User'))?.user

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome {user.username}</p>
                <p>Select a Chat to Start Messaging</p>
                <TiMessage className='text-3xl md:text-6xl text-center'></TiMessage>
            </div>
        </div>
    )
}
