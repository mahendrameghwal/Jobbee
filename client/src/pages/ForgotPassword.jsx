import { Link } from "react-router-dom"
import ForgotPasswordImage from "../assets/PublicImage";
import {useSelector, useDispatch } from "react-redux";
import { Setemail , ResetEmail} from "../../app/slices/Forgotpassword";
import { FcVoicePresentation } from "react-icons/fc";
import axios from "axios";
import {  toast } from "react-hot-toast";
import { useState } from "react";

const ForgotPassword = () => {
  const forgotemail = useSelector(state=>state.forgot.User);
  const dispatch =useDispatch();
  const [loading, setLoading] = useState(false);

  console.log(forgotemail);
  const HandleEmail = (e) => {
    const { name, value } = e.target;
    dispatch(Setemail({ [name]: value }));
    
  };
  const Handleforgotpassword =async(e)=>{
    e.preventDefault();
    setLoading(true);
    try {

    const response = await axios.post('http://localhost:8800/api/user/forgotpassword', forgotemail, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.status===200) {
      toast.success(response.data.message);
      dispatch(ResetEmail())
    }
  } catch (error) {
    console.log(error);
    if(error && error.response && error.response.data && error.response.data.message){
      toast.error(error.response.data.message)
    }
  }
  finally {
    setLoading(false); 
  }
  
}



  return (
  <div className="flex gap-x-4 items-center">
  
  <div className="w-1/2 max-md:hidden">
  <img className="w-fit" src={ForgotPasswordImage} alt="" />
  
  </div>
  <div className="w-1/2 max-md:w-full">
  <main role="main" className=" min-h-screen max-h-full max-w-lg mx-auto max-md:p-3">
   <div className="mt-40 max-md:mt-32 bg-gray-200  rounded-sm shadow-xl dark:bg-gray-200 dark:border-gray-700">
   <form onSubmit={Handleforgotpassword}>
     <div className="p-4 max-md:p-3 ">
       <div className="text-center gap-x-2 ">
         <h1 className="block text-2xl font-bold text-gray-800 dark:text-gray-600">Forgot password</h1>
         <Link to="/login">
         <button className="text-blue-600 decoration-2 underline font-medium">
         Login here
       </button>
         </Link>
       </div>
   
       <div className="mt-6">
           <div className="grid gap-y-4">
             <div>
             <label htmlFor='email' className="block text-sm font-normal  mb-1">Email address</label>
             <div className="relative">
                 <input required value={forgotemail.email} onChange={HandleEmail} placeholder="Your Registered email" type="email"  name="email" className=" outline-none py-2 px-3 block w-full border-2 border-gray-100 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"  aria-describedby="email-error"/>
               </div>
               <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
             </div>
             <button
             onClick={Handleforgotpassword}
             type="submit"
             className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-normal tracking-wider bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 transition-all text-sm "
             disabled={loading} 
           >
             {loading ? (
               <> Sending... <FcVoicePresentation size={20} /></>
             ) : (
               <>Send Activation Link <FcVoicePresentation size={20} /></>
             )}
           </button>         
           </div>
         
       </div>
       </div>
       </form>
       </div>
       
       
       </main>
       
       </div>
  
  
  </div>
  )
}

export default ForgotPassword