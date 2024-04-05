import AvailableToJoin from "../../../../data/AvailableToJoin"
import EmploymentStatus from "../../../../data/Status"



const EmploymentPopup = () => {
  return (
    <div className="py-8 min  bg-opacity-30 bg-blue-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-2 px-3 bg-white shadow-md rounded border border-gray-400">
    
     <div className="flex justify-between mb-3">
     <p className="text-sm font-bold tracking-wider">Add employment</p>
     <button role="button"><img className="h-6 cursor-pointer" src={close} alt="" /></button>
     </div>
      <div className="my-2">
       <p className="font-semibold text-sm my-2">is this your current Employment ?</p>
      <ul className="grid  rounded-sm px-1  mx-auto  w-full gap-6 md:grid-cols-2">
      <li>
        <label htmlFor="fresher" className="inline-flex items-center justify-between w-full rounded-lg">
          <div className="flex gap-x-2  items-center">
            <input type="radio" id="fresher" name="status" value="fresher"/>
            <span className="text-base">Yes</span>
          </div>
        </label>
      </li>
      <li>
        <label htmlFor="experienced" className="inline-flex items-center justify-between w-full rounded-lg">
          <div className="flex gap-x-2 items-center">
            <input
              type="radio"
              id="experienced"
              name="status" value="experienced"/>
            <span className="text-base">No</span>
          </div>
        </label>
      </li>
    </ul>

    <div className="my-2">
    <label className="font-semibold text-sm my-2" htmlFor="status">Employment Type</label>
    <select className="w-full rounded-md py-2 border-2 border-gray-200" name="" id="">
      <option disabled  value="">select status</option>
      {
        EmploymentStatus.map((data)=>(
            <option key={data.status} className="text-gray-600  font-normal w-full flex items-center  text-sm   rounded " value="">{data.status}</option>

        ))
      }
   
      </select>
    
    </div>

    <div className="flex-col justify-between gap-x-1">
  
    <label htmlFor="exprienced" className=" capitalize text-gray-800 text-sm font-bold leading-tight tracking-wide">Current Company</label> 
    <input   placeholder=" explain your summary here " className=" skills w-full py-1.5 px-2 focus:border-blue-600 rounded-md outline-none shadow-lg border border-gray-400" type="text" />
    </div>



  <div className="flex flex-col w-full mt-4">
   
  <label htmlFor="exprienced" className=" capitalize text-gray-800 text-sm font-bold leading-tight tracking-wide">total exprience</label> 
  <div className="flex gap-1">
  
  <div className="w-full gap-x-3">
 <div className="relative ">

     <select className="w-full   rounded-md py-2 border-2 border-gray-200" name="" id="">
     <option disabled  value="">year</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">1 year</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">2 year</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">3 year</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">4 year</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">5 year</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">6 year</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">7 year</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">8 year</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">9 year</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">10 year</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">11 year</option>

     </select>
 </div>
 </div>



  
 <div className="w-full ">
 <div className="relative ">
 
     <select className="w-full  rounded-md py-2 border-2 border-gray-200" name="" id="">
     <option disabled  value="">month</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">1 month</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">2 month</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">3 month</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">4 month</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">5 month</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">6 month</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">7 month</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">8 month</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">9 month</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">10 month</option>
     <option className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">11 month</option>

     </select>
 </div>
 </div>
  
  </div>
 
 <div>
  

 </div>
  </div>


  <div className="flex-col justify-between my-1 gap-x-1">
  
  <label htmlFor="exprienced" className=" capitalize text-gray-800 text-sm font-bold leading-tight tracking-wide">Current Position</label> 
  <input   placeholder=" explain your summary here " className=" skills w-full py-1.5 px-2 focus:border-blue-600 rounded-md outline-none shadow-lg border border-gray-400" type="text" />
  </div>
  <div className="w-full max-md:w-full my-2 md:mb-0">
    <label htmlFor='startdate' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    start date :
    </label>
    
    <input placeholder='date' 
    className="  max-md:placeholder:text-sm  block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="month"  name="startdate" 
    />
     
    </div>

    <div className="w-full max-md:w-full my-2 md:mb-0">
    <label htmlFor='startdate' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    end date :
    </label>
    
    <input placeholder='date' 
    className="  max-md:placeholder:text-sm  block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="month"  name="startdate" 
    />
     
    </div>


    <div className="flex-col justify-between gap-x-1">
  
    <label htmlFor="exprienced" className=" capitalize text-gray-800 text-sm font-bold leading-tight tracking-wide">Current salary</label> 
    <input   placeholder="salary in (number)" className=" skills w-full py-1.5 px-2 focus:border-blue-600 rounded-md outline-none shadow-lg border border-gray-400" type="number" />
    </div>

    <div className="flex-col   gap-x-1">
  
    
    <label htmlFor="exprienced" className=" capitalize text-gray-800 text-sm font-bold leading-tight tracking-wide">Skils used</label> 
    <div className="gap-x-2 flex justify-between">
    <input   placeholder="salary in (number)" className=" skills w-70 py-1.5 px-2 focus:border-blue-600 rounded-md outline-none shadow-lg border border-gray-400" type="number" />
    <button className="inline-flex items-center px-6 py-2 text-white bg-blue-500 hover:bg-blue-600  text-sm font-medium rounded-md">Add skills</button>
</div>
    </div>

    <div className="flex-col justify-between gap-x-2">
    <label htmlFor="exprienced" className=" capitalize text-gray-800 text-sm font-bold leading-tight tracking-wide">Job profile</label> 
     <textarea  rows="2"  placeholder="Job profile description" className=" skills w-full p-2 focus:border-blue-600 rounded-md outline-none shadow-lg border border-gray-400" type="text" />
     </div>

     <div className="w-full gap-x-3">
     <div className="relative ">
    
         <select className="w-full   rounded-md py-2 border-2 border-gray-200" name="" id="">
         <option disabled  value="">notice period</option>
         {
             AvailableToJoin.map((duration)=>(
            <option key={duration} className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">{duration&& duration.Availablity}</option>
            
        ))
       }
    
         </select>
     </div>
     </div>
    



     
      </div>
        
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

export default EmploymentPopup