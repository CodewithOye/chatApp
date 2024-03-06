import React, { useState } from 'react'
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';




const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 4){
      return toast.error("Search term must be at least 4 Characters long")

    }

    const findConversation = conversations.find((conv)=> conv.fullName.toLowerCase().includes(search.toLowerCase()));
    if(findConversation){
      setSelectedConversation(findConversation);
      setSearch("")
    }else toast.error("No Conversation Found!");

  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
         />
        <button type='submit' className='btn btn-circle bg-green-600 text-white'>
        <MdOutlineScreenSearchDesktop className='w-6 h-3 outline-none' />

        </button>
    </form>
  )
}

export default SearchInput




// Starter code for this file 

// import React from 'react'
// import { MdOutlineScreenSearchDesktop } from "react-icons/md";




// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-green-600 text-white'>
//         <MdOutlineScreenSearchDesktop className='w-6 h-3 outline-none' />

//         </button>
//     </form>
//   )
// }

// export default SearchInput