

const FeaturedJobsCard = () => {
    // const [Ishovered, setIshovered]= useState(false);

    const arr =[1,2,3,4,5,6,7,8];
      return (
        <div className="">
       <div  className="flex flex-wrap gap-4 my-16 max-md:my-12 max-sm:justify-center justify-between ">
       {
        arr.map((item,i)=>(
            <div key={i} className="w-1/5 max-sm:w-full  max-lg:w-2/5 max-md:p-3 p-5 hover:shadow-md   border striped-border bg-gray-50 rounded">
           <div className='flex justify-between items-center'> <img className='h-8 rounded-full ' src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png" alt="" /> <span className='border px-2 py-1 rounded-md text-blue-600 border-blue-600'>Full Time</span></div>
            <section className="flex flex-col">
            <p className="font-semibold my-3  tracking-wider">Email Marketing</p>
            <p className=" text-gray-500 my-1 ">Location :  Jaipur</p>

            <p className=" text-sm text-gray-400 my-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, officia.</p>


        
            
            </section>
              
            </div>
        ))
    }
    
       
       </div>
        
        
        </div>
      )
}

export default FeaturedJobsCard 



// {Ishovered ?    <div className="flex items-center gap-x-3 text-white hover:underline cursor-pointer">show more jobs <HiOutlineArrowNarrowRight/> </div> :   <div className="flex items-center gap-x-3 text-gray-500 hover:underline cursor-pointer">show more jobs <HiOutlineArrowNarrowRight/> </div>}


//{
//   Ishovered ? <MdOutlineComputer className="text-white" size={32}/>:<MdOutlineComputer className="text-blue-600" size={32}/>
// }
