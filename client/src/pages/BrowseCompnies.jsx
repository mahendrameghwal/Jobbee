import BrowseCompniesCard from "../components/BrowseCompniesCard"
import Orgcategory from "../data/OrgCategory"


const BrowseCompnies = () => {

  return (
    <section>
    <div className="flex  bg-slate-900 items-center bg-cover bg-bottom p-8 md:py-32 md:px-16">
    <form className="bg-slate-700 bg-smoke-dark max-md:p-2 p-6  rounded-md w-full shadow-lg"> 
      <h1 className=" capitalize  text-2xl md:text-3xl tracking-wider text-center font-medium text-white mb-8">Find your dream Companies today</h1>
      <div className=" flex flex-wrap items-end -mx-3">
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">Company name</label>
          <input className="block w-full max-md:py-1.5 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-password" type="search" placeholder="Company name"/>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-city">City</label>
          <input className="block w-full max-md:py-1.5 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="text" placeholder="City"/>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-state">
         category
        </label>
          <div className="relative">
            <select className="block max-md:py-1.5 w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-2.5 px-1  rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-state">
            <option>select a category</option>
            {
              Orgcategory ? 
              Orgcategory.map((catgory)=>(
                <option value={catgory.name && catgory.name.toLocaleLowerCase()} key={catgory.id}>{catgory.name}</option>
              )): <option>select a category</option>
            }
          </select>
            
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 md:mb-0">
        <button className="relative w-full p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
        <span className="w-full h-full bg-gradient-to-br from-[#0571ff] via-[#5487ff] to-[#00aaff] group-hover:from-[#3375e7] group-hover:via-[#3186f5] group-hover:to-[#3545d8] absolute"></span>
        <span className="relative w-full px-6 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative capitalize tracking-widest font-medium text-sm text-white">search</span>
        </span>
        </button>
        </div>

        
      </div>
  
    </form>
  
  </div>
    <BrowseCompniesCard/>
  </section>
  )
}

export default BrowseCompnies