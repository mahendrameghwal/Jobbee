import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import randomcolor from "../data/Randomcolor";
import { useEffect, useState } from "react";

const FIndJobCard = ({data,error,isError,isSuccess}) => {
  const navigate = useNavigate()
  
  const [RandomColor,setRandomColor]= useState(randomcolor)

  useEffect(()=>{
setRandomColor(RandomColor)
  },[RandomColor])


if(data && data.length > 0 ){
  return (

     isSuccess &&
       <div className="container-lg mx-auto max-md:w-full ">
        <motion.div 
        initial={{ opacity: 0, scale:1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex transition-colors flex-wrap gap-x-2 justify-around my-8 max-md:my-12 ">
          {
          
            data.map(({title,location,skills, jobId, orgname,_id})=>(
              <div key={uuidv4()}
              className="w-1/5 max-lg:w-1/3      max-sm:w-11/12 max-md:w-2/5 hover:shadow-md   
              border-2 striped-border  max-md:mx-auto bg-gray-50  relative my-1 p-0  rounded-md "
            >
            {jobId && (
              <p className="font-normal absolute top-1 !text-gray-400 right-1 z-30 text-xs capitalize max-md:text-sm">
                {jobId}
              </p>
            )}
              <section className="flex flex-row max-md:flex-col py-2  max-md:items-start  justify-between">
                <div className="px-2  w-full max-md:w-full   max-md:mx-0">
                {title && (
                  <p className="font-medium  text-lg capitalize max-md:text-sm">
                  {title}
                  </p>
                  )}
                  {orgname && (
                    <p className="font-normal  text-sm capitalize max-md:text-sm">
                      {orgname.orgname}
                    </p>
                  )}
                  <span className="font-medium max-md:font-normal text-sm capitalize text-gray-500">
                    
                  {location && (
                    <span>{location}</span>
                  )}</span>
                  <br/>
                  <div className="flex flex-wrap mt-1 items-center justify-start gap-x-3 ">
                  {skills.length > 0 && (
                    skills.map((skill, index) => {
                      // Get a random index 
                      const randomIndex = Math.floor(Math.random() *  RandomColor.length);
                      // Get the random class 
                      const randomClass = RandomColor[randomIndex];
                      return (
                        <span key={index} className={`${randomClass} capitalize border mt-1 text-xs font-medium px-3 py-1 rounded-md`}>
                          {skill}
                        </span>
                      );
                    })
                  )}
                 
                    
                  </div>
                  <button
                    onClick={() => {
                      navigate(`job-description/${_id}`);
                    }}
                    className=" mt-3 rounded-sm bg-custom-blue transition-colors delay-75 hover:text-gray-50  !text-sm font-base text-white px-5 py-1.5"
                  >
                    About Job
                  </button>
                </div>
              </section>
            </div>
            ))
          }
        </motion.div>


      
        </div>
        );
      } else{
        return <div className="select-none company-job-div flex justify-center items-center">
        <div className="flex items-center mx-4">
        <span className="ml-2  text-gray-500 text-xl">Sorry, no Jobs found Please try again.</span>
      </div>
        </div>;
      }
};

export default FIndJobCard;
