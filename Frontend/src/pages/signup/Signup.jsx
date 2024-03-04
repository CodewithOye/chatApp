import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up <span className='text-green-500'>ChatApp</span>

            </h1>
            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='JohnDoe' className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter your password' className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Confirm password</span>
                    </label>
                    <input type="password" placeholder='Confirm your password' className='w-full input input-bordered h-10' />
                </div>
                {/* Gender checkbox */}
                <GenderCheckBox />
                <a href="#" className='text-sm hover:underline hover:text-green-600 mt-2 inline-block'>
                    Already have an acount?
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2 border-slate-700'>Sign Up</button>
                </div>


            </form>
        </div>
    </div>
  )
}

export default SignUp


//  Signup starter page

// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 Sign Up <span className='text-green-500'>ChatApp</span>

//             </h1>
//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Full Name</span>
//                     </label>
//                     <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder='JohnDoe' className='w-full input input-bordered h-10' />
//                 </div>
//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type="password" placeholder='Enter your password' className='w-full input input-bordered h-10' />
//                 </div>
//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Confirm password</span>
//                     </label>
//                     <input type="password" placeholder='Confirm your password' className='w-full input input-bordered h-10' />
//                 </div>
//                 {/* Gender checkbox */}
//                 <GenderCheckBox />
//                 <a href="#" className='text-sm hover:underline hover:text-green-600 mt-2 inline-block'>
//                     Already have an acount?
//                 </a>
//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 border-slate-700'>Sign Up</button>
//                 </div>


//             </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp