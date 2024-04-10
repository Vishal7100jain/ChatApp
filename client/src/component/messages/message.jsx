import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

const message = ({ Message }) => {
    const time = new Date(Message.createdAt)
    const hrs = time.getHours()
    const mint = time.getMinutes()
    const AM_PM = time.getTimezoneOffset()
    const user = JSON.parse(localStorage.getItem('User'))?.user
    const { SelectedUserToChat } = useSelector(state => state.user)
    let { ShakeMessage } = useSelector(state => state.user)
    const View = useRef()
    let [ShowReaction, SetReaction] = useState(false)
    let [ShowSelectedEmoji, SetEmojiOnMessage] = useState()

    useEffect(() => {
        setTimeout(() => {
            View.current.scrollIntoView({ behavior: "smooth" })
        }, 100);
    }, [])

    const ChatPosition = Message.senderId === user._id

    const handleShowReacton = (e) => {
        SetEmojiOnMessage((pre) => {
            if (pre != e.target.innerHTML) return pre = e.target.innerHTML
            else return pre = ""
        })
        SetReaction(false)
    }

    const emojis = [
        { id: 1, emoji: "👍" },
        { id: 2, emoji: "❤️" },
        { id: 3, emoji: "😂" },
        { id: 4, emoji: "😮" },
        { id: 5, emoji: "🥺" },
        { id: 6, emoji: "🙏" }
    ]

    return (
        <div className={`chat ${ChatPosition ? "chat-end" : "chat-start"} mb-3`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={ChatPosition ? user.ProfilePic : SelectedUserToChat?.ProfilePic} alt="user avatar" />
                </div>
            </div>
            <div className="md:w-2/4 xs:w-10/12" style={{ display: 'grid', justifyContent: `${ChatPosition ? "end" : ""}` }} >
                {ShowReaction && <div className={`emojis text-3xl p-2 flex rounded-full text-center`} style={{ width: "18rem", backgroundColor: "#374151" }}>
                    {emojis.map((em) => {
                        return <span onClick={(e) => handleShowReacton(e)} className='hover:text-4xl cursor-pointer'>{em.emoji}</span>
                    })}
                </div>}
                <div className='w-full' style={ChatPosition ? { display: "grid", justifyContent: "end", position: 'relative' } : { display: 'grid', position: "relative", justifyContent: "start" }}>
                    <div onClick={() => SetReaction((pre => !pre))} className={`mb-3 max-w-none chat-bubble flex w-full text-white bg-blue-500  ${!ChatPosition && ShakeMessage ? "message-shake" : ""} `} ref={View}>
                        {Message.message}
                        <span className={`rounded-full text-2xl ${!ChatPosition ? 'right-0' : 'left-0'}`} style={{ position: 'absolute', top: '55%' }}>{ShowSelectedEmoji}</span>
                    </div>
                    <div className={` absolute ${ChatPosition ? 'right-0' : ''} chat-fotter opacity-50 text-xs text-start flex gap-1 items-center`} style={{ fontSize: "0.68rem", top: "89%", width: "3rem" }}>{hrs}:{mint} {hrs >= 12 ? "PM" : "AM"}</div>
                </div>
            </div >
        </div >
    )
}

export default message
