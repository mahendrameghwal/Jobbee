import rightarrow from "../../assets/rightarrow.svg"
import AvailableToJoin from "../../data/AvailableToJoin"
import Gender from "../../data/Gender";
import Status from "../../data/Status"
import {useEffect,memo, Fragment, useState , useRef, useCallback, useMemo } from 'react';
import { GoPlus, GoProjectRoadmap } from 'react-icons/go';
import {motion}from "framer-motion"
import { toast } from 'react-hot-toast';
import { IoMdClose, IoMdCloseCircleOutline } from 'react-icons/io';
import { HiMiniInformationCircle } from "react-icons/hi2";
import { useDispatch , useSelector} from 'react-redux';
import { IoBook } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
import {setCity,setState,SetCountry,AddSocial ,DeleteSocial ,SetCandidatedata ,CandidateStatus ,CurrentCandidateStatus ,AddMoreEducation ,updateEducationField  ,updateDeleteEducation ,AddProject ,UpdateProject ,UpdateDeleteproject ,AddInfoSkills ,DeleteSkill ,AddMoreEmployment ,updateEmployment ,UpdateDeleteEmployment ,AddEmploymentSkills ,DeleteEmploymentSkills, AddProjectSkills, DeleteProjectSkills, resetCandidateForm
} from '../../../app/slices/CreateCandidateSlice';
import SocialLink from '../../data/SocialLink';
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import qualifications from '../../data/qualifications';
import {FaAngleRight, FaAngleLeft} from "react-icons/fa"
import skillcategory from '../../data/skillcategory';
import jobCategories from '../../data/JobCategory';
import Joblevel from '../../data/Joblevel';
import Jobtype from '../../data/Jobtypes';
import {loadCities,loadCountries,loadStates} from '../../../app/slices/AddressSlice';
import { useCreateCadidateMutation } from '../../../app/api/CandidateApi';
import { batch } from 'react-redux';


const CreateCandidate = memo(() => {
  const dispatch = useDispatch();
  const Candidate = useSelector((state) => state.CreateCandidate.CandidateData);
  const address = useSelector((state) => state.address);
  const Topref = useRef(null)
  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);
  const [createCadidate, { isError, error }] = useCreateCadidateMutation();

console.log(Candidate);
  {/*  handle  data from redux-toolkit slice   */}
  
  const [step, setStep] = useState(1);
  const [fileInputState, setFileInputState] = useState();
  const [previewSource, setPreviewSource] = useState('');

  const previewFile = useCallback((file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      dispatch(SetCandidatedata({ avtar: reader.result }));
    };
    reader.readAsDataURL(file);
  }, []);
  
  const handleFileInputChange =useCallback( (e) => {
    const file = e.target.files[0];
    previewFile(file);
  },[]);
  
 
  

{/*  handle education field  */}


const handleEducationChange = useCallback((event, index) => {
  const { name, value } = event.target;
  dispatch(updateEducationField({ index, name, value }));
}, [Candidate.education]);
 

{/*  handle delete education   */}

const DeletEducation = useCallback((hell) => {
  dispatch(updateDeleteEducation(hell));
}, [dispatch]);


{/*  handle employment field  */}

   const handleEmploymentChange = useCallback((event, index) => {
    const { name, value } = event.target;
    dispatch(updateEmployment({ index, name, value }));
  }, [dispatch]);
 {/*  handle delete employment   */}
 const DeletEmployment = useCallback((hell) => {
  dispatch(UpdateDeleteEmployment(hell));
}, [dispatch]);

const handleProjectChange = useCallback((event, index) => {
    const { name, value } = event.target;
    console.log('value is',value);
    dispatch(UpdateProject({ index, name, value }));
},[]);

const HandleProjectSkills = useCallback(
  (index) => {
    if (seletctedSkillType && Skillname.trim()!=='') {
      dispatch(AddProjectSkills({ index,  category: seletctedSkillType, name: Skillname}));
      setseletctedSkillType('')
      setSkillname('')
    } else {
      toast.error(`Please ${!seletctedSkillType?'select a category of skill':''} ${!seletctedSkillType && !Skillname.trim() ? 'and':''}${!Skillname.trim()?'provide a Skill name':''}`);
    }
  }
  ,[])


{/*  handle delete education   */}
 const DeleteProject =useCallback((hell)=>{
  dispatch(UpdateDeleteproject(hell))
},[])



{/* close preview of avatar */}
const ClosePreview =()=>{
  setPreviewSource("")
  setFileInputState('')
  dispatch(SetCandidatedata({ avtar:'' }));
}
  


const handleCountry = useCallback((country) => {
  if (country) {
    dispatch(SetCountry(country));
    const CountiresArr = address.countries;
    const ResultCountry = CountiresArr.find(findcountry => findcountry.name === country);
    ResultCountry.isoCode && dispatch(loadStates(`${ResultCountry.isoCode}`));
    ResultCountry.isoCode && dispatch(loadCities(`${ResultCountry.isoCode}`));
  }
}, [address.countries, dispatch]);
  

{/* handle value of form  */}
const Handlecandidate = useCallback((e) => {
  if (e && e.target) {
    const { name, value } = e.target;
    batch(() => {
      dispatch(SetCandidatedata({ [name]: value }));
    });
  }
}, [dispatch]);
  
  
  const [selectedSocial, setSelectedSocial] = useState('');
  const [link, setLink] = useState('');

  const handleAddSocial = () => {
    if (selectedSocial && link.trim()!=='') {
      dispatch(AddSocial({ name:selectedSocial, link }));
      setSelectedSocial('')
      setLink('')
    } else {
      toast.error(`Please ${!selectedSocial?'select a social network':''}${!selectedSocial && !link.trim() ? 'and':''}${!link.trim()?'provide a link':''}`);
    }
  };
  
  const [seletctedSkillType, setseletctedSkillType] = useState('');
  const [Skillname, setSkillname] = useState('');

  const HandleAddSkill = () => {
    
    if (seletctedSkillType && Skillname.trim()!=='') {
      dispatch(AddInfoSkills({  skilltype: seletctedSkillType, name: Skillname}));
      setseletctedSkillType('')
      setSkillname('')
    } else {
      toast.error(`Please ${!seletctedSkillType?'select a category of skill':''} ${!seletctedSkillType && !Skillname.trim() ? 'and':''}${!Skillname.trim()?'provide a Skill name':''}`);
    }
  };

  
  const HandleEmployemtSkills = (index) => {
    if (seletctedSkillType && Skillname.trim()!=='') {
      dispatch(AddEmploymentSkills({ index,  category: seletctedSkillType, name: Skillname}));
      setseletctedSkillType('')
      setSkillname('')
    } else {
      toast.error(`Please ${!seletctedSkillType?'select a category of skill':''} ${!seletctedSkillType && !Skillname.trim() ? 'and':''}${!Skillname.trim()?'provide a Skill name':''}`);
    }
  };

const GoToTop =()=>{
  if (Topref.current) {
    Topref.current.scrollIntoView({ top:0, behavior: 'smooth' });
  }
}



  
const HandleSubmitForm = useCallback(async (event) => {
  event.preventDefault();
  const { data, error } = await createCadidate(Candidate);
  
  if (data) {
    toast.success('Successfully created Your profile');
    dispatch(resetCandidateForm());
    setPreviewSource('');
    setFileInputState('');
    dispatch(SetCandidatedata({ avtar: '' }));
  } else if (error) {
    console.log(error);
    error.data.error && toast.error(error.data.error) || 
    error.data.message && toast.error(error.data.message) ||
    toast.error('something went wrong');
  }
}, [createCadidate, Candidate, dispatch, resetCandidateForm]);


  const countryLoading = address.countries.length === 0;
  const stateLoading = address.states.length === 0;
  const cityLoading = address.cities.length === 0;
  const [visibleCities, setVisibleCities] = useState(500);
  const totalCities = address.cities.length;
  const remainingCities = totalCities - visibleCities;
  const showLoadMore = remainingCities > 0;

 
  const handleLoadMore = useCallback(() => {
    setVisibleCities((prevVisibleCities) => prevVisibleCities + 500);
  }, [setVisibleCities]);
  
return (
  <div ref={Topref} className="min-h-screen w-11/12 mx-auto shadow-2xl max-h-full border my-2">
    <p className="bg-gradient-to-t  from-green-500 via-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent text-center my-7 max-md:text-xl">Fill Out Your Personal Information</p>
   
  <div className=" px-2 ">
  <span className='text-sm tracking-wide text-red-500'><span className='!font-bold'>*</span>All are Required</span>
  
    <div className="p-3">
      {
   
        previewSource && 

       <Fragment>
       <p className= " bg-gradient-to-t from-green-500 via-blue-600 to-purple-500 bg-clip-text text-sm font-bold text-transparent">Profile Image</p>
       <div className="relative my-3">
       <IoMdClose onClick={ClosePreview} className="absolute cursor-pointer -top-2 " size={20}/>
       <img className=" h-20 w-20 border border-gray-300 p-0.5 object-contain rounded-full shadow-lg shadow-gray-400" src={previewSource}  alt="img"  />
       </div> 
       </Fragment>
       
      }
      
      </div>
      <form onSubmit={HandleSubmitForm} >
      
      <div className="mb-6 ">
      { /* profile summary */}
 {

   step===1&& 
 
(
      <div className='  max-md:gap-y-2 gap-y-6 flex flex-wrap '>
      
      <div className="w-1/2   max-md:w-full px-3  md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='avtar' >
        Profile image
      </label>
      
      <input onChange={handleFileInputChange} value={fileInputState}
        className=" block w-full max-md:placeholder:text-sm   bg-gray-100 text-gray-700 border border-gray-200 rounded py-2.5 px-4  leading-tight focus:outline-none focus:bg-white"
        type="file" accept="image/png,.jpg,.jpeg,.png image/jpeg" name='avtar' />
    
    </div>
    

        <div className="w-1/2 max-md:w-full px-3  md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='fullname'>
            full Name
          </label>
          <input name='fullname' value={Candidate.fullname} onChange={Handlecandidate}
            className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Fullname"
          />
        </div>
   
      <div className="flex justify-between  flex-wrap w-full my-2">
        
      <div className="w-1/4 max-md:w-full px-3 my-2 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
       Gender
      </label>
      <select name="gender"  onChange={Handlecandidate} value={Candidate.gender}
      className="  max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
      <option  className='!text-sm' value="">choose Gender</option>
    {
      Gender.map((gender,i)=>(
        <option  key={i} value={gender.gender}>{gender.gender}</option>
      ))
    }
     

      </select>

    </div>

    
    <div className="w-1/4 max-md:w-full px-3 my-2 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='noticeperiod'>
     Available to Join
    </label>
      <select name="noticeperiod" id="" onChange={Handlecandidate} value={Candidate.noticeperiod}
      className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      
      >
      <option  className='!text-sm' value="">choose Notice period</option>
    {
      
      AvailableToJoin.map((jointime)=>(
        <option  key={jointime.id} value={jointime.Availablity}>{jointime.Availablity}</option>
      ))
    }
     

      </select>
    

  </div>

  <div className="w-1/4 max-md:w-full px-3 my-2 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='empstatus'>
 employment status
  </label>
    <select name="empstatus" value={Candidate.empstatus} onChange={(e)=>{dispatch(CandidateStatus(e.target.value))}}
    className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    
    >
    <option  className='!text-sm'  value=''>choose Employment status</option>
  {
    
    Status.map((employment)=>(
      <option key={employment.id} value={employment.status}>{employment.status}</option>
    ))
  }
   

    </select>


</div>


{/* current employment */}



<div className="w-1/4 max-md:w-full px-3 my-2 md:mb-0">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='currentempstatus'>
current  status
</label>
  <select name="currentempstatus" value={Candidate.currentempstatus} onChange={(e)=>dispatch(CurrentCandidateStatus(e.target.value))}
  className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  
  >
  <option className='!text-sm' value=''>--Choose Employment status--</option>
{
  
  Status.map((employment)=>(
    <option  className="hover:text-red-500" key={employment.id} value={employment.status}>{employment.status}</option>
  ))
}
 

  </select>


</div>
</div>

{/* address */}

<div className=" flex  justify-between flex-wrap w-full px-3 my-2">
       


<div className="w-1/4 max-md:w-full my-2 md:mb-0">
<label htmlFor='country' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
Country
</label>
  <select name='country' value={Candidate.country} onChange={(e) => handleCountry(e.target.value)}
  className="max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  disabled={countryLoading}
  >
  <option className='!text-sm' value=''>
        {countryLoading ? 'Loading countries...' : 'Select a country'}
      </option>

  {!countryLoading &&
    address.countries.map((country) => (
      <option key={`${country.name}-${uuidv4()}`} value={country.name}>
        {country.name}
      </option>
    ))}

  </select>


</div>





<div className="w-1/4 max-md:w-full my-2 md:mb-0">
<label htmlFor='state' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
State
</label>
  <select name="state" id="" value={Candidate.state}  onChange={(e) =>dispatch(setState(e.target.value))}
  className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  
  >
  <option className='!text-sm' value=''>Select a state</option>
  {!stateLoading &&
    address.states.map((state,i) => (
      <option key={i} value={state.name}>
        {state.name}
      </option>
    ))}

  </select>


</div>


{
  <div className="w-1/4 max-md:w-full my-2 md:mb-0">
  <label htmlFor='city' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
  City
  </label>
    <select name="city" value={Candidate.city} onChange={(e) => dispatch(setCity(e.target.value))}
    className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    disabled={cityLoading}
    >
    <option  className='!text-sm'  value="">Select a city</option>
  
    {!cityLoading &&
      address.cities.slice(0, visibleCities).map((city,i) => (
        <option key={i} value={city.name}>
          {city.name}
        </option>
      ))}
  
    </select>
    {showLoadMore && (
      <button
        onClick={handleLoadMore} type='button'
        className="mt-2 text-blue-500 hover:underline focus:outline-none"
      >
        Load More Cities ({remainingCities} remaining)
      </button>
    )}
  </div>
  
}
</div>

<div className=' w-full max-md:gap-y-2 gap-y-6 flex flex-wrap'>
<div className="w-full px-2  "> <p className="text-base px  font-semibold bg-gradient-to-t text-transparent  from-green-500 via-blue-600 to-purple-600 bg-clip-text">Contact</p> </div>
<div className="w-1/2 max-md:w-full  px-3 my-2 md:mb-0">
  <label htmlFor='email' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    email
  </label>
  <input name='email' value={Candidate.email} onChange={Handlecandidate}
    className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    type="email"
    placeholder="example@gmail.com"
  />


</div>



<div className="w-1/2 max-md:w-full px-3 my-2 md:mb-0">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='phone'>
  Mobile No.
</label>
<input name='phone' value={Candidate.phone} onChange={Handlecandidate}
  className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  type="number"
  placeholder="+91 1234567890"
/>

</div>


</div>
{ /*  summary */}
<div className="w-full px-3 mb-6 md:mb-0">
<div className="w-full ">
  <label htmlFor='summary' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
  Quick summary
  </label>
  <textarea name='summary' value={Candidate.summary} onChange={Handlecandidate}
    className="resize-none max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="grid-password"
    type="password"
    placeholder="A quick intro for yourself"
  />
  </div>
  </div>


  <div className='w-full max-md:flex-col items-center flex '>
  <div  className="w-1/3 max-md:w-full px-3 my-2 max-md:my-1 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 max-md:mb-1" htmlFor='currentempstatus'>
  social
  </label>

 
    <input type='text' placeholder='custom social' 
  
  className="mb-1 max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1.5 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setSelectedSocial(e.target.value)} value={selectedSocial}/> 
<span>or</span>
  
  <select name="name"   onChange={(e)=>setSelectedSocial(e.target.value)} value={selectedSocial}
  className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  
  >
  <option className='!text-sm' value=''>--select a social network--</option>
  {
  
  SocialLink && SocialLink.map(({name,id})=>(
    <option  className="hover:text-red-500" key={id} value={name}>{name }</option>
  ))
  }
  
  
  </select>

  
  </div>

  <div className="w-1/3 max-md:w-full px-3 my-2 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='link'>
  Add Link here
  </label>
  <input placeholder='Add link here'
  name="link"
  value={link}
  onChange={(e) => setLink(e.target.value)}
  className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
  
  
  </div>

  <div className="w-1/3 max-md:w-full px-3 my-2  md:mb-0">


  <span onClick={handleAddSocial} className="relative cursor-pointer mt-1 items-center justify-center max-md:py-1.5 inline-block p-3 px-5 py-2.5 overflow-hidden font-medium text-indigo-600 max-md:rounded-md rounded-lg shadow-xl group">
  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-blue-500 rounded-full blur-md ease"></span>
  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-600 rounded-full blur-md"></span>
  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-600 rounded-full blur-md"></span>
  </span>
  <span className="relative -tracking-tighter text-white">Add social</span>
  </span>
  
  </div>
  </div>



  <div className="grid px-1 grid-cols-4 w-full gap-2 max-md:lg:gap-1 max-md:grid-cols-2 ">
  
{
Candidate.social[0].name!==''&& Candidate.social[0].link!=='' &&  Candidate.social.map(({name,link},index)=>(
<div  key={index}>
<div className='flex flex-wrap relative'>
<span>{name}</span>
<IoMdCloseCircleOutline onClick={()=>{dispatch(DeleteSocial(index))}} color='black' className='h-5 w-5 absolute !cursor-pointer top-4 -right-1' />
</div>
<div className="rounded-md p-2 break-words   bg-blue-100 my-1">{link}</div>




</div>
  ))
}


</div>



<div className='w-full max-md:flex-col items-center flex '>
<div  className="w-1/3 max-md:w-full px-3 my-2 max-md:my-1 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 max-md:mb-1" htmlFor='currentempstatus'>
  Skill
  </label>
  <select name="skilltype"   onChange={(e)=>setseletctedSkillType(e.target.value)} value={seletctedSkillType}
  className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  
  >
  <option className='!text-sm' value=''>--select a category--</option>
  {
    
    skillcategory && skillcategory.map(({id,type})=>(
    <option  className="hover:text-red-500" key={id} value={type}>{type}</option>
  ))
  }
  
  
  </select>
  
  
  </div>

  <div className="w-1/3 max-md:w-full px-3 my-2 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='link'>
  Add Skills
  </label>
  <input placeholder='Add skill here'
  name="Skillname"
  value={Skillname}
  onChange={(e) => setSkillname(e.target.value)}
  className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
  
  
  </div>

  <div className="w-1/3 max-md:w-full px-3 my-2  md:mb-0">
 
  { /* <button onClick={handleAddSocial} className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  px-4 rounded ">
  Add Social Link
</button>*/}

<span onClick={HandleAddSkill} className="relative cursor-pointer mt-1 items-center justify-center inline-block p-3 px-5 max-md:py-1.5 py-2.5 max-md:rounded-md overflow-hidden font-medium text-indigo-600 rounded-lg shadow-xl group">
<span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-blue-500 rounded-full blur-md ease"></span>
<span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-600 rounded-full blur-md"></span>
<span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-600 rounded-full blur-md"></span>
</span>
<span className="relative -tracking-tighter text-white">Add Skills</span>
</span>





  </div>
  </div>
  
  <div className="grid px-1 grid-cols-4 w-full gap-2 max-md:lg:gap-1 max-md:grid-cols-2 ">
  
  {
  Candidate.skills[0].skilltype!==''&& Candidate.skills[0].name!=='' &&  Candidate.skills.map(({skilltype, name},index)=>(
  <div key={index}>
  <div className='flex relative'>
  <span>{skilltype}</span>
  <IoMdCloseCircleOutline onClick={()=>{dispatch(DeleteSkill(index))}} color='black' className='h-5 w-5 absolute !cursor-pointer top-4 -right-1' />
  </div>
  <div className="rounded-md p-2  bg-blue-100 my-1">{name}</div>
  </div>
    ))
  }
  
  
  </div>

      </div>
  )
}



 {
  step===2 && (
    <div className='w-full mb-6 md:mb-0 '>
   
    <div className="flex   items-center justify-between  flex-wrap w-full  mt-5  ">
   <p className="text-base font-semibold bg-gradient-to-t text-transparent   from-green-500 via-blue-600 to-purple-600 bg-clip-text">Education</p>
   <button onClick={()=>{dispatch(AddMoreEducation())}} 
   className="group relative inline-flex items-center overflow-hidden tracking-wider rounded bg-indigo-600  px-4 py-1 text-white focus:outline-none focus:ring-2 active:bg-indigo-500">
   <span className="absolute -start-full transition-all group-hover:start-4">
    <GoPlus color='white' className='h-7  font-black ' />
   </span>
   
   <span className="text-sm font-medium transition-all group-hover:ms-4">
   Add education
   </span>
   </button>
   </div>
   
{
  
  Candidate.education && Candidate.education.map((edu, index) => (
 
    

    <Fragment key={index}>
 <div className='flex justify-end'> 
 <button onClick={()=>{DeletEducation(index)}}
   className=" relative text-sm inline-flex items-center overflow-hidden rounded bg-red-500 my-2 px-3 py-1 text-white/95 focus:outline-none "
   >Delete education</button></div>
   <motion.div initial={{ scale: 0 }}  animate={{ scale: 1 }} transition={{type: "just",stiffness: 260,damping: 20 }}
    
   className="flex flex-wrap items-center max-md:flex-col justify-between">
    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='institute' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    institute
    </label>
    
    <input
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
    type="text" name='institute' onChange={(e)=>handleEducationChange(e, index)} value={edu.institute}
    placeholder="school or institute name "
    />
    
     
    </div>
    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='degree' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    Deegree name 
    </label>
    
    <input
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
    type="text" name='degree'   
    placeholder="Deegree name" onChange={(e)=>handleEducationChange(e, index)} value={edu.degree}
    />
    
    </div>
    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='fieldofstudy' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    field of study
    </label>
    
    <input
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="text" name="fieldofstudy"
    placeholder="computer science"  onChange={(e)=>handleEducationChange(e, index)} value={edu.fieldofstudy}
    />
    
    </div>
    
    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='startdate' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    start date :
    </label>
    
    <input placeholder='date' onChange={(e)=>handleEducationChange(e, index)} value={edu.startdate}
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="month"  name="startdate" 
    />
    
    </div>
    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='enddate' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    End date (or expected)
    </label>
    
    <input
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="month"  name="enddate"  onChange={(e)=>handleEducationChange(e, index)} value={edu.enddate}
    />
     
    </div>
    
    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='percentage' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    Percentage
    </label>
    
    <input
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="text"  name="percentage"    onChange={(e)=>handleEducationChange(e, index)} value={edu.percentage}
    />
    
    </div>
    
    <div className="w-1/4 max-md:w-full my-2 md:mb-0">
   <label htmlFor='qualification' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
Qualification
</label>
  <select name='qualification'  onChange={(e)=>handleEducationChange(e, index)} value={edu.qualification}
  className="max-md:placeholder:text-sm overflow-scroll block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  
  >
  <option  className='!text-sm' value=''>Select a Qualification</option>
  {
    qualifications&&qualifications.map(({id,level, description}) => ( 
    <option key={id}  value={level}> 
      {level} {(description)}
       </option>
  ))
  }
  </select>
  
  </div>
    </motion.div>
    </Fragment>
  ))
} 
   </div>
   )
 }

 

 


 {
  step===3 && (
    <div className='w-full mb-6 md:mb-0 '>
   
    <div className="flex   items-center justify-between  flex-wrap w-full  mt-5  ">
   <p className="text-base font-semibold bg-gradient-to-t text-transparent   from-green-500 via-blue-600 to-purple-600 bg-clip-text">Exprience</p>
   <button onClick={()=>{dispatch(AddMoreEmployment())}} 
   className="group relative inline-flex items-center overflow-hidden tracking-wider rounded bg-indigo-600  px-4 py-1 text-white focus:outline-none focus:ring-2 active:bg-indigo-500">
   <span className="absolute -start-full transition-all group-hover:start-4">
   <GoPlus color='white' className='h-7  font-black ' />
   </span>
   
   <span className="text-sm font-medium transition-all group-hover:ms-4">
   Add Exprience
   </span>
   </button>
   </div>
   
{

  Candidate.employment.map((employment, ind) => (
 
    

    <Fragment key={ind}>
 <div className='flex justify-end'> 
 <button onClick={()=>{DeletEmployment(ind)}}
   className=" relative text-sm inline-flex items-center overflow-hidden rounded bg-red-500 my-2 px-3 py-1 text-white/95 focus:outline-none "
   >Delete Exprience</button></div>
    <motion.div initial={{ scale: 0 }}  animate={{ scale: 1 }} transition={{type: "just",stiffness: 260,damping: 20 }}
    
     className="flex flex-wrap items-center max-md:flex-col justify-between">

     <div className="w-30 max-md:w-full my-2 md:mb-0">
     <label htmlFor='orgname' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
     Organization name
     </label>
     
     <input
     className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
     type="text" name='orgname'   
     placeholder="Organization name" onChange={(e)=>handleEmploymentChange(e, ind)} value={employment.orgname}
     />
     
     </div>

     <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='position' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    position name
    </label>
    
    <input
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
    type="text" name='position' onChange={(e)=>handleEmploymentChange(e, ind)} value={employment.position}
    placeholder="Position name "
    />
    
    </div>

    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='empcategory' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    Job Category
    </label>
    
  <select value={employment.empcategory} onChange={(e)=>handleEmploymentChange(e, ind)}
  className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  name="empcategory" id="">
  <option value="">Select a Job Category</option>
{
  jobCategories && 
  jobCategories.map(({id,name})=>(
    <option key={id} value={name}>{name}</option>
  ))
}
  </select>
    
    </div>


    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='emplevel' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    Level
    </label>
    
  <select  value={employment.emplevel} onChange={(e)=>handleEmploymentChange(e, ind)}
  className="max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  name="emplevel" id="">
  <option value="">Select a Job Level</option>
{
  Joblevel && 
  Joblevel.map(({level, id})=>(
    <option className='!capitalize' key={id} value={level}>{level}</option>
  ))
}
  </select>
    
    </div>



    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='emptype' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    Job Type
    </label>
    
  <select value={employment.emptype} onChange={(e)=>handleEmploymentChange(e, ind)}
  className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  name="emptype" id="">
  <option value="">Select a Job Type</option>
{
  Jobtype && 
  Jobtype.map(({id,time})=>(
    <option className='!capitalize' key={id} value={time}>{time}</option>
  ))
}
  </select>
    
    </div>
    
    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='startdate' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    start date :
    </label>
    
    <input placeholder='date' onChange={(e)=>handleEmploymentChange(e, ind)} value={employment.startdate}
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="month"  name="startdate" 
    />
    
    </div>
    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='enddate' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    End date (or expected)
    </label>
    <input
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="month"  name="enddate"  onChange={(e)=>handleEmploymentChange(e, ind)} value={employment.enddate}
    />
     
    </div>


   <div className='w-full max-md:flex-col gap-x-2 items-center flex '>
   <div  className="w-1/3 max-md:w-full  my-2 max-md:my-1 md:mb-0">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 max-md:mb-1" htmlFor='category'>
     Skill category
     </label>
     <select name="category"   onChange={(e)=>setseletctedSkillType(e.target.value)} value={seletctedSkillType}
     className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
     
     >
     <option className='!text-sm' value=''>--select a category--</option>
     {
       
       skillcategory && skillcategory.map(({id,type})=>(
       <option  className="hover:text-red-500" key={id} value={type}>{type}</option>
     ))
     }
     
     
     </select>
     
     
     </div>
   
     <div className="w-1/3 max-md:w-full  my-2 md:mb-0">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='name'>
     Add Skills
     </label>
     <input placeholder='Add skill here'
     name="name"
     value={Skillname}
     onChange={(e) => setSkillname(e.target.value)}
     className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
     
     
     </div>
     
     <div className="w-1/3 max-md:w-full px-3 my-2  md:mb-0">
    

   <span onClick={()=>{HandleEmployemtSkills(ind)}} className="relative cursor-pointer mt-1 items-center justify-center inline-block p-3 px-5 max-md:py-1.5 py-2.5 max-md:rounded-md overflow-hidden font-medium text-indigo-600 rounded-lg shadow-xl group">
   <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-blue-600 rounded-full blur-md ease"></span>
   <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
   <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-400 rounded-full blur-md"></span>
   <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-400 rounded-full blur-md"></span>
   </span>
   <span className="relative -tracking-tighter text-white">Add Skills</span>
   </span>
     </div>
     </div>
     
     <div className="grid px-1 grid-cols-4 w-full gap-2 max-md:lg:gap-1 max-md:grid-cols-2 ">
     
     { 
      Candidate.employment[ind].workskills[0].category!==''&& Candidate.employment[ind].workskills[0].name!=='' &&   Candidate.employment[ind].workskills.map(({category, name},index)=>(
     <div key={index}>
     <div className='flex relative'>
     <span>{category}</span>
     <IoMdCloseCircleOutline onClick={()=>{dispatch(DeleteEmploymentSkills({ind,index}))}} color='black' className='h-5 w-5 absolute !cursor-pointer top-4 -right-1' />
     </div>
     <div className="rounded-md p-2  bg-blue-100 my-1">{name}</div>
     
     
     
     
     </div>
       ))
    
     }
     
     
     </div>


    </motion.div>
    </Fragment>
  ))
}   

</div>

)
}



{
  step===4 && (
    <div className='w-full mb-6 md:mb-0 '>
   
    <div className="flex   items-center justify-between  flex-wrap w-full  mt-5  ">
   <p className="text-base font-semibold bg-gradient-to-t text-transparent   from-green-500 via-blue-600 to-purple-600 bg-clip-text">Project</p>
   <button onClick={()=>{dispatch(AddProject())}} 
   className="group relative inline-flex items-center overflow-hidden tracking-wider rounded bg-indigo-600  px-4 py-1 text-white focus:outline-none focus:ring-2 active:bg-indigo-500">
   <span className="absolute -start-full transition-all group-hover:start-4">
    <GoPlus color='white' className='h-7  font-black ' />
   </span>
   
   <span className="text-sm font-medium transition-all group-hover:ms-4">
   Add More Project
   </span>
   </button>
   </div>
   
{
  
  Candidate.project.map((
    {title,status,description,startdate, enddate,githublink, livelink,role_desc, projectrole, client}
    , index) => (
 
    

    <Fragment key={index}>
 <div className='flex justify-end'> 
 <button onClick={()=>{DeleteProject(index)}}
   className=" relative text-sm inline-flex items-center overflow-hidden rounded bg-red-500 my-2 px-3 py-1 text-white/95 focus:outline-none "
   >Delete Project</button></div>
   <motion.div initial={{ scale: 0 }}  animate={{ scale: 1 }} transition={{type: "just",stiffness: 260,damping: 20 }}
    
   className="flex flex-wrap items-center max-md:flex-col justify-between">
    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='title' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    Title
    </label>
    
    <input 
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
    type="text" name='title' onChange={(e)=>handleProjectChange(e, index)} value={title}
    placeholder="Project title "
    />
    
     
    </div>

    <div className="w-30 max-md:w-full  md:mb-0">
    <label htmlFor='client' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    Project type
    </label>
    
  <ul className="items-center w-full bg-gray-100 flex-wrap py-0.5   border  border-gray-300  text-sm rounded-lg sm:flex">
    <li className="border-b  sm:border-b-0 ">
        <div className="flex items-center ps-3">
            <input   
            checked={client === "peronal project"}
            onChange={(e)=>handleProjectChange(e, index)}
            type="radio" value="peronal project" name="client" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100  "/>
            <label htmlFor="client" className="w-full py-3 ms-2 text-sm font-normal ">Personal Project</label>
        </div>
    </li>
    <li className="border-b  sm:border-b-0 ">
        <div className="flex items-center ps-3">
            <input   checked={client === "client project"}
            onChange={(e)=>handleProjectChange(e, index)}
            type="radio" value="client project" name="client"  className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100  "/>
            <label htmlFor="client" className="w-full py-3 ms-2 text-sm font-normal ">Client Project</label>
        </div>
    </li>
    <li className="border-b  sm:border-b-0 ">
        <div className="flex items-center ps-3">
            <input checked={client === "others"}
            onChange={(e)=>handleProjectChange(e, index)}
            type="radio" value="others" name="client" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100  "/>
            <label htmlFor="client" className="w-full py-3 ms-2 text-sm font-normal ">Others</label>
        </div>
    </li>
    </ul>
    
    </div>
       
    <div className="w-30 max-md:w-full my-1 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    Project Status
    </label>
    
  <ul className="items-center w-full bg-gray-100 border  border-gray-300 text-sm rounded-lg sm:flex">
    <li className="w-full border-b  sm:border-b-0 ">
        <div className="flex items-center ps-3">
            <input  type="radio"
            checked={status === "in progress"}
            onChange={(e)=>handleProjectChange(e, index)}
             value={"in progress"} name="status" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100  "/>
            <label htmlFor="status" className="w-full py-3 ms-2 text-sm font-normal ">In Progress </label>
        </div>
    </li>
    <li className="w-full border-b  sm:border-b-0 ">
        <div className="flex items-center ps-3">
            <input  type="radio"
            checked={status === "finished"}
            onChange={(e)=>handleProjectChange(e, index)}
             value={"finished"} name="status" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100  "/>
            <label htmlFor="status" className="w-full py-3 ms-2 text-sm font-normal ">Finished </label>
        </div>
    </li>
    
    </ul>
    
    </div>
    <div className="w-full max-md:w-full my-2 md:mb-0">
    <label htmlFor='projectrole' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    Role of Project
    </label>
    
    <textarea
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
     name="projectrole"
    placeholder="Your Role in this Project"  onChange={(e)=>handleProjectChange(e, index)} value={projectrole}
    />
    
    </div>
    
    <div className="w-full max-md:w-full my-2 md:mb-0">
    <label htmlFor='description' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
   Project Description
    </label>
    
    <textarea placeholder='Type here...' onChange={(e)=>handleProjectChange(e, index)} value={description}
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="text"  name="description" 
    />
    
    </div>
    <div className="w-1/3 max-md:w-full my-2 md:mb-0">
    <label htmlFor='startdate' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    start date :
    </label>
    
    <input placeholder='date' onChange={(e)=>handleProjectChange(e, index)} value={startdate}
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="month"  name="startdate" 
    />
    
    </div>
    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='enddate' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    End date (or expected)
    </label>
    
    <input onChange={(e)=>handleProjectChange(e, index)} value={enddate}
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="month"  name="enddate" 
    />
     
    </div>
    


    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='githublink' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    github link :
    </label>
    
    <input placeholder='github link or code link' onChange={(e)=>handleProjectChange(e, index)} value={githublink}
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="text"  name="githublink" 
    />
    
    </div>

    <div className="w-30 max-md:w-full my-2 text-center md:mb-0 max-lg:hidden">
    <span className='text-lg font-semibold bg-gradient-to-t text-transparent from-green-500 via-blue-600 to-purple-600 bg-clip-text '> Let&apos;s craft your career journey together</span>

    </div>


    <div className="w-30 max-md:w-full my-2 md:mb-0">
    <label htmlFor='livelink' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    Live link
    </label>
    
    <input
    className="max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="text"  placeholder='live link Add here' name="livelink"  onChange={(e)=>handleProjectChange(e, index)} value={livelink}
    />
     
    </div>


    <div className="w-full max-md:w-full my-2 md:mb-0">
    <label htmlFor='role_desc' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    Role description
    </label>
    
    <textarea placeholder='what you worked in this project..?' onChange={(e)=>handleProjectChange(e, index)} value={role_desc}
    className="  max-md:placeholder:text-sm  block w-full  bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="text"  name="role_desc" 
    />
    
    </div>


    <div className='w-full max-md:flex-col items-center flex '>
<div  className="w-1/3 max-md:w-full  my-2 max-md:my-1 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 max-md:mb-1" htmlFor='currentempstatus'>
  Skill
  </label>
  <select name="category"   onChange={(e)=>setseletctedSkillType(e.target.value)} value={seletctedSkillType}
  className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  
  >
  <option className='!text-sm' value=''>-- select a category --</option>
  {

    skillcategory && skillcategory.map(({id,type})=>(
    <option key={id} value={type}>{type}</option>
  ))
  }
  
  
  </select>
  
  
  </div>

  <div className="w-1/3 max-md:w-full  my-2 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='link'>
  Add Skills
  </label>
  <input placeholder='Add skill here'
  name="name"
  value={Skillname}
  onChange={(e) => setSkillname(e.target.value)}
  className=" max-md:placeholder:text-sm  block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
  
  
  </div>

  <div className="w-1/3 max-md:w-full px-3 my-2  md:mb-0">
 

<span onClick={()=>{HandleProjectSkills(index)}} className="relative cursor-pointer mt-1 items-center justify-center inline-block p-3 px-5 max-md:py-1.5 py-2.5 max-md:rounded-md overflow-hidden font-medium text-indigo-600 rounded-lg shadow-xl group">
<span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-blue-500 rounded-full blur-md ease"></span>
<span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-600 rounded-full blur-md"></span>
<span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-600 rounded-full blur-md"></span>
</span>
<span className="relative -tracking-tighter text-white">Add Skills</span>
</span>





  </div>


  
  </div>
  <div className="grid px-1 grid-cols-4 w-full gap-2 max-md:lg:gap-1 max-md:grid-cols-2 ">
     
  { 
   Candidate.project[index].projectskill[0].category!==''&& Candidate.project[index].projectskill[0].name!=='' &&   Candidate.project[index].projectskill.map(({category, name},skillindex)=>(
  <div key={skillindex}>
  <div className='flex relative'>
  <span>{category}</span>
  <IoMdCloseCircleOutline onClick={()=>{dispatch(DeleteProjectSkills({index,skillindex}))}} color='black' className='h-5 w-5 absolute !cursor-pointer top-4 -right-1' />
  </div>
  <div className="rounded-md p-2  bg-blue-100 my-1">{name}</div>
  
  
  
  
  </div>
    ))
 
  }
  
  
  </div>
    
   
    </motion.div>
    </Fragment>
  ))
} 
   </div>
   )
 }
   










   {/* steps */}

  <div className='w-full flex max-md:flex-col mt-3 '>
   <div className='max-md:w-full w-3/4 '>
  
   
   <div className=''>
   <ol className="grid gap-2  grid-cols-1 divide overflow-hidden   text-xs  sm:grid-cols-4">
       <li onClick={()=>{setStep(1), GoToTop()}} className=
       { 
        step ===1 ?
        "flex py-2 mx-1 border rounded-md   !text-gray-600  border-gray-400 bg-gray-400 cursor-pointer bg-opacity-20 items-center justify-center gap-2 px-4" :
        "flex py-2 mx-1 border rounded-md  !text-gray-400  border-gray-300  cursor-pointer bg-opacity-20 items-center justify-center gap-2 px-4"
      }  
      >
        
         <p  className="leading-none flex gap-x-1">
         <strong className="block font-semibold"> Personal Information </strong>
           <HiMiniInformationCircle/> 
           </p>
           </li>
 
           <li  onClick={()=>{setStep(2), GoToTop()}} className= 
       { 
         step ===2 ?
        "flex py-2 mx-1 border rounded-md   !text-gray-600  border-gray-400 bg-gray-400 cursor-pointer bg-opacity-20 items-center justify-center gap-2 px-4" :
        "flex py-2 mx-1 border rounded-md  !text-gray-400  border-gray-300  cursor-pointer bg-opacity-20 items-center justify-center gap-2 px-4"
      }  >
        
      <p className="leading-none flex gap-x-1">
           <strong className="block font-semibold"> Education </strong>
           <IoBook/> 
         </p>
         </li>
 
         <li  onClick={()=>{setStep(3), GoToTop()}} className= 
       { 
         step ===3 ?
         "flex py-2 mx-1 border    rounded-md   !text-gray-600  border-gray-400 bg-gray-400 cursor-pointer bg-opacity-20 items-center justify-center gap-2 px-4" :
         "flex py-2 mx-1 border   rounded-md  !text-gray-400  border-gray-300  cursor-pointer bg-opacity-20 items-center justify-center gap-2 px-4"
        } >
        
         <p className="leading-none flex gap-x-1">
         <strong className="block font-semibold"> Employment </strong>
           <PiSuitcaseSimpleFill /> 
         </p>
         </li>


         <li  onClick={()=>{setStep(4), GoToTop()}} className= 
       { 
         step ===4 ?
         "flex py-2 mx-1 border   rounded-md   !text-gray-600  border-gray-400 bg-gray-400 cursor-pointer bg-opacity-20 items-center justify-center gap-2 px-4" :
         "flex py-2 mx-1 border   rounded-md  !text-gray-400  border-gray-300  cursor-pointer bg-opacity-20 items-center justify-center gap-2 px-4"
        } >
        
         <p className="leading-none flex gap-x-1">
         <strong className="block font-semibold"> Project </strong>
         <GoProjectRoadmap />
         </p>
         </li>
         </ol>
         </div>

         

         
 </div>
 
 <div className=' w-1/2  max-md:w-full  max-md:mt-4 '>

 
 <div className='w-full  flex justify-end '>
   <ol
   className=" divide overflow-hidden  gap-x-5 text-xs  flex justify-end"
   >
   {
    step !==1 && (
      <button 
     onClick={() => {
      setStep((prevStep) => {
        if (prevStep > 1) {
          return prevStep - 1; 
        } else {
          return 1; 
        }
      }), GoToTop()
    }}
     type='button'
    className="flex   py-2.5 mx-1 border   rounded-md  hover:bg-gray-50 !text-gray-600  border-gray-400 bg-gray-400 cursor-pointer bg-opacity-20 items-center justify-center gap-2 px-4"  >
      
       <p  className="leading-none flex gap-x-1">
       <FaAngleLeft/> 
         <strong className="block font-semibold"> Previous </strong>
         </p>
     </button>
    )
   }

    {
      step !==4 &&
      (
        <button 
      onClick={() => {
        setStep((prevStep) => {
         if (prevStep < 4) {
           return prevStep + 1; 
         } else {
           return 4; 
         }
       }),  GoToTop()
     }}
     type='button'
      className="flex py-2.5 mx-1 border rounded-md !text-gray-600 hover:bg-gray-50 border-gray-400 bg-gray-400 cursor-pointer bg-opacity-20 items-center justify-center gap-2 px-4"  >
       
      <p  className="leading-none flex gap-x-1">
        <strong className="block font-semibold"> Next </strong>
        <FaAngleRight/>
      </p>
      </button>
      )
    }

     
     </ol>
     </div>
</div>

 </div>
 
    <div className=" w-full mx-3 my-3 ">
      
    <button type='submit'    onClick={HandleSubmitForm}
  className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-2 text-white focus:outline-none focus:ring-2 active:bg-indigo-500">
  <span className="absolute -start-full  transition-all group-hover:start-4">
   <img src={rightarrow} className="h-5 " alt="" />
  </span>
  
  <span className="text-sm font-medium transition-all group-hover:ms-4">
  Submit Information
  </span>
  </button>
        
        </div>
        



     
     </div>
      </form>
    </div>
    </div>
    )
})

export default CreateCandidate






