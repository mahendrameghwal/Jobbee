import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {CiLocationOn} from "react-icons/ci" ;
import { Fragment, useState } from 'react';
import { useGetOrgQuery } from '../../app/api/OrgApi';
import { Link } from 'react-router-dom';


const Top = () => {
    const  [first,] = useState([1,2,3,4,5,6,7,8,9])
const {data, isLoading}= useGetOrgQuery()

if(isLoading){
  return (
     <Fragment>
     <div className='flex py-10 justify-center'>  <pre>loading・・・</pre></div></Fragment>)
}

if(!data){
  return (
     <Fragment>
     <div className='flex py-10 justify-center'> 
       <pre className='text-red-500'>Unable to load Jobs Please try again later ⚠️</pre>
     </div>
 </Fragment>
)


  }
  return (
    <Fragment>
    <div className="flex px-2  my-4 justify-between">
    <p className="text-lg tracking-wide font-semibold capitalize "><span className="text-blue-500 font-semibold text-xl">Top </span>companies</p>
    <p className="text-blue-500 font-medium underline cursor-pointer">View all </p>
    </div>
  
    <Carousel additionalTransfrom={0} arrows autoPlaySpeed={3000} centerMode={false} className="" containerClass="container"
    draggable focusOnSelect={false} infinite={false}
 keyBoardControl minimumTouchDrag={80} pauseOnHover renderArrowsWhenDisabled={false} renderButtonGroupOutside={false} renderDotsOutside={false} responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={true}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  slidesToSlide={1}
  swipeable
>

{
    data && data.length >0 &&
    data.map(({avtar,orgname,city,state,country,_id},i)=>(
        <div key={i} className=" m-2 hover:shadow-xl p-2 rounded-xl transition-shadow duration-150 shadow-sm  border border-gray-200  bg-blue-50 ">
<div>
<div className="flex px-1 items-center justify-start">
{
  avtar && <img className="h-8 max-md:h-12 rounded-md " src={avtar} alt="" />
}
{
  !avtar && <img className="h-8 select-none max-md:h-12 rounded-md " src='
  https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1711306663~exp=1711307263~hmac=642d897d5e3fa427dad45fae7ef26f2a8bf5d992a9cb08607ac520ee89b374d0
  ' alt="" />
}

</div>
<div className="flex-col px-1 mt-1 items-center ">
<span className="text-gray-800 capitalize flex justify-start  max-md:font-medium font-semibold ">{orgname}</span> 
<span className="text-gray-800 mt-1 capitalize flex-wrap flex justify-start text-sm  items-center ">{city} ({state})</span>
<span className="text-gray-800 mt-1 capitalize flex-wrap flex justify-start text-sm  items-center ">{country}</span>
<Link to={`/browsecompanies/profile/${_id}`} className="text-blue-700  font-semibold max-md:font-medium underline mt-3 capitalize tracking-wider flex justify-start text-sm  items-center ">View Jobs</Link>




</div>
</div>

</div>
    ))
}

 
</Carousel>
</Fragment>
  )
}

export default Top