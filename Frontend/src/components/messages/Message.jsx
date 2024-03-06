import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const {authUser}= useAuthContext();
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id;
  const chatClass = fromMe ? 'chat-end': 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBg = fromMe ? 'bg-green-900' : 'bg-sky-900';
  const date = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : ""
  return (
    <div className={`chat ${chatClass}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="tailwind css" />

            </div>

        </div>
            <div className={`chat-bubble text-white ${bubbleBg} ${shakeClass} pb-2`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1">{date}</div>
    </div>
  )
}

export default Message