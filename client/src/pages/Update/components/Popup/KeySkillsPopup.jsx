import Icons from "../../../../assets/icons/Icons"


const KeySkillsPopup = () => {
   const {close}= Icons
  return (
    <div className="py-8 min hidden backdrop-blur-sm  bg-opacity-30 bg-gray-200 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-2xl">
        <div className="relative py-2 px-3 bg-white shadow-md rounded border border-gray-400">
    
     <div className="flex justify-between mb-3">
     <p className="text-sm font-bold tracking-wider"> Summary</p>
     <button role="button"><img className="h-6 cursor-pointer" src={close} alt="" /></button>
     </div>
      <div className="my-2">
      <span className="text-sm text-center   text-gray-500">
      tell us to recruiters to about your Skills
      </span>
      </div>
      <div  className="flex flex-wrap justify-start gap-x-2 items-center  text-sm py-2  text-gray-700 rounded-lg tracking-wider   ">
      <span className="cursor-pointer bg-gray-200 px-5 py-0.5 my-1 font-medium text-base max-md:text-sm uppercase rounded-xl">html </span>  
      <span className="cursor-pointer bg-gray-200 px-5 py-0.5 my-1 font-medium text-base max-md:text-sm uppercase rounded-xl">html </span>  
      <span className="cursor-pointer bg-gray-200 px-5 py-0.5 my-1 font-medium text-base max-md:text-sm uppercase rounded-xl">html </span>  
      <span className="cursor-pointer bg-gray-200 px-5 py-0.5 my-1 font-medium text-base max-md:text-sm uppercase rounded-xl">html </span>  
      <span className="cursor-pointer bg-gray-200 px-5 py-0.5 my-1 font-medium text-base max-md:text-sm uppercase rounded-xl">html </span>  
      <span className="cursor-pointer bg-gray-200 px-5 py-0.5 my-1 font-medium text-base max-md:text-sm uppercase rounded-xl">html </span> 
      <span className="cursor-pointer bg-gray-200 px-5 py-0.5 my-1 font-medium text-base max-md:text-sm uppercase rounded-xl">html </span>  
      <span className="cursor-pointer bg-gray-200 px-5 py-0.5 my-1 font-medium text-base max-md:text-sm uppercase rounded-xl">html </span>  
       

    
      </div>
     <div className="flex justify-between gap-x-2">
     <textarea  rows="1" cols="3" placeholder=" explain your summary here " className=" skills w-4/5 p-2 focus:border-blue-600 rounded-md outline-none shadow-lg border border-gray-400" type="text" />
     <button className="inline-flex items-center px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md">Add Skills</button>
     </div>
      <div className=" p-2 mt-4  flex justify-end gap-x-2">
      <button className="inline-flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
      
      cancel
    
      </button>
    
    
    
      <button className="inline-flex items-center px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md">
       
    
        Save
     
      </button>
    </div>
    
      </div>

        
        </div>
        
    </div>
  )
}

export default KeySkillsPopup