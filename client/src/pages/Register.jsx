import User from "../assets/user.svg"
import Usernameicon from "../assets/username.svg"
import lock from "../assets/lock.svg"
import emailicon from "../assets/email.svg"
import { useNavigate } from "react-router-dom"
import { SetregisterUser, resetUser } from "../../app/slices/RegisterSlice"
import {useSelector, useDispatch } from "react-redux"
import { useCallback, useState } from "react"
import { toast } from "react-hot-toast"
import {BiShow, BiHide} from "react-icons/bi"
import { useRegisterMutation } from "../../app/api/authApi"
import { debounce } from "lodash"

const Register = () => {
    const navigate =useNavigate()
    const [register, { isLoading, error }] = useRegisterMutation();
    const Register = useSelector(state=>state.register.User);
    const dispatch =useDispatch();
    const {fullname, username, email, password}= Register;
   const [Showpassword, setShowpassword] = useState(false)

  
    
    const HandleUser = (e) => {
        const { name, value } = e.target;
        if (name === 'Isorg') {
            const isOrgValue = value === 'candidate' ? false : true;
            dispatch(SetregisterUser({ Isorg: isOrgValue }));
          } else {

            dispatch(SetregisterUser({ [name]: value }));
        }
      
      };
      debounce(HandleUser,[300])

      const HandleRegister =  useCallback(async(e) => {
        e.preventDefault();
        try {
          const response = await register(Register).unwrap();
          console.log(response);
          if (response?.token) {
            setTimeout(() => {
              dispatch(resetUser());
            }, 2000);
            response.message && toast.success(response.message);
            navigate('/');
          }
        } catch (error) {
          console.log(error);
          if (error?.data?.details) {
            toast.error('fill all required fields before submit');
          } else {
            error.data.message && toast.error(error.data.message);
          }
        }

      },[])
  console.log(error);
   
    return (
   
      <div className="h-screen md:flex ">
      
      <div
     
          className="-z-10 relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
              <h1 className="text-white font-bold text-4xl font-sans">JobBee</h1>
              <p className="text-white mt-1">Create Your Acount </p>
              <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <form className="flex md:w-1/2 justify-center py-5 items-center bg-white" onSubmit={HandleRegister}>
      
          <div className="bg-white  max-md:w-90 ">
          <span
          className="inline-flex items-center justify-center rounded-md bg-green-100 px-1  text-green-700">
           <p className="whitespace-nowrap text-xs dark:bg-green-400">default role will candidate</p>
        </span>
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Dear!</h1>
              <p className="text-sm font-normal text-gray-600 mb-3">Welcome here</p>
             
              <div className={`flex items-center border-2 py-2 px-3 rounded-md mb-3`}>
              <img className="h-5" src={User} alt="user" />
                  <input value={fullname} onChange={HandleUser} className="pl-2 w-full outline-none border-none" type="text" name="fullname"  placeholder="Full name" />
        </div>
      
        {
          error && error.data && error.data.details && error.data.details?.fullname && ( <div className="flex justify-start my-1"><span className="text-xs text-red-600">{error.data.details?.fullname}</span></div>)
         }
                  <div className={`flex items-center border-2 py-2 px-3 rounded-md mb-3 `}>
                  <img className="h-5" src={Usernameicon} alt="username" />
                      <input onChange={HandleUser}  value={username} className="pl-2  w-full outline-none border-none" type="text" name="username"  placeholder="Username" />
                      </div>
                    {
          error && error.data && error.data.details && error.data.details?.username && ( <div className="flex justify-start my-1"><span className="text-xs text-red-600">{error.data.details?.username}</span></div>)
         }
             
                      <div className={`flex items-center  border-2 py-2 px-3 rounded-md mb-3 `}>
                  <img className="h-5" src={emailicon} alt="username" />
                     
                          <input  onChange={HandleUser}  value={email} className="pl-2  w-full outline-none border-none" type="email" name="email"  placeholder="Email Address" />
        </div>
      {
          error && error.data && error.data.details && error.data.details?.email && ( <div className="flex justify-start my-1"><span className="text-xs text-red-600">{error.data.details?.email}</span></div>)
         }
    
             
                          <div className={`flex items-center relative border-2 py-2 px-3 rounded-md mb-3 `}>
                         <img className="h-5" src={lock} alt="password" />
                        {
                          Showpassword ?
                          <BiHide onClick={()=>{setShowpassword(!Showpassword)}}  size={20} className=" right-3 absolute cursor-pointer" />
                          :
                          <BiShow onClick={()=>{setShowpassword(!Showpassword)}}  size={20} className=" right-3 absolute cursor-pointer" />
                        }
                               <input  onChange={HandleUser}  value={password} className="pl-2  w-full outline-none border-none" type={Showpassword ?"text":"password"} name="password"  placeholder="Password" />
                          
                               </div>
                               {
                                error && error.data && error.data.details && error.data.details?.password && ( <div className="flex justify-start my-1"><span className="text-xs text-red-600">{error.data.details?.password}</span></div>)
                               }
     
        
        <div className=" gap-y-3 flex max-sm:!w-full flex-wrap gap-x-1 items-center mt-3 justify-between">
        <label className="text-[#592ec2]" htmlFor="Isorg ">Register acount for: </label>
        <select  name="Isorg" onChange={HandleUser} className="max-sm:!w-full  border border-gray-400 rounded-md text-gray-600 h-10 px-3   focus:outline-none ">
          <option className=" text-sm rounded-md" value="">Select role</option>
          <option  className=" text-sm rounded-md" value='candidate'>candidate</option>
          <option  className=" text-sm rounded-md" value='organization'>organization</option>
        </select>
      </div>          <button onClick={HandleRegister} type="submit" disabled={isLoading} className="block w-full bg-indigo-500 hover:bg-indigo-600 mt-5 py-2 rounded-md text-white font-medium mb-2">{isLoading ?'sending..':'Register'}</button>
                            <div className="flex justify-between mt-2">
                            <span onClick={()=>{navigate('/forgetpassowrd')}} className="text-sm underline  text-blue-600 cursor-pointer">have an acount  ?</span>
                            <span onClick={()=>{navigate('/login')}} className="text-sm  underline  text-blue-600 cursor-pointer">login here</span>
                            </div>
          </div>
   
      </form>  
  </div>
      
      
      
      
      
      
      
    )
  }
  
  export default Register