import { Fragment, useCallback, useState  } from 'react';
import logo from "../assets/logo.svg"
import { Link, NavLink } from 'react-router-dom';
// import useStickyHeader from '../../hooks/Usesticky';
import DarkLightmode from './theme/DarkLightmode';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 return (
    <Fragment>
    {/*navbar */}
   <nav className=  {"z-40   bg-slate-200/90 backdrop-blur-md sticky top-0  shadow-md flex  items-center  py-0.5 justify-between px-2 flex-wrap max-md:p-1"}>
   
    {/*logo */}
 
    <Link to={"/"} className="flex items-centerflex-shrink-0  mr-6 lg:mr-72">   <img src={logo} className="w-100 h-7 mr-2" alt="Logo" /> <span className='text-blue-500 font-bold text-lg'>JobBee</span></Link>

     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current   h-5 w-6 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-5 w-6  ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full my-2 px-2 block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow">
       <NavLink
       to="/findjobs"
       className={({ isActive }) =>
         isActive ? "text-blue-500 transition-colors delay-200 font-semibold text-base block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4" : "text-gray-600 font-semibold text-base block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
       }
     >
       Find Jobs
     </NavLink>
     
       

         <NavLink
         to="/browsecompanies"
         className={({ isActive }) =>
           isActive ? "text-blue-500  transition-colors delay-200 font-semibold text-base block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4" : "text-gray-600 font-semibold text-base block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
         }
       >
         Browse Companies
       </NavLink>
       
 
       </div>
       <div className='flex items-center gap-x-3'>
      <DarkLightmode/>
       <Link to={'/login'}>
       <button  className="inline-flex  items-center border-0 py-2 px-4 text-blue-500">
        <img src="https://www.w3schools.com/w3images/avatar2.png" className='h-7 rounded-full' alt="" />
       </button>
         </Link>
    
         <Link
         to={'/login'}
         className="inline-flex border hover:border-blue-500  rounded-md tracking-wider items-center hover:bg-slate-50 hover:text-black transition-colors bg-blue-500  py-2 px-4 text-white">
         Log in
         </Link>
  
        <Link
        to={'/register'}
        className="inline-flex border hover:border-blue-500  rounded-md tracking-wider items-center hover:bg-slate-50 hover:text-black transition-colors bg-blue-500  py-2 px-4 text-white">
        Register
        </Link>
     
        
       </div>
     </div> 
     
   </nav>
   </Fragment>
 );
}
export default Navbar;