import Icons from "../../../../assets/icons/Icons";


const SummaryPopup = () => {
const {close} = Icons ;
  return (
    <div className="py-8 min hidden  bg-opacity-30 bg-blue-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-2 px-3 bg-white shadow-md rounded border border-gray-400">
    
     <div className="flex justify-between mb-3">
     <p className="text-sm font-bold tracking-wider"> Summary</p>
     <button role="button"><img className="h-6 cursor-pointer" src={close} alt="" /></button>
     </div>
      <div className="my-2">
      <span className="text-sm text-center   text-gray-500">
      It is the first thing recruiters notice in your profile. Write concisely what makes you unique and right person for the job you are looking for.
      </span>
      </div>
      <textarea rows="5" cols="33" placeholder=" explain your summary here " className="w-full p-2 focus:border-blue-600 rounded-md outline-none shadow-lg border border-gray-400" type="text" />
        
      <div className=" p-2  flex justify-end gap-x-2">
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

export default SummaryPopup