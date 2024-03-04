import React from 'react'
import { MdOutlineScreenSearchDesktop } from "react-icons/md";




const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
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