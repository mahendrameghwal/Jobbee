import { IoStar } from "react-icons/io5"
import {motion} from  "framer-motion"
const HiredSucesscandidate = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale:1 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6 }}
    >
    <div className="  w-full">
    <form className=" flex gap-x-3 max-md:flex-col justify-evenly border mt-1 px-2">
      <div className="mb-2 ">
        <label htmlFor="name" className=" text-gray-700 font-medium">Search Candidates Name</label>
        <input placeholder='search candidate here...' type="search" id="name" className="font-normal shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-2">
        <label htmlFor="job" className=" text-gray-700 font-medium">Select Job</label>
        <select id="job" className=" appearance-none cursor-pointer w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="rating" className=" text-gray-700 font-medium ">Select Rating</label>
        <select id="rating" className=" appearance-none w-full cursor-pointer bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    <div className='mb-2 flex items-center mt-5 '>
    <button type="submit" className="bg-blue-500 py-2  hover:bg-blue-700 text-white font-medium tracking-wider  px-9 rounded focus:outline-none focus:shadow-outline">
    Filter
  </button>
    </div>
    </form>
    
    </div>
    <div className='grid grid-cols-1 grid-flow-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3'>
    
<div className="relative bg-gray-50 px-2 py-4 rounded-md shadow-md hover:shadow-lg border-gray-200 border flex items-center">
    <div className='absolute top-2 right-2'>
    <div className='bg-gray-200 px-2 rounded-full text-base flex gap-x-1 items-center'>4.1 <IoStar size={14}/></div>
    </div>
    <img src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=740" alt="Profile Image" className="w-20 h-20 max-md:w-16 max-md:h-16 rounded-full mr-4"/>
  <div className="flex-1 border border-red-400">
  <h2 className="text-xl font-medium">Bradley Steve</h2>
    <p className="text-gray-600">Front End Developer</p>
    <div className="text-gray-600 flex-wrap mt-2 gap-x-2 flex items-center">
    <p className="mb-1">15K Views</p>
    <p className="mb-1">82 Projects</p>
    </div>
    <div  className="flex gap-x-2 items-center">
    <button className="bg-green-500 text-sm text-white py-1 px-2  rounded-md hover:bg-green-600">message</button>
    <button className="bg-blue-500 text-sm text-white py-1 px-2  rounded-md hover:bg-blue-600">show detail</button>

    </div>
    </div>
    </div>

    <div className="relative bg-gray-50  px-2 py-4 rounded-md shadow-md hover:shadow-lg border-gray-200 border flex items-center">
    <div className='absolute top-2 right-2'>
    <div className='bg-gray-200 px-2 rounded-full text-base flex gap-x-1 items-center'>4.1 <IoStar size={14}/></div>
    </div>
    <img src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=740" alt="Profile Image" className="w-20 h-20 max-md:w-16 max-md:h-16 rounded-full mr-4"/>
  <div className="flex-1">
  <h2 className="text-xl font-medium">Bradley Steve</h2>
 
    <p className="text-gray-600">Front End Developer</p>
    <div className="text-gray-600 flex-wrap mt-2 gap-x-2 flex items-center">
    <p className="mb-1">15K Views</p>
    <p className="mb-1">82 Projects</p>
    </div>
    <div  className="flex gap-x-2 items-center">
    <button className="bg-green-500 text-sm text-white py-1 px-2  rounded-md hover:bg-green-600">message</button>
    <button className="bg-blue-500 text-sm text-white py-1 px-2  rounded-md hover:bg-blue-600">see detail</button>

    </div>
    </div>
    </div>
    <div className="relative bg-gray-50   px-2 py-4rounded-md shadow-md hover:shadow-lg border-gray-200 border flex items-center">
    <div className='absolute top-2 right-2'>
    <div className='bg-gray-200 px-2 rounded-full text-base flex gap-x-1 items-center'>4.1 <IoStar size={14}/></div>
    </div>
    <img src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=740" alt="Profile Image" className="w-20 h-20 max-md:w-16 max-md:h-16 rounded-full mr-4"/>
  <div className="flex-1">
  <h2 className="text-xl font-medium">Bradley Steve</h2>
    <p className="text-gray-600">Front End Developer</p>
    <div className="text-gray-600 flex-wrap mt-2 gap-x-2 flex items-center">
    <p className="mb-1">15K Views</p>
    <p className="mb-1">82 Projects</p>

    </div>
    <div  className="flex gap-x-2 items-center">
    <button className="bg-green-500 text-sm text-white py-1 px-2  rounded-md hover:bg-green-600">message</button>
    <button className="bg-blue-500 text-sm text-white py-1 px-2  rounded-md hover:bg-blue-600">see detail</button>

    </div>
    </div>
    </div>
</div>
    </motion.div>
  )
}

export default HiredSucesscandidate