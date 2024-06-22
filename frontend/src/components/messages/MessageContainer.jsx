import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = true
  return (
    <div className=' md:min-w-[450px] flex flex-col'>
     {noChatSelected ? <NoChatSelected></NoChatSelected>: (
       <>
       {/* header */}
       <div className='py-2 px-4 mb-2 bg-slate-500 '>
         <span className='label-text'>To:</span><span className='font-bold text-grey-900'>Milan Patel</span>
       </div>
       <Messages></Messages>
       <MessageInput></MessageInput>
       </>
     )}
    </div>
  )
}



const NoChatSelected = () => {
  return (
    <div className='flex items-center w-full h-full justify-center'>
        <div className='px-4 text-center sm:text-lg md:text-xl flex flex-col items-center font-semibold gap-2 text-gray-200'> 
        <p>Welcome 👋Milan patel </p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
        </div>
    </div>
  )
}


export default MessageContainer