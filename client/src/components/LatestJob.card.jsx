import { useNavigate } from "react-router-dom";


const LatestJobCard = () => {
    const navigate = useNavigate();

    const arr =[1,2,3,4,5,6,7,8];
      return (
       <div  className="flex transition-colors   flex-wrap gap-3 my-16 max-md:my-12 max-sm:justify-center justify-around">
       {
        arr.map((item,i)=>(
            <div   key={i} className="w-1/5 max-sm:w-full  max-lg:w-2/5 p-3 hover:shadow-md   border striped-border bg-gray-50 rounded">
            <div className='flex  mb-1 justify-between items-center'> <img className='h-8 w-8 rounded-full ' src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png" alt="" /> <span className='border border-green-300 px-2 py-0.5 rounded-md bg-green-50 text-green-700   '>Full-time</span></div>
             <section className="flex flex-col  mt-5">
             <p className='font-semibold mt-1 leading-8'>social media specialist</p>
             <span className='font-base text-gray-500 flex gap-x-2  leading-8'>Dropbox,<span>Benglore, India </span></span>
             <button onClick={()=>{navigate(`/findjobs/job-description/${item}`)}}  className="text-white  leading-6 bg-blue-500 border-none outline-none rounded-md max-md:textbase hover:bg-blue-400 px-5 py-1 text-base">About Job</button>
             </section>
             </div>
            ))}
            </div>
      )
    }
    
export default LatestJobCard
