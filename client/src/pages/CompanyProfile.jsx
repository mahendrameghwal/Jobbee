
import { Link, useNavigate, useParams } from "react-router-dom";
import { formatDistanceToNow, parseISO  } from 'date-fns';
import {FaLink, FaLinkedinIn, FaUser } from "react-icons/fa"

import randomcolor from "../data/Randomcolor";
import { useDeletePersonalJobMutation, useOrgbyidQuery } from "../../app/api/OrgApi";
import { motion } from "framer-motion";
import { useState,memo,useMemo, useEffect, Fragment} from "react";
import Icons from "../assets/icons/Icons"
import { toast } from "react-hot-toast";
import { MdRemoveRedEye } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";


const CompanyProfile = memo(() => {
const {applicianticon} = Icons;
  const { id } = useParams();
  const navigate = useNavigate();
  const memoizedId = useMemo(() => id, [id]);
  const [RandomColor,setRandomColor]= useState(randomcolor);
  const {data ,isLoading,isError,error }= useOrgbyidQuery(memoizedId)
  const [deletePersonalJob] = useDeletePersonalJobMutation();

  const deleteJob = async (jobId) => {
    if(jobId){
      const response = await deletePersonalJob(jobId);
      if(response?.data){
        response && response?.data && response?.data?.message && toast.success(response?.data?.message);
      } 
      else if (response?.error && response.error?.data && response.error?.data?.message) {
          toast.error(response.error?.data?.message);
      }
    }  else{
      toast.error('something went wrong 😔');
    }
    
};
  useEffect(() => {
    const getCookie = () => {
      const cookieMatch = document.cookie.match(/(?:^|;)\s*accesstoken=([^;]+)/);
      const accessToken = cookieMatch ? cookieMatch[1] : null;
      // console.log('Access Token:', accessToken);
    };
    getCookie();
  }, [data]);
     

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

if(data){
    const { avtar, category,_id:orgid, city, state, country,website, jobs, createdAt, about, mobile, orgname, linkedin } = data;

    return (
        <div className="bg-gray-50">
        <div className=" mx-auto pt-6">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                <motion.div
                initial={{ opacity: 0, scale:1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="col-span-4 sm:col-span-3">
                    <div className="bg-white shadow rounded-lg p-2">
                       {
                        avtar && ( <div className="flex flex-col items-center">
                        <img src={avtar} className="w-32 h-32 p-2 border rounded-full mb-4 shrink-0">

                        </img>
                        {
                        orgname && (<h1 className="text-xl max-md:text-base text-blue-600 font-bold">{orgname}</h1>)
                        }
                        {
                            category && (<p className="text-gray-900 max-md:text-sm">{category}</p>)
                        }
                  
                    </div>)
                       }
                        <hr className="my-3 border-t border-gray-300"/>
                        <div className="flex flex-col mb-2">
                            <h2 className="text-blue-600 capitalize font-bold max-md:font-medium tracking-wider mb-2">Location</h2>
                            <ul className="flex gap-x-1 flex-wrap">
                                {
                                    city && (<li className="max-md:text-sm mb-1">{city}</li>)
                                }
                                {
                                    city && (<li className="max-md:text-sm mb-1">({state})</li>)
                                }
                               {
                                    country && <li className="max-md:text-sm mb-1">{country}</li>
                               }
                            </ul>
                        </div>
    
                        {
                            about && (
                                <div className="flex flex-col mb-2">
                        <h2 className="text-blue-600 capitalize font-bold max-md:font-medium tracking-wider mb-2">About Me</h2>
                        <p className="text-gray-700 max-md:text-sm">
                        {about}
                        </p>
      
                        </div>
                            )
                        }
                        {
                         mobile &&(
                            <div className="flex flex-col mb-2">
                            <h2  className="text-blue-600 capitalize font-bold max-md:font-medium tracking-wider mb-2">Phone no.</h2>
                            <p className="text-gray-700 max-md:text-sm">
                               {
                               mobile
                              }
                            </p>
          
                            </div>
                         )
                        }
                    </div>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, scale:1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="col-span-4 sm:col-span-9 ">
             
                    <div className="bg-white  relative shadow rounded-lg p-3 company-job-div">
                    <div className="flex gap-x-5 absolute bottom-1 right-1 mt-3">
                    <button title="1" className="cursor-pointer py-0.5 justify-center flex items-center  bg-blue-500 hover:bg-blue-400 active:border  rounded-sm duration-100 px-2 ">
                    <span className="text-sm text-white font-medium px-1">1</span>
                  </button>
                  <button title="1" className="cursor-pointer py-0.5 justify-center flex items-center bg-blue-500 hover:bg-blue-400 active:border  rounded-sm duration-100 px-2 ">
                  <span className="text-sm text-white  px-1">1</span>
                </button>
                    </div>
                    {
                        createdAt && (
                            <span className="select-none text-green-500 border-2 rounded-md border-green-300 px-2 py-0.5 text-sm font-sans font-medium">The account was created {formatDistanceToNow(new Date(createdAt))} ago</span>
                        )
                    }
                    
                        <h3 className="font-semibold text-left mt-3 -mb-2">
                            Follow us on :
                        </h3>
                       <div className="flex flex-wrap gap-x-5">
                       
                     {
                        linkedin && (
                        <Link to={linkedin}>
                        <div className="flex cursor-pointer justify-start items-center gap-6 my-6">
                        <FaLinkedinIn className="hover:text-blue-600" size={25}/> 
                       </div>
                        </Link>
                        )
                     }
                  {
                    website && (
                        <Link to={website.trim()}>
                        <div className="flex cursor-pointer justify-start items-center gap-6 my-6">
                        <FaLink className="hover:text-blue-600" size={25}/> 
                       </div>
                        </Link>
                    )
                  }
    
                       </div>
    
    
                       <div className="flex flex-wrap items-center my-2 justify-between">
                       <h2 className="text-xl font-bold ">Latest Jobs</h2>
                       <Link to="/createjob" className="bg-blue-600 flex items-center text-sm hover:bg-blue-700 duration-300 transition-shadow shadow-md hover:shadow-lg hover:shadow-blue-200 text-gray-100 px-4 py-1.5 gap-1 rounded-md tracking-wider capitalize">
                       create a Job
                       <svg width="16px" height="16px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fillRule="evenodd" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"> <path d="m7 1.5h-4.5c-1.1045695 0-2 .8954305-2 2v9.0003682c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5003682"></path> <path d="m14.5.46667982c.5549155.5734054.5474396 1.48588056-.0167966 2.05011677l-6.9832034 6.98320341-3 1 1-3 6.9874295-7.04563515c.5136195-.5178979 1.3296676-.55351813 1.8848509-.1045243z"></path> <path d="m12.5 2.5.953 1"></path> </g> </g></svg>
                       </Link>
                       
                       </div>
                  {
                    jobs && jobs.length > 0 && (
                      jobs.slice().reverse().map(({title,skills,createdAt,_id,city,country,},i)=>{

                      return  (
                            <motion.section key={i}
                            initial={{ opacity: 0, scale:1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="my-5 px-2 border relative shadow-md  shadow-gray-50 flex flex-row max-md:flex-col  max-md:items-start  justify-between ">
                            <div className='  max-md:px-0 mt-3  w-8/12 max-md:w-full max-md:mx-0'>
                            {
                                title && (<p className='font-bold max-md:font-medium '>{title}</p>)
                            }
                            {
                              createdAt && <span className="text-gray-400 text-sm absolute top-3 right-2">{formatDistanceToNow(parseISO(createdAt), { addSuffix: true })}</span>
                            } 
                            
                            <span className='font-medium max-md:font-normal max-md:text-sm text-gray-500'>
                             {city}, {country}
                          </span>
                            {
                            skills && skills.length>0 &&
                            (
                                <div className="flex flex-wrap items-center justify-start  gap-x-3 mt-1 ">
                                {
                                    skills.map((skill,i)=>{
                                        const randomIndex = Math.floor(Math.random() *  RandomColor.length);
                                        // Get the random class 
                                        const randomClass = RandomColor[randomIndex];
                                        return(
                                        
                                        <span key={i} className={`mb-0.5 border text-sm font-normal px-2 ${randomClass}  rounded-md`}>{skill}</span>
                                    )})
                                }
                                
                                </div>
                            )
                          }
                        <div className="flex my-3   max-sm:justify-between flex-wrap gap-x-3 items-center">
                       
                      {
                        _id && (
                          <Fragment>
                          
                          <button title="view more.." onClick={()=>{navigate(`/findjobs/job-description/${_id}`)}} type="button" disabled={isLoading} className=" inline-flex items-center px-7 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-sm">
                          <MdRemoveRedEye size={16}/>
                          </button>

                          <button title="delete this job ?" onClick={() => deleteJob(_id)} type="button" disabled={isLoading} className=" inline-flex items-center px-7 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-sm">
                          <FaRegTrashCan/>
                          </button>

                          <button  onClick={()=>{navigate(`/statistic/${_id}`)}} title="applied candidate" type="button" disabled={isLoading} className=" inline-flex items-center px-7 py-2 border border-gray-300 bg-gray-200 hover:bg-gray-300/80 text-white text-sm font-medium rounded-sm">
                        <FaUser color="#3b82f6"/>
                          </button>
                          </Fragment>
                            
                        )
                      }
                        </div> 
                          </div>
                             </motion.section>
                        )
                       })
                    )
                  }

                  {
                   jobs && jobs.length === 0 && (
                    <div className="select-none company-job-div  flex justify-center items-center">
                    <div className="flex justify-center items-center mx-4">
                    <pre className="ml-2  text-gray-500 text-xl">Sorry, no Jobs found</pre>
                  </div>
                    </div>
                   )
                  }

                    </div>
                </motion.div>
            </div>
        </div>
    </div>
      );
}
});

export default CompanyProfile;


