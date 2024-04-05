
import ExploreCard from "./Explore.card";

const Explores = () => {
  return (
    <div className="container-lg px-4 w-5/6  my-32 max-lg:my-24 max-md:my-20 mx-auto ">
     <div className="flex justify-between"><span className=" capitalize text-black text-4xl font-bold max-md:text-3xl max-sm:text-2xl ">Explore by <span className="text-blue-500 ">category</span></span>  <p className="text-blue-600 underline cursor-pointer">see all</p></div>

    <ExploreCard/>
    
    </div>
  )
}

export default Explores