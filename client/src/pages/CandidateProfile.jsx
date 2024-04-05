import {HiOutlineChevronRight} from "react-icons/hi"
import {PiSuitcaseSimple}from "react-icons/pi";
import {HiOutlineBuildingOffice2} from "react-icons/hi2"
import {BiHome} from "react-icons/bi"
import RecommendedJobs from "../components/RecommendedJobs";
import {LuBookOpen} from "react-icons/lu"
import TopCompnies from "../components/TopCompnies";
import Banner from "../assets/banner.gif"
import { useSingleCandidateQuery } from "../../app/api/CandidateApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import AppliedJobs from "../components/AppliedJobs";


const CandidateProfile = () => {
   const {id}=useParams()
const navigate = useNavigate()
const {isError,data,isSuccess,error,isLoading}= useSingleCandidateQuery(id)
const {avtar,fullname,gender,noticeperiod,empstatus,currentempstatus,social,email,phone, city, state, country,education,resume,summary,skills,employment,project,appliedJobs,TotalAppliedJob, _id}= data || {}; 

 if (isLoading) {
   return  <div className="spinner min-h-screen absolute top-1/2 left-1/2  transform -translate-x-1/2 "></div>
 }

 if (isError) {
   return error.data && error.data.message && <div className="flex items-center justify-center min-h-screen max-h-full ">
   <div className="text-center rounded-md  max-md:w-11/12  p-4">
   <div className="inline-flex rounded-full bg-red-100 p-4">
   <div className="rounded-full stroke-red-600 bg-red-200 ">
     <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor" />
       <path d="M12 16C12.5523 16 13 15.5523 13 15V11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V15C11 15.5523 11.4477 16 12 16Z" fill="currentColor" />
       <path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" fill="currentColor" />
     </svg>
   </div>
 </div>
     <h2 className="mt-5 text-2xl font-bold text-gray-800 md:text-2xl">{error.data.message }</h2>
    
     <p className="text-gray-600 mt-3 md:mt-5 md:text-lg">We're sorry, but an error has occurred. Please try again later.</p>
     <button onClick={()=>{navigate(-1)}} className="inline-flex items-center px-4 py-2 mt-6 font-semibold text-white transition-colors duration-200 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
       Go Back
 </button>
   </div>
 </div>;
 }

  return (
   <main className=" bg-gray-400 bg-opacity-10 pt-8 ">
   <section role="main" className="w-full max-h-full min-h-screen">
   <div className="flex justify-evenly max-md:flex-col  px-2">
   <section className="max-h-screen  bg-white w-1/4 max-md:w-full rounded-md shadow-md">
<div className="w-90  max-md:my-2 my-5 mx-auto ">

<div className="flex  flex-col justify-center">
{
   avtar && (
      <div className="flex justify-center">
<img className="h-28 max-md:h-24 max-md:drop-shadow-md drop-shadow-lg rounded-full" src={avtar} alt="user" />
</div>
   )
}
{
   fullname && (<div className="flex mt-2 max-md:mt-1 justify-center">
   <span className="text-xl max-md:text-lg font-sans text-gray-800 font-medium ">Mahendra Kumar</span>
   </div>)
}
<div className="flex  justify-center">
<span className="text-sm text-stone-500 font-medium "> Rajasthan technical University</span>
</div>
<div className="flex  justify-center">
<span className="text-sm  text-stone-500 font-medium ">Jaipur</span>
</div>
<div className="flex justify-center my-2">
<Link to={`/user/updateprofile/${_id}`}
  className="cursor-pointer text-center pt-1 w-40 h-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all group active:w-11 active:h-11 active:rounded-full active:duration-300 ease-in-out"
>
  
  <span className="group-active:hidden">Update profile</span>
</Link>
</div>
<div className="flex my-5  max-md:my-3  bg-blue-50 drop-shadow-md rounded-md p-2 ">

<section className="w-1/2  border-r border-gray-500 border-opacity-40">
<p className=" text-base text-center">Applied Jobs</p>
<span className="text-xl max-md:text-lg flex justify-center text-center mt-3 items-center cursor-pointer text-blue-600">{appliedJobs &&appliedJobs.length} <HiOutlineChevronRight /></span>
</section>
<section className="px-2 w-1/2 ">
<p className=" text-base  text-center">Recruiter actions</p>
<span className="text-xl  max-md:text-lg flex justify-center text-center mt-3 items-center cursor-pointer text-blue-600">16 <HiOutlineChevronRight /></span>

</section>

</div>
<button className="hover:bg-blue-50 max-md:my-0.5  flex items-center justify-center gap-x-2 border py-2 my-3 rounded-xl">My Home <BiHome size={20} /></button>
<button className="hover:bg-blue-50 max-md:my-0.5  flex items-center justify-center gap-x-2 border py-2 my-3 rounded-xl">Jobs <PiSuitcaseSimple size={20} /></button>
<button className="hover:bg-blue-50 max-md:my-0.5  flex items-center justify-center gap-x-2 border py-2 my-3 rounded-xl">compnies <HiOutlineBuildingOffice2 size={20} /></button>
<button className="hover:bg-blue-50 max-md:my-0.5  flex items-center justify-center gap-x-2 border py-2 my-3 rounded-xl">Blogs <LuBookOpen size={20} /></button>

</div>

</div>
   </section>
   <section className=" w-2/3 max-md:w-full  py-3 rounded-md ">
  
   <div className="rounded-lg shadow-sm p-2 mb-5 bg-white ">
    <AppliedJobs id={id}/>
   </div>
   <div className="rounded-lg shadow-sm p-2 mb-5 bg-white ">
   <TopCompnies/>
    </div>
    <div className="rounded-lg shadow-sm p-2 mb-5 bg-white ">
    <RecommendedJobs/>
   </div>
      <div className="rounded-lg w-full shadow-sm p-2 mb-5 bg-white "><img src={Banner} alt="" /></div>
   </section>
   </div>
   </section>
   </main>
  )
}

export default CandidateProfile