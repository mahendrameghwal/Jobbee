import React, { Suspense, lazy, useState } from 'react'
import review from '../../assets/review.svg'
import call from '../../assets/callchat.svg'
import interview from '../../assets/interview.svg'
import verify from '../../assets/verify.svg'
import success from '../../assets/sucessfully.svg'
import detail from '../../assets/detail.svg'
import Loader from '../../components/Loader'
import { useEffect } from 'react'
const ApplicationReview = lazy(() => import("./components/ApplicationReview"));
const PhoneCall = lazy(() => import("./components/PhoneCall"));
const Interview = lazy(() => import("./components/Interview"));
const VerifcationProcess = lazy(() => import("./components/VerifcationProcess"));
const HiredSucesscandidate = lazy(() => import("./components/HiredSucesscandidate"));
const JobReport = lazy(() => import("./components/JobReport"));
import {motion} from 'framer-motion'
import { useParams } from 'react-router-dom'
import { useGetJobByIdQuery } from '../../../app/api/JobApi'


const ShortListCandidate = () => {
  const {jobid} =  useParams();
  const { data, error, isLoading } = useGetJobByIdQuery(jobid);
  console.log(data);
  const [step, setStep] = useState(1);
  useEffect(() => {
    document.title='Job overview'
    const currentStepFromStorage = localStorage.getItem('currentstep');
    if(currentStepFromStorage){
      setStep(currentStepFromStorage)
    }else{
      setStep(parseInt(1))
    }
  }, [step]);
  
  const SetCurrentStep =(crrstep)=>{
    setStep( localStorage.setItem('currentstep', parseInt(crrstep)))
  }
  const SetStepbg = (targetStep, currentStep) => {
    return `${parseInt(currentStep) === targetStep && 'bg-blue-300/90  text-black'}`;
  };

  




  return (
  
<motion.div 
initial={{ opacity: 0, scale:1 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6 }}
className='p-2 min-h-screen max-h-full '>

<section className='border p-2 '>
<h6 className="text-lg font-bold ">Job Statistics</h6>
<h2 className='text-base font-medium'>Job ID = JJFH5787</h2>
<h2 className='text-base font-medium'>Total Candidate = 150</h2>

</section>

<div>
<div role="alert" className=" hidden rounded-md w-1/2 max-sm:w-95 border-gray-500  max-md:w-4/5 top-10% z-60 left-2/4 -translate-x-1/2 fixed  border shadow-md bg-gray-200  bg-opacity-95  transition-opacity pb-3 px-2 pt-1">
<div className='flex justify-between'>
<p className='underline font-medium'>Here You can Rate Your Candidate </p>
<button className=" transition text-gray-800 hover:text-gray-500">

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="h-6 w-6"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
</div>

  <div className="flex items-start gap-4">
    <div className="border max-md:flex-col flex gap-x-1  w-full">
  <section className='w-1/3 max-md:w-full'>
  <label htmlFor='communication' className="text-sm font-semibold text-gray-600">communication</label>
  <select className='w-full border appearance-none cursor-pointer p-2 rounded-md outline-none ' name="" id="">
  <option disabled  value="">Communication rating</option>
  <option value="">item 1</option>
  <option value="">item 2</option>
  <option value="">item 3</option>
  </select>
  </section>
  <section className='w-1/3 max-md:w-full'>
  <label htmlFor='communication' className="text-sm font-semibold text-gray-600">Knowledge:</label>
  <select className='border  appearance-none cursor-pointer w-full p-2 rounded-md outline-none ' name="" id="">
  <option disabled  value="">Interview rating</option>
  <option value="">item 1</option>
  <option value="">item 2</option>
  <option value="">item 3</option>
  </select>
  </section>

  <section className='w-1/3 max-md:w-full'>
  <label htmlFor='communication' className="text-sm font-semibold text-gray-600">Skill match:</label>
  <select className='w-full border p-2 appearance-none cursor-pointer rounded-md outline-none ' name="" id="">
  <option  disabled  value="">Skill match rating</option>
  <option  value="">item 1</option>
  <option  value="">item 2</option>
  <option  value="">item 3</option>
  </select>
  </section>

    </div>
  
    </div>
  <div className='mx-auto px-1.5 mt-2 flex justify-end'>
  <button type="button" className="py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center tracking-wide text-sm font-medium shadow-md ">
 Rate Candidate
</button>

  </div>

</div>
{
  parseInt(step)===1 && 
  <section className='my-3 w-100  flex justify-end '>

<label
  htmlFor="Search Candidate"
  className="relative w-1/3 max-md:w-1/2 max-sm:w-full  block rounded-md border border-gray-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="search"
    className="peer  p-2 w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
    placeholder="Search Candidate"
  />

  <span
    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-800 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
  >
  Search Candidate Here
  </span>
</label>
</section>
}
  <ul
    className="grid gap-1 grid-cols-6 mt-2  max-md:grid-cols-3 max-sm:grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg  text-sm text-gray-600 grid-rows-1 max-md:grid-rows-2 max-sm:grid-rows-3"
  >
    <li onClick={()=>{SetCurrentStep(1)}} className={`flex cursor-pointer border text-center hover:bg-blue-200 bg-gray-100 rounded-md hover:text-gray-950 items-center justify-center max-sm:p-3 max-sm:my-0.5 gap-2 p-4 ${SetStepbg(1, step)} `}>
    <img className='' src={review} alt="review" />
      <p className="leading-none ">
        <strong className="block font-medium">Application Review</strong>
      </p>
     
    </li>

    <li onClick={()=>{SetCurrentStep(2)}} className={`flex cursor-pointer border text-center hover:bg-blue-200 bg-gray-100 rounded-md hover:text-gray-950 items-center justify-center max-sm:p-3 max-sm:my-0.5 gap-2 p-4 ${SetStepbg(2, step)} `}>
      <img className='' src={call} alt="phone" />
      <p className="leading-none">
        <strong className="block font-medium">Phone Call</strong>
      </p>
     
    </li>
  <li onClick={()=>{SetCurrentStep(3)}} className={`flex cursor-pointer border text-center hover:bg-blue-200 bg-gray-100 rounded-md hover:text-gray-950 items-center justify-center max-sm:p-3 max-sm:my-0.5 gap-2 p-4 ${SetStepbg(3, step)} `}>
  <img className='' src={interview} alt="interview" />
  <p className="leading-none">
    <strong className="block font-medium">Interview</strong>
  </p>
 
</li>
<li onClick={()=>{SetCurrentStep(4)}} className={`flex cursor-pointer border text-center hover:bg-blue-200 bg-gray-100 rounded-md hover:text-gray-950 items-center justify-center max-sm:p-3 max-sm:my-0.5 gap-2 p-4 ${SetStepbg(4, step)} `}>
  <img className='' src={verify} alt="verify" />
<p className="leading-none">
  <strong className="block font-medium"> Verifcation </strong>
</p> 
</li>
<li onClick={()=>{SetCurrentStep(5)}} className={`flex cursor-pointer border text-center hover:bg-blue-200 bg-gray-100 rounded-md hover:text-gray-950 items-center justify-center max-sm:p-3 max-sm:my-0.5 gap-2 p-4 ${SetStepbg(5, step)} `}>
  <img className='' src={success} alt="success" />
<p className="leading-none">
  <strong className="block font-medium"> Hired candidate</strong>
</p>

</li>
<li onClick={()=>{SetCurrentStep(6)}} className={`flex cursor-pointer border text-center hover:bg-blue-200 bg-gray-100 rounded-md hover:text-gray-950 items-center justify-center max-sm:p-3 max-sm:my-0.5 gap-2 p-4 ${SetStepbg(6, step)} `}>
  <img className='' src={detail} alt="detail" />
<p className="leading-none">
  <strong className="block font-medium">Job Report </strong>

</p>

</li>
  </ul>
</div>
<Suspense fallback={<Loader/>}>
{
  parseInt(step) === 1 && (
    <ApplicationReview/>
  ) 
  }
  
  {
    parseInt(step) === 2 && (
      <PhoneCall/>
    ) 
    }
    {
      parseInt(step) === 3 && (
        <Interview/>
      ) 
      }
      {
        parseInt(step) === 4 && (
          <VerifcationProcess/>
        ) 
        }
        {
          parseInt(step) === 5 && (
            <HiredSucesscandidate/>
          ) 
          }

          {
            parseInt(step) === 6 && (
              <JobReport/>
            ) 
            }
</Suspense>

  
</motion.div>

  )
}

export default ShortListCandidate