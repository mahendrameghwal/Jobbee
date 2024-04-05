import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
const Loginpopup = () => {
    const [showModal, setShowModal] = useState(false);

  return (


(
    showModal &&

    <div  tabIndex="-1" className="fadeIn  max-h-full min-h-screen backdrop-blur-sm backdrop-brightness-50 bg-black bg-opacity-70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-70 h-full items-center justify-center flex">
  <div className="relative p-4 w-full max-w-md h-full md:h-auto">
    <div className="relative  max-md:translate-y-1/2 bg-white rounded-lg shadow">
      <button type="button" className="absolute top-3 right-2.5 text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close">
        <svg aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
        <span className="sr-only">Close popup</span>
      </button>

      <div className="p-5">
        <h3 className="text-2xl mb-0.5 font-medium"></h3>
        <p className="mb-4 text-sm font-normal text-gray-800"></p>

        <div className="text-center">
          <p className="mb-3 text-2xl font-semibold leading-5 text-slate-800">
            Login to your account
          </p>
          <p className="mt-2 tracking-wide text-sm leading-4 underline text-slate-600">
            You must be logged in to perform this action.
          </p>
        </div>
        <form className="w-full">
        <section className='w-full my-5 max-sm:my-7'>
        
        <label
        htmlFor="password"
        className="relative   block rounded-md border border-gray-200 shadow-sm focus-within:border-slate-600 focus-within:ring-1 focus-within:ring-slate-600"
        >
          <input
            type="password"
            className="peer  p-2 w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="enter password"
            />
            
            <span
            className="pointer-events-none absolute tracking-wider start-2.5 top-0 -translate-y-2/3 bg-white  capitalize  text-sm font-medium text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
            enter your email 
            </span>
            </label>
            </section>
            <section className='w-full my-5'>
            
            <label
            htmlFor="password"
            className="relative   block rounded-md border border-gray-200 shadow-sm focus-within:border-slate-600 focus-within:ring-1 focus-within:ring-slate-600"
            >
            <input
            type="password"
            className="peer  p-2 w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="enter password"
            />
          
            <span
            className="pointer-events-none  tracking-wider  absolute start-2.5 top-0 -translate-y-2/3 bg-white   capitalize text-sm font-medium text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
            enter password
            </span>
          </label>
          </section>
          <Link to={'/forgotpassword'} className=" text-sm font-medium text-gray-500">
          
          <span className="text-blue-800 hover:text-blue-600">Reset your password?</span>
          </Link>
          <Link to={'/login'}>
          <button 
          type="submit"
            className="inline-flex w-full mt-4 items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
            Continue
            </button>
            </Link>
            </form>
            
            <div className="mt-4 text-center text-sm text-slate-600">
            <span className='px-2'>  Don't have an account?</span>
            <Link to='/register' className="font-medium text-[#4285f4]">Sign up</Link>
            </div>
            </div>
    </div>
    </div>
</div>
)
)
}

export default Loginpopup

// <div className="mt-7 flex flex-col gap-2">
//           <button
//             className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
//             <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="h-[18px] w-[18px] " />
//             Continue with GitHub
//           </button>

//           <button
//             className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
//             <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-[18px] w-[18px] " />
//             Continue with Google
//           </button>

//           <button
//             className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
//             <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="Google" className="h-[18px] w-[18px] " />
//             Continue with LinkedIn
//           </button>
//         </div>
{ /* <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
    <div className="h-px w-full bg-slate-200"></div>
    OR
    <div className="h-px w-full bg-slate-200"></div>
</div>*/}