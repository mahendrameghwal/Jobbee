import { Link } from "react-router-dom";
import compnies from "../assets/compnies/compnies"
// import arrowright from "../assets/rightarrow.svg"
Link

const Bannner1 = () => {
  const {amazon,github, hosting , tesla, adobe}= compnies;
  return (
    <div>
    
    <section className=" bg-gray-200 text-white ">
    <div
      className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div className="mx-auto max-w-3xl text-center">
 <p
   className="text-focus-in bg-gradient-to-r  banner-text from-green-500 via-blue-800 to-purple-700 bg-clip-text max-md:text-4xl text-5xl font-extrabold text-transparent "
 >
          Are you looking for New challenges ? 
  
         
        </p>
  
        <p className="mx-auto bg-gradient-to-r  text-transparent from-green-400 via-blue-500 to-purple-900 bg-clip-text  mt-4 max-w-xl sm:text-xl/relaxed">
           Hiring is On !
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to={"/findjobs"} className="block w-full tracking-wider rounded border border-blue-700 bg-gradient-to-br from-green-500 via-blue-500 to-purple-400 px-12 py-3 text-sm font-semibold text-gray-200 hover:bg-none  hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"  > Get started  </Link>
        <Link  className="block w-full rounded border  border-blue-700 bg-gradient-to-br from-green-500 via-blue-500 to-purple-400 tracking-wider  transition-colors duration-200  hover:bg-none text-gray-200 hover:text-black font-semibold px-12 py-3 text-sm  focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" >  Learn More
        </Link>
          
        </div>
      </div>
    </div>
  </section>
<section className="bg-gray-200 ">
<div className="flex justify-center mb-2 max-lg:hidden">
<p className="text-lg  text-center  border-b-2 max-lg:w-1/4 border-gray-600 w-1/6 text-gray-400 dark:text-gray-800">compnies we helped to grow</p>
</div>
<div className="py-2  container-lg mx-auto flex flex-row justify-between px-4">
<img className="h-18 max-lg:h-16 " src={amazon} alt="" />
<img className="h-18 max-lg:h-16 " src={github} alt="" />
<img className="h-18 max-lg:h-16 " src={hosting} alt="" />
<img className="h-18 max-lg:h-16 max-sm:hidden " src={tesla} alt="" />
<img className="h-18 max-lg:h-16 max-md:hidden" src={adobe} alt="" />
</div>
</section>
    </div>
  )
}

export default Bannner1