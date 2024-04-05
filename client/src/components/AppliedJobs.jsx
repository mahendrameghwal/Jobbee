import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {CiLocationOn} from "react-icons/ci" ;
import { Fragment, useState } from 'react';
import { useSingleCandidateQuery } from '../../app/api/CandidateApi';
import { Link, useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';


const AppliedJobs = ({id}) => {
   const {data,isLoading,error}= useSingleCandidateQuery(id) 

    const {appliedJobs}= data ;
console.log(appliedJobs);


    if(isLoading){
        return (
           <Fragment>
           <div className='flex py-10 justify-center'> 
           <pre>loading・・・</pre>
           </div>
       </Fragment>
      )
        
    }
if(!appliedJobs){
        return (
        <Fragment>
        <div className='flex py-10 justify-center'> 
        <pre className='text-red-500'>Unable to load Jobs Please try again later ⚠️</pre>
        </div>
    </Fragment>
      )
        
    }

 if(appliedJobs.length>0){
  return(
    <Fragment>
    <div className="flex  items-center  m-2 justify-between">
    <p className="text-lg tracking-wide font-semibold capitalize flex-wrap flex gap-x-2 "><span className="text-blue-500 font-semibold text-xl">Applied</span>Jobs</p>
    <p className="text-blue-500 font-medium underline cursor-pointer">View all</p>
    </div>
  
    <Carousel additionalTransfrom={1}  arrows autoPlaySpeed={6000} className="" containerClass="container"
    draggable focusOnSelect={false} infinite={true}
 keyBoardControl minimumTouchDrag={80} pauseOnHover renderArrowsWhenDisabled={false} renderButtonGroupOutside={false} renderDotsOutside={false} responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={true}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  slidesToSlide={1}
  swipeable 
>

{
    appliedJobs && 
    appliedJobs.map(({jobId:{ _id, title, shortdesc,city,state},dateApplied,interview,success,verification,phoneCall},i)=>(
        <div key={i} className=" m-2 hover:shadow-xl p-2 rounded-xl transition-shadow duration-150 shadow-sm cursor-pointer border border-gray-200 bg-opacity-60 bg-blue-100 ">
       <div className="flex-col px-1 py-2 mt-1 items-center ">
      <span className="text-gray-800 capitalize flex-wrap flex justify-start font-medium  ">{title}</span> 
      <span className="text-gray-500 text-xs">
    {formatDistanceToNow(new Date(dateApplied), { addSuffix: true })}
    </span>

      <span
      className="text-gray-800 mt-1 capitalize flex flex-wrap break-normal justify-start text-sm items-center"
      style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
    >
    <span
  className="text-gray-800 mt-1 capitalize flex flex-wrap justify-start text-sm items-center"
  style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
>
  {shortdesc.length > 80 ? (
    <div className='flex-col  '>
      <span>{shortdesc.slice(0, 60)}</span>
      <Link  to={`/findjobs/job-description/${_id}`} className="text-blue-500 px-2 cursor-pointer hover:underline"> See more</Link>
    </div>
  ) : (
    shortdesc
  )}
</span>

    </span>
    
   
      <span className="text-gray-800 mt-1 capitalize flex justify-start text-sm  items-center "><CiLocationOn className='max-md:h-4' size={20}/> {city && (city)} ({state &&(state)})</span>
      <Link to={`/findjobs/job-description/${_id}`} role='link' className="text-blue-700  font-semibold max-md:font-medium underline mt-3 tracking-wider capitalize flex justify-start text-sm  items-center ">View Jobs</Link>
    </div>
</div>
    ))
}

 
</Carousel>
</Fragment>
  )
 }else{
 return (
  <Fragment>
  <div className='flex py-10 justify-center'> 
  <pre className='text-blue-400'>You Haven't applied any Jobs 😶 </pre>
  </div>
</Fragment>
 )
 }

 
}

export default AppliedJobs