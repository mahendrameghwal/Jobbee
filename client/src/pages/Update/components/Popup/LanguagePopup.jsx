
import Icons from "../../../../assets/icons/Icons"
import languages from "../../../../data/Languages"

const LanguagePopup = () => {
   const {close}= Icons;
    return (
    <div className="py-3 hidden backdrop-blur bg-opacity-30 bg-blue-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-2 px-3 bg-white shadow-md rounded border border-gray-400">
    
     <div className="flex justify-between mb-3">
     <p className="text-sm font-bold tracking-wider">Language</p>
     <button role="button"><img className="h-5 cursor-pointer" src={close} alt="" /></button>
     </div>
      <div className="my-2">
      
     
    <div className="my-5">
    <label className="font-semibold text-sm " htmlFor="status">Employment Type</label>
    <select className="w-full rounded-md py-2 border-2 outline-none border-gray-300" name="" id="">
      <option disabled  value="">select status</option>
      {
        languages.map((data)=>(
            <option key={data.code} className="text-gray-900   font-normal w-full flex items-center  text-sm   rounded " value="">{data.name}</option>

        ))
      }
   
      </select>
    
    </div>
     
      </div>
        
      <div className=" p-2  flex justify-end gap-x-4">
      <p className="inline-flex items-center  cursor-pointer font-semibold hover:text-blue-800  text-blue-600 text-sm  rounded-md">
      
      cancel
    
      </p>
    
    
    
      <button className="inline-flex items-center px-6 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md">
       
    
       Add 
      </button>
    </div>
    
      </div>

        
        </div>
        
    </div>

  )
}

export default LanguagePopup