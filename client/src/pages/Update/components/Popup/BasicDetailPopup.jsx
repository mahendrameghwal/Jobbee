import Icons from "../../../../assets/icons/Icons"
import AvailableToJoin from "../../../../data/AvailableToJoin"

const BasicDetailPopup = () => {
    const {name,salary,location, phone, year,month}=Icons;
  return (
    <div className="py-8 min min-h-screen  bg-opacity-30 bg-blue-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-2 px-3 bg-white shadow-md rounded border border-gray-400">
            <div className="w-full flex justify-start text-gray-600 ">
              <p className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"> Basic Details</p>
            </div>
         
          <div className="">
          <label htmlFor="name" className=" text-gray-800 text-sm font-bold leading-tight tracking-wide">Name</label>
          <div className="relative">
              <div className="absolute   text-gray-600 flex items-center px-1 border-r  h-full">
                  <img src={name} className="h-6" alt="" />
              </div>
              <input id="name" className="text-gray-600 focus:outline-none focus:border focus:border-blue-600 font-normal w-full h-10 flex items-center pl-10 text-sm border-gray-300 rounded border" placeholder="James" />
          </div>
          <label htmlFor="location" className=" text-gray-800 text-sm font-bold leading-tight tracking-wide">Location</label>
          <div className="relative ">
              <div className="absolute   text-gray-600 flex items-center px-1 border-r  h-full">
                  <img src={location} className="h-6" alt="" />
              </div>
              <input id="name" className="text-gray-600 focus:outline-none focus:border focus:border-blue-600 font-normal w-full h-10 flex items-center pl-10 text-sm border-gray-300 rounded border" placeholder="James" />
          </div>


          <label htmlFor="name" className=" text-gray-800 text-sm font-bold leading-tight tracking-wide">Current status</label>
          <div className="relative ">
           
          <ul className="grid  rounded-sm px-1  mx-auto  w-full gap-6 md:grid-cols-2">
          <li>
            <label htmlFor="fresher" className="inline-flex items-center justify-between w-full rounded-lg">
              <div className="flex gap-x-2  items-center">
                <input type="radio" id="fresher" name="status" value="fresher"/>
                <span className="text-base">Fresher</span>
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
                <span className="text-base">Experienced</span>
              </div>
            </label>
          </li>
        </ul>
          </div>

   <div className="flex flex-col w-full mt-4">
   
   <label htmlFor="exprienced" className=" capitalize text-gray-800 text-sm font-bold leading-tight tracking-wide">total exprience</label> 
   <div className="flex gap-x-1">
   
   <div className="w-full gap-x-3">
  <div className="relative ">
  <div className="absolute   text-gray-600 flex items-center px-1 border-r  h-full">
  <img src={year} className="h-6" alt="" />
</div>
      <select className="w-full pl-8  rounded-md py-2 border-2 border-gray-200" name="" id="">
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
  <div className="absolute   text-gray-600 flex items-center px-1 border-r  h-full">
  <img src={month} className="h-6" alt="" />
</div>
      <select className="w-full pl-8  rounded-md py-2 border-2 border-gray-200" name="" id="">
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
   <label htmlFor="name" className=" text-gray-800 text-sm font-bold leading-tight tracking-wide">Current salary</label>
   <div className="relative my-1">
       <div className="absolute   text-gray-600 flex items-center px-1 border-r  h-full">
           <img src={salary} className="h-6" alt="" />
       </div>
       <input type="number" id="name" className="text-gray-600 focus:outline-none focus:border focus:border-blue-600 font-normal w-full h-10 flex items-center pl-10 text-sm border-gray-300 rounded border" placeholder="James" />
   </div>

   <label htmlFor="name" className=" text-gray-800 text-sm font-bold leading-tight tracking-wide">Phone no</label>
   <div className="relative my-1">
       <div className="absolute   text-gray-600 flex items-center px-1 border-r  h-full">
           <img src={phone} className="h-6" alt="" />
       </div>
       <input type="number" id="name" className="text-gray-600 focus:outline-none focus:border focus:border-blue-600 font-normal w-full h-10 flex items-center pl-10 text-sm border-gray-300 rounded border" placeholder="James" />
   </div>
    
   <label htmlFor="name" className=" text-gray-800 text-sm font-bold leading-tight tracking-wide">Available to Join</label>
   <div className="w-full gap-x-3">
   <div className="relative my-1">
   <div className="absolute   text-gray-600 flex items-center px-1 border-r  h-full">
   <img src={year} className="h-6" alt="" />
 </div>
       <select className="w-full pl-8  rounded-md py-2 border-2 border-gray-200" name="" id="">
       <option disabled  value="">year</option>

    {
        AvailableToJoin.map((period,i)=>(

            <option key={i} className="text-gray-600  font-normal w-full h-10 flex items-center pl-10 text-sm  rounded " value="">{period.Availablity}</option>
        ))
    }


 
       </select>
   </div>
   </div>
 </div>
     
      <div className="bg-white p-2  flex justify-end gap-x-2">
      <button className="inline-flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">cancel</button>
      <button className="inline-flex items-center px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md"> Save</button>
    </div>
  </div>
    </div>
   </div>
  )
}

export default BasicDetailPopup