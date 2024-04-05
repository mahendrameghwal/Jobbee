
import Icons from "../../assets/icons/Icons"
import useStickyHeader from "../../../hooks/Usesticky";
import KeySkillsPopup from "./components/Popup/KeySkillsPopup";
// import EmploymentPopup from "./components/Popup/EmploymentPopup";
import LanguagePopup from "./components/Popup/LanguagePopup";
// import BasicDetailPopup from "./components/Popup/BasicDetailPopup";
// import SummaryPopup from "./components/Popup/SummaryPopup";
import { useSingleCandidateQuery } from "../../../app/api/CandidateApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Fragment, useCallback } from "react";
import { format, formatDistanceToNow } from 'date-fns';


const UpdateProfile = () => {


  const {gendericon,clockicon,download,edit,emailicon,job,location,period,phoneicon,verified1}=Icons;
  const {id}=useParams()
const navigate = useNavigate()
const {isError,data,isSuccess,error,isLoading}= useSingleCandidateQuery(id)


const isSticky= useStickyHeader()
if(isLoading){
  return(
    <div className="min-h-screen flex justify-center items-center max-h-full ">
    <KeySkillsPopup/>
    <div className="flex flex-row gap-2 items-center justify-center">
    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
<div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
<div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
</div>
</div>
)
}
if(isError){
  error && error.data && error.data.message 
  return (
    <div className="min-h-screen flex items-center justify-center ">
    <div className="text-center justify-center flex flex-col">
    <h1 className="bg-transparent uppercase text-gray-700 ">{error.data.message}</h1>
    <Link  to='/' title="Go to home" className="bg-transparent uppercase m-2 text-gray-700  rounded "  > 
  
      </Link>
      </div>
      </div>
  )
}
const {project,appliedJobs,email,avtar,empstatus,fullname,phone,gender,noticeperiod,city,state,social,createdAt, country,education,summary,skills,employment}= data ; 

console.log(data);
return (
  <div className="min-h-screen relative  bg-gray-400 bg-opacity-10 max-h-full p-2">
  <LanguagePopup/>
  <div className="w-3/4 max-md:w-full mx-auto mt-6  max-md:mt-2   p-2  ">
    {/* basic information */}
    <div className="rounded-2xl relative w-full shadow-md mb-5 bg-white px-4 py-2">
    {
      empstatus && (
        <span className="inline-flex absolute top-1 max-md:top-0.5 max-md:left-0.5  left-1 items-center tracking-wider font-medium border justify-center rounded-md bg-emerald-100 px-2.5 py-0.5 text-emerald-800">
    <p className="whitespace-nowrap text-sm">{empstatus}</p>
</span>
      )
    }
    <section className="flex max-md:pt-6 max-md:flex-col gap-x-4 max-lg:gap-x-1">
   {
    avtar && (
      <figure className="w-1/4 select-none  max-md:w-full max-md:justify-start flex justify-center items-center">
      <img  className="h-32 w-32 max-md:h-24 max-md:w-24  drop-shadow-md rounded-full" src={avtar} alt="" />
      </figure>
    )
   }
    <section className="w-3/4   max-md:w-full max-md:my-2">
    <div className="flex  items-center justify-end">
    <img className="h-4 max-md:absolute max-md:top-3 max-md:right-3 cursor-pointer max-lg:my-0 my-2" src={edit} alt="" />    
    </div>
    <div className="flex  flex-col w-full">
  {
    fullname && (
      <p className=" text-xl max-md:text-lg font-semibold tracking-wide">{fullname}</p>
    )
  }
    
  {
    education && education.length > 0 && (
      education.map(({institute, _id})=><span key={_id} className="text-base font-medium text-gray-600">{institute}  <span className="!text-sm !font-medium !text-gray-400">{country}</span></span>)
    )
  }
 

    <div className=" w-full flex my-5 border-t border-t-gray-300 max-lg:flex-col  max-md:my-3 drop-shadow-md  p-2 "> 
    <section className="px-2 max-md:px-0 max-md:w-full w-1/2  "> 
   <div className="flex-col items-center">
   <span className="flex w-full  flex-wrap text-sm my-2 max-lg:my-1.5 items-center gap-x-2"><img className="h-5 select-none" src={location} alt="icon" />
   {
    city && (<span>{city}</span>)
   }
   {
    state && (<span>{state}</span>)
   }
   {
    country && (<span>({country})</span>)
   }
   </span>
   <span className="flex text-sm my-2 max-lg:my-1.5 items-center gap-x-2"><img className="h-5 select-none" src={job} alt="icon" /><p>0 year 6 Months</p></span>
   <span className="flex text-sm my-2 max-lg:my-1.5 items-center gap-x-2"><img className="h-5 select-none" src={gendericon} alt="icon" />{gender}</span>
   
   </div>
    </section>
    <section className="border-l max-lg:border-none border-l-slate-300  w-1/2 max-md:w-full "> 
   <div className="flex-col items-center"></div>
   {
    phone && (
      <span className="flex  text-sm my-2 items-center gap-x-2">
   <img className="h-5 select-none" src={phoneicon} alt="icon" />
   <p>{phone}</p>
   <img className="h-3 select-none" src={verified1} alt="icon" />
   </span>
    )
   }
  {
    email && (
      <span className="flex  text-sm my-2 items-center gap-x-2">
      <img className="h-5 select-none" src={emailicon} alt="icon" />
      <p>{email}</p>
      <img className="h-3 select-none" src={verified1} alt="icon" />
      </span>
    )
  }
   {
    noticeperiod && (
      <span className="flex text-sm my-2 items-center gap-x-2">
   <img className="h-5 select-none" src={period} alt="icon" />
   <p>{noticeperiod}</p>
   </span>
    )
   }
   {
    createdAt && (
      <span className="flex text-sm my-2 items-center gap-x-2">
   <img className="h-5 select-none" src={clockicon} alt="icon" />
   <p>Joined {formatDistanceToNow(new Date(createdAt))} ago</p>
   </span>
    )
   }
    </section>
    </div>
    </div>
</section>
    
    </section>
    </div>
    {/* Sidebar */}
  <div className="" >
 <div className="flex gap-x-3 max-md:gap-0">
 <aside className="">
 <div
 className={ 
  isSticky ? " sidebar rounded-2xl sticky top-24 p-2 w-[300px]  max-xl:w-[250px]  max-lg:hidden  max-md:hidden  overflow-y-auto text-center shadow-md  bg-white":"rounded-2xl max-md:hidden   w-[300px]  max-xl:w-[250px]   max-lg:hidden    shadow-md bg-white p-2  overflow-y-auto text-center"
 }

>
 <div className=" text-xl">
   <div className="p-2.5 mt-1 flex items-center">

     <h1 className="font-medium  text-[15px] ml-3">Quick Links</h1>
    
   </div>
   <div className="border border-gray-300"></div>
 
 </div>
 
 <div
   className="p-2 mt-3 flex items-center rounded-md px-4 duration-200 cursor-pointer hover:bg-gray-100">
   <span className="text-[15px]  font-normal">Resume</span>
 </div>
 <div
   className="p-2 mt-3 flex items-center rounded-md px-4 duration-200 cursor-pointer hover:bg-gray-100">
   <span className="text-[15px]  font-normal">Profile Headline</span>
 </div>
 <div
   className="p-2 mt-3 flex items-center rounded-md px-4 duration-200 cursor-pointer hover:bg-gray-100">
   <span className="text-[15px]  font-normal">Skills</span>
 </div>
 <div
   className="p-2 mt-3 flex items-center rounded-md px-4 duration-200 cursor-pointer hover:bg-gray-100">
   <span className="text-[15px]  font-normal">Employment</span>
 </div>
 <div
 className="p-2 mt-3 flex items-center rounded-md px-4 duration-200 cursor-pointer hover:bg-gray-100">
 <span className="text-[15px]  font-normal">Project</span>
</div>
<div
className="p-2 mt-3 flex items-center rounded-md px-4 duration-200 cursor-pointer hover:bg-gray-100">
<span className="text-[15px]  font-normal">Profile</span>
</div>
<div
className="p-2 mt-3 flex items-center rounded-md px-4 duration-200 cursor-pointer hover:bg-gray-100">
<span className="text-[15px]  font-normal">Certification</span>
</div>

 <div
   className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-200 cursor-pointer hover:bg-gray-100 "
 >
   <i className="bi bi-box-arrow-in-right"></i>
   <span className="text-[15px]  font-normal">Logout</span>
 </div>
</div>
 </aside>
 <section className="min-h-screen rounded-2xl  w-full shadow-md  bg-white  px-2 py-2">
 <div className="w-full mb-3 bg-grey-lighter">
 <p className="text-lg font-medium   max-md:text-base ">Resume</p>
 <label className="flex flex-col items-center  py-6 hover:bg-gray-50 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer ">
     <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
         <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
     </svg>
     <span className="mt-2 text-base leading-normal">Select a file</span>
     <input accept=".pdf" type='file' className="hidden" />
 </label>
</div>
{/* summary */}
<div className="w-full my-5 bg-grey-lighter">
 <div className="flex items-center gap-x-2">
 <p className="text-lg  max-md:text-base my-1 font-medium  ">Quick summary</p>
 <img className="h-4 cursor-pointer" src={edit} alt="edit summary" />
 </div>
 {
  summary && (
   <Fragment>
   <label htmlFor="summary">
   </label>
   <div  className="flex  items-center  text-sm p-3 bg-white text-gray-700 rounded-lg shadow-lg tracking-wide  border border-blue cursor-pointer ">
   <p>{summary}</p>
   </div>
   </Fragment>
  )
 }
</div>

{/* key skills */}
<div className="w-full my-5 bg-grey-lighter">
 <div className="flex items-center gap-x-2">
 <p className="text-lg  max-md:text-base  my-1 font-medium  ">Skills</p>
 <img className="h-4 cursor-pointer" src={edit} alt="edit summary" />
 </div>
 <label htmlFor="summary">
 </label>
 <div  className="flex flex-wrap gap-3 items-center  text-sm p-3 bg-white text-gray-700 rounded-lg shadow-lg tracking-wider  border border-blue  ">
 {
  skills && skills.length>0 && (
 skills.map(({name,skilltype,_id})=><span key={_id} className="cursor-pointer bg-gray-200 border border-gray-300 px-5 py-0.5 font-medium text-sm max-md:text-sm uppercase rounded-md">{name}</span>  )
 
  )
 }
 </div>
</div>
{/* employment */}

<div className="w-full my-5 bg-grey-lighter">
{
  employment && employment.length>0 && (
    
      employment.map(({orgname,position,startdate,enddate,emptype , })=>{
        return(
        <Fragment>
        <div className="flex  items-center justify-between">
   <div className="flex items-center gap-x-2 ">
   <p className="text-lg  max-md:text-base   my-1 font-medium">Employment</p>
   </div>
   <p className="text-blue-700 capitalize  cursop underline">add employment</p>
    </div>
    <label htmlFor="summary">
    </label>
    <div  className="flex mb-2 flex-wrap gap-3 items-center  text-sm p-3 bg-white text-gray-700 rounded-lg shadow-lg tracking-wider  border border-blue  ">
   <div className="flex-col ">
   <section className="flex items-center gap-x-4 cursor-pointer">
   {
    position && (
      <p className="text-base font-normal text-black">{position}</p>
    )
   }
   <img className="h-3" src={edit} alt="edit" />
   </section>
  {
    orgname && ( <p className="text-sm text-gray-900">{orgname}</p>)
  }
  <p className="text-gray-400">{emptype} | {
    startdate && (format(new Date(startdate), 'MMMM yyyy'))
  } to {
    enddate && (format(new Date(enddate), 'MMMM yyyy'))
  } </p>
   </div>
    </div>
    </Fragment>
      )
    })
   
   
    
  )
}

</div>

<div className="w-full   my-5 bg-grey-lighter">
 <div className="flex items-center justify-between">
<div className="flex items-center gap-x-2 ">
<label htmlFor="eduacation" className="text-lg  max-md:text-base tracking-wider  my-1 font-medium">Projects</label>
</div>
<p className="text-blue-700 capitalize  cursop underline">add </p>
 </div>


{

  project && project.length > 0 ?(
    <div className="flex max-md:flex-col flex-wrap w-full gap-x-2">

{
  project.map(({title,status,description,githublink,livelink,projectrole,role_desc,startdate,enddate,client,})=>
  <div className="py-4 px-2  max-md:w-full mt-2 w-full  bg-white border shadow-slate-300 rounded-lg shadow-lg">

  <aside className="flex justify-between">
  <span className="title font-semibold text-blue-600 capitalize">project title</span>
  <span className="title font-medium text-sm text-blue-600 flex gap-x-1"><span>
  {(format(new Date(startdate), 'MMM yyyy'))}
  </span> to <span>
  {(format(new Date(enddate), 'MMM yyyy'))}
  </span> </span>
  </aside>
  <div className="flex justify-between items-center flex-wrap mb-1 gap-x-3 py-1">
  <span className="description font-medium text-sm text-gray-600">Type : Client Project</span>

  <div className="flex ">
  {
    status && (
      <span>status :</span>
    )
  }
  {
    status && status.toLowerCase() === 'in progress' && (
      <span className="text-sm bg-green-100 text-green-800 font-medium  px-1  rounded dark:bg-green-900 dark:text-green-300">{status}</span>
    )
  }
  {
    status && status.toLowerCase() === 'finished' && (
      <span className="text-sm bg-green-100 text-green-800 font-medium  px-1  rounded dark:bg-green-900 dark:text-green-300">{status}</span>
    )
  }
  {
    !status && (
      <span>status :</span>
    )
  }
  {
    !status && (
      <span className="text-sm bg-green-100 text-green-800 font-medium  px-1  rounded dark:bg-green-900 dark:text-green-300">not provided</span>
    )
  }
  </div>
  
  </div>
    <p className="description text-sm text-gray-600">We use cookies to ensure that we give you the best experience on our website .</p>
   {
      project && 
<div className="mt-1">
<span className="text-sm font-medium">Project Role 🎭</span>
<p className="description text-sm text-gray-600">We use cookies to ensure that we give you the best experience on our website .</p>

</div>
    }

    {
      project && 
<div className="mt-1">
<span className="text-sm font-medium">What i worked ? 👷🏼</span>
<p className="description text-sm text-gray-600">We use cookies to ensure that we give you the best experience on our website .</p>

</div>
    }
    <div className="flex gap-x-3 mt-3">
    <Link className="text-sm font-normal text-white hover:text-black border border-blue-500 bg-blue-500 rounded focus:outline-none px-4 py-1 capitalize transition-colors tracking-widest duration-150 ease-in-out hover:bg-transparent">live</Link>
    <Link className="text-sm font-normal text-white hover:text-black border border-blue-500 bg-blue-500 rounded focus:outline-none px-4 py-1 capitalize transition-colors tracking-widest duration-150 ease-in-out hover:bg-transparent">Source</Link>
    </div>
</div>
  )
}



</div>

  )
  : 
 ( <div className="flex justify-center ">
 <p className="text-gray-400">You Have not Posted any Project</p>
 </div>)


 
}





</div>

{/* education */}

<div className="w-full my-5 bg-grey-lighter">
{
  education && education.length>0 && (
    
      education.map(({startdate,enddate,degree,fieldofstudy,percentage,institute,qualification})=>{
        return(
        <Fragment>
        <div className="flex  items-center justify-between">
   <div className="flex items-center gap-x-2 ">
   <p className="text-lg  max-md:text-base   my-1 font-medium">Education</p>
   </div>
   <p className="text-blue-700 capitalize  cursop underline">add Education</p>
    </div>
    <label htmlFor="summary">
    </label>
    <div  className="flex mb-2 flex-wrap gap-3 items-center  text-sm p-3 bg-white text-gray-700 rounded-lg shadow-lg tracking-wider  border border-blue  ">
   <div className="flex-col ">
   <section className="flex items-center gap-x-4 cursor-pointer">
   {
    institute && (
      <p className="text-base font-normal text-black">{institute} | {degree && (<span>{degree}</span>)}</p>
    )
   }
   <img className="h-3" src={edit} alt="edit" />
   </section>
 <span className="flex gap-x-2">
 {
  fieldofstudy && (<span className="text-sm text-gray-900 flex gap-x-2"><span>field of study : </span>{fieldofstudy}</span>) 
 }
 |
{
   percentage && ( <span className="text-sm text-gray-900 flex gap-x-2"><span>: </span>{percentage}</span>)   
}
 </span>
 
  <p className="text-gray-400">{qualification} | {
    startdate && (format(new Date(startdate), 'MMMM yyyy'))
  } to {
    enddate && (format(new Date(enddate), 'MMMM yyyy'))
  } </p>
   </div>
    </div>
    </Fragment>
      )
    })
   
   
    
  )
}


</div>

{/* social */}
<div className="w-full my-5 bg-grey-lighter">
 <div className="flex items-center justify-between">
<div className="flex items-center gap-x-2 ">
<label htmlFor="eduacation" className="text-lg  max-md:text-base  my-1 font-medium">Social Links</label>
</div>
<p className="text-blue-700 capitalize  cursop underline">add </p>
 </div>

 <div  className="flex flex-wrap gap-3 items-center  text-sm p-3 bg-white text-gray-700 rounded-lg shadow-lg tracking-wider  border border-blue  ">
<div className="flex-col ">

{
  social && social.length> 0 && (
 social.map(({name,link,_id})=>
 <div className="flex flex-wrap gap-x-3 ">


 
 {
  link && <Link to={link} className="flex  flex-wrap">
  <button className="inline-block appearance-none bg-gray-50 border border-gray-200 rounded-md shadow-sm text-blue-700   px-2 cursor-pointer text-base font-semibold leading-6 transition duration-200 ease-in-out select-none hover:bg-gray-100 focus:outline-none active:bg-gray-200">{name}</button>

</Link>
 } 

</div>
 )

  )
}
</div>

 </div>

</div>



<div className="w-full my-5 bg-grey-lighter">
 <div className="flex items-center justify-between">
<div className="flex items-center gap-x-2 ">
<label htmlFor="eduacation" className="text-lg  max-md:text-base  my-1 font-medium">Skills </label>
</div>
<p className="text-blue-700 capitalize  cursop underline">add </p>
 </div>

 <div  className="flex flex-wrap gap-3 items-center  text-sm p-3 bg-white text-gray-700 rounded-lg shadow-lg tracking-wider  border border-blue  ">
<div className="flex-col ">

{
skills && skills.length> 0 && (
 skills.map(({skilltype,name,_id})=>
 <div className="flex-col flex 
 appearance-none bg-gray-50 border border-gray-200 rounded-md shadow-sm text-blue-700   px-2 cursor-pointer text-base font-semibold leading-6 transition duration-200 ease-in-out select-none hover:bg-gray-100 focus:outline-none active:bg-gray-200
 
 ">
 <section className="flex items-center gap-x-4 cursor-pointer">
   <p className="text-base font-normal text-black">{skilltype}</p>
   <img className="h-3" src={edit} alt="edit" />
 </section>
 {
  name && <div className="flex flex-wrap">
  <p className="text-sm cursor-pointer text-blue-600 capitalize break-all">{name}</p>
</div>
 }
</div>
 )

  )
}
</div>

 </div>

</div>

{/*language */}


 </section>
 </div>
  
  
  </div>

    
    </div>
    
    
    
    </div>
  )
}

export default UpdateProfile