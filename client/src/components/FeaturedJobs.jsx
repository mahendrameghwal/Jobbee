import FeaturedJobsCard from './FeaturedJobs.card'


const FeaturedJobs = () => {
    return (
        <div className="container-lg px-4  w-5/6  my-32 max-lg:my-24 max-md:my-20 mx-auto ">
         <div className="flex justify-between"><span className=" capitalize text-black text-4xl font-bold max-md:text-3xl max-sm:text-2xl ">Featured <span className="text-blue-500 ">Jobs</span></span>  <p className="text-blue-600 underline cursor-pointer">see all</p></div>
    
        <FeaturedJobsCard/>
        
        </div>
      )
}

export default FeaturedJobs