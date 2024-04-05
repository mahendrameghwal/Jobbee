import { Link } from "react-router-dom";
import { useGetJobsQuery } from "../../app/api/JobApi"
import FIndJobCard from "../components/FIndJob.card"
import Jobcategory from "../data/JobCategory"

const FindJobs = () => {
const {data, error, isLoading,isError ,isSuccess} = useGetJobsQuery();
console.log(data);


    return(
<section>
<div className="flex  bg-slate-900 items-center bg-cover bg-bottom p-8 md:py-32 md:px-16">
<form className=" bg-slate-700 bg-smoke-dark max-md:p-2 p-6  rounded-md w-full shadow-lg"> 
  <h1 className=" capitalize  text-2xl md:text-3xl tracking-wider text-center font-medium text-white mb-8">Find your dream Jobs</h1>
  <div className=" flex flex-wrap items-end -mx-3">
    <div className="w-full px-3 mb-6">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">Job title</label>
      <input className="block w-full max-md:py-1.5 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-password" type="search" placeholder="Job title"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-city">locaion</label>
      <input className="block w-full max-md:py-1.5 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="text" placeholder="Job location"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-state">
     industry
    </label>
      <div className="relative">
        <select className="block max-md:py-1.5 w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-2.5 px-1  rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-state">
        <option>select a category</option>
        {
            Jobcategory ? 
            Jobcategory.map((catgory)=>(
                <option value={catgory.name && catgory.name.toLocaleLowerCase()} key={catgory.id}>{catgory.name}</option>
                )): <option>select a category</option>
            }
     <option>all</option>
      </select>
        
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 md:mb-0">
    <button className="relative w-full p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
    <span className="w-full h-full bg-gradient-to-br from-[#0571ff] via-[#5487ff] to-[#00aaff] group-hover:from-[#3375e7] group-hover:via-[#3186f5] group-hover:to-[#3545d8] absolute"></span>
    <span className="relative w-full px-6 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
    <span className="relative capitalize tracking-widest font-medium text-sm text-white">search Job</span>
    </span>
    </button>
    </div>

    
  </div>

</form>
</div>

{isLoading && <div className="min-h-screen flex justify-center items-center max-h-full ">
  
  <div className="flex flex-row gap-2 items-center justify-center">
<div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
<div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
<div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
</div>
  </div>}

  {
    isError  && error.data && error.data.message &&
    (
      <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center flex flex-col">
        <h1 className="bg-transparent uppercase text-gray-700 ">{error.data.message}</h1>
        <Link  to='/' title="Go to home"
        className="bg-transparent uppercase m-2 text-gray-700  rounded "
        > 
    
        <button
      className="flex capitalize gap-x-1 items-center px-4 py-2 bg-blue-600 transition ease-in-out delay-75 hover:bg-blue-700 text-white text-sm font-medium rounded-md ">
      <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 22L2 22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M4 22V9.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 9.5V13.5M20 22V17.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke="#ffffff" strokeWidth="1.5"></path> </g></svg>
    
      take me Home
    </button>
    
        </Link>
      </div>
    </div>
    )
  
  }


{
  error && error.status && error.status ==='FETCH_ERROR' &&(
  <div className="select-none company-job-div flex justify-center items-center">
         <div className="flex items-center mx-4">
         <span className="ml-2  text-gray-500 text-xl">Failed to fetch data</span>
       </div>
         </div>
  )
}

{
  isSuccess   &&
  (
    <FIndJobCard data={data} error={error} isError={isError} isSuccess={isSuccess}/>
  )

}

</section>



   )
}

export default FindJobs 