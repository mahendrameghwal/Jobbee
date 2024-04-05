import {MdOutlineComputer} from "react-icons/md"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import { useState } from "react";
const ExploreCard = () => {
const [Ishovered, setIshovered]= useState(false);

const arr =[1,2,3,4,5,6,7,8];
  return (
    <div className="">
   <div  className="flex  flex-wrap gap-4 my-16 max-md:my-12 max-sm:justify-center justify-between">
   {
    arr.map((item,i)=>(
        <div onMouseEnter={()=>{setIshovered(true)}} onMouseLeave={()=>{setIshovered(false)}} key={i} className=" hover:shadow-md  border striped-border  bg-gray-50   w-1/5 max-sm:w-full  max-lg:w-2/5   p-5  rounded">
        
             <MdOutlineComputer className="text-black" size={32}/>
        
        <section className="flex flex-col">
        <p className="font-bold my-3  tracking-wider">Technology</p>
      <div className="flex items-center gap-x-3 text-gray-500 hover:underline cursor-pointer">show more jobs <HiOutlineArrowNarrowRight/> </div>
        
        </section>
          
        </div>
    ))
}

   
   </div>
    
    
    </div>
  )
}

export default ExploreCard