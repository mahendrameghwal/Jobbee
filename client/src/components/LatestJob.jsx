import LatestJobCard from "./LatestJob.card"



const LatestJob = () => {
    return (
        <div className="bg-cover my-6 py-1 bg-center bg-no-repeat   container-lg px-1  w-5/6    mx-auto ">
         <div className="flex justify-between"><span className=" capitalize text-black text-4xl font-bold max-md:text-3xl max-sm:text-2xl ">Latest <span className="text-blue-500 ">Jobs Open</span></span><p className="text-blue-600 underline cursor-pointer">see all Jobs</p></div>
        <LatestJobCard/>
        </div>
      )
}

export default LatestJob