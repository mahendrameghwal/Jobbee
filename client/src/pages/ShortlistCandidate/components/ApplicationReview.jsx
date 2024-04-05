import React, { useState, useEffect } from "react";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
import dribble from "../../../assets/dribble.svg";
import twitter from "../../../assets/twitter.svg";
import { BiDislike, BiLike, BiShow } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import {motion } from "framer-motion";
const ApplicationReview = () => {
  const [IsVisible, setIsVisible] = useState(false);
  console.log(IsVisible);

  const toggleFilter = () => {
    setIsVisible(prev => !prev);
  };

  const SearchCandidateByStatus = () => {
    toggleFilter();
  };

  return (
    <motion.section 
    initial={{ opacity: 0, scale:1 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6 }}
    className="bg-gray-50 shadow-md my-1  ">
      <div className="mx-auto  ">
        <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <button
                  onClick={toggleFilter}
                  className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-1 focus:ring-gray-200 "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-4 w-4 mr-2 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Filter
                  <svg
                    className="-mr-1 ml-1.5 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                </button>
                {IsVisible && (
                  <div className="z-10  transform translate-y-0 filter-component absolute top-10% left-5%  max-md:top-15% w-48 p-3  bg-white rounded-lg shadow ">
                    <h6 className="mb-2 text-sm font-medium text-blue-600 ">
                      Choose Status
                    </h6>
                    <ul
                      className="space-y-2 text-sm"
                      aria-labelledby="filterDropdownButton"
                    >
                      <li className="flex items-center">
                        <input
                          id="apple"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 "
                        />
                        <label
                          htmlFor="pending"
                          className="ml-2 text-sm font-medium text-amber-500 capitalize "
                        >
                          pending
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="apple"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 "
                        />
                        <label
                          for="apple"
                          className="ml-2 text-sm font-medium text-green-500 "
                        >
                          Shortlisted
                        </label>
                      </li>
                      <li className="flex items-center ">
                        <input
                          id="apple"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 "
                        />
                        <label
                          for="apple"
                          className="ml-2 text-sm font-medium text-red-500 "
                        >
                          Rejected
                        </label>
                      </li>
                    </ul>
                    <button
                      onClick={SearchCandidateByStatus}
                      className="  bg-blue-500 w-full text-gray-100 hover:text-gray-200 font-bold capitalize tracking-wider text-sm px-4 py-1.5 mt-1 rounded shadow hover:shadow-md outline-none focus:outline-none  ease-linear transition-all duration-150"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs uppercase rounded-md bg-custom-blue text-white ">
                <tr>
                  <th className="px-1 py-3 ">name</th>
                  <th className="px-1 py-3 ">status</th>
                  <th className="px-1 py-3 ">Social</th>
                  <th className="px-1 py-3 ">Profile</th>
                  <th className="px-1 py-3 ">Acion</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="pl-1 font-medium text-gray-900 whitespace-nowrap ">
                    Apple iMac 27
                  </td>
                  <tr className=" py-0.5 border-b border-gray-700">
                    <td className="  flex items-center">
                      <span className="inline-flex items-center justify-center border rounded-md bg-red-100 px-2.5 py-0.5 text-red-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="-ms-1 me-1.5 h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>

                        <p className="whitespace-nowrap text-sm">Rejected</p>
                      </span>
                    </td>
                  </tr>
                  <td className=" py-0.5">
                    <span className="flex gap-x-1 items-center flex-wrap gap-2 ">
                      <img src={github} alt="github" />{" "}
                      <img src={linkedin} alt="github" />
                      <img src={dribble} alt="github" />
                      <img src={twitter} alt="github" />{" "}
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="text-blue-700 hover:text-white border border-blue-700 hover:bg-custom-blue focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm px-2 py-0.5 text-center inline-flex items-center gap-x-1 justify-center me-2 mb-2"
                    >
                      <span className="max-md:hidden">See profile</span>{" "}
                      <BiShow />
                    </button>
                  </td>

                  <td className=" py-2 flex items-center text-left">
                    <button
                      id="apple-imac-27-dropdown-button"
                      data-dropdown-toggle="apple-imac-27-dropdown"
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="rows"
                    className="pl-1 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Apple iMac 20
                  </th>
                  <td className="py-0.5 border-b border-gray-700">
                    <td className=" flex items-center">
                      <span className="inline-flex items-center justify-center border rounded-md bg-red-100 px-2.5 py-0.5 text-red-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="-ms-1 me-1.5 h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>

                        <p className="whitespace-nowrap text-sm">Rejected</p>
                      </span>
                    </td>
                  </td>
                  <td className="py-0.5 bord">
                    <span className="flex gap-x-1  flex-wrap gap-2 ">
                      <img src={github} alt="github" />{" "}
                      <img src={linkedin} alt="github" />
                      <img src={dribble} alt="github" />
                      <img src={twitter} alt="github" />{" "}
                    </span>
                  </td>
                  <td className="  border-b border-gray-700">
                    <button
                      type="button"
                      class="text-blue-700 hover:text-white border border-blue-700 hover:bg-custom-blue focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm px-2 py-0.5 text-center inline-flex items-center gap-x-1 justify-center me-2 mb-2"
                    >
                      <span className="max-md:hidden">See profile</span>
                      <BiShow />
                    </button>
                  </td>
                  <td className="py-2 flex items-center text-left">
                    <button
                      id="apple-imac-20-dropdown-button"
                      data-dropdown-toggle="apple-imac-20-dropdown"
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className=" pl-1 font-medium text-gray-900 whitespace-nowrap ">
                    Apple iPhone 14
                  </th>
                  <td className=" flex items-center">
                    <span className="inline-flex items-center justify-center border rounded-md bg-red-100 px-2.5 py-0.5 text-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>

                      <p className="whitespace-nowrap text-sm">Rejected</p>
                    </span>
                  </td>
                  <td>
                    <span className="flex gap-x-1 items-center flex-wrap gap-2 ">
                      <img src={github} alt="github" />{" "}
                      <img src={linkedin} alt="github" />
                      <img src={dribble} alt="github" />
                      <img src={twitter} alt="github" />
                    </span>
                  </td>
                  <td className=" border-b border-gray-700">
                    <button
                      type="button"
                      class="text-blue-700 hover:text-white border border-blue-700 hover:bg-custom-blue focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm px-2 py-0.5 text-center inline-flex items-center gap-x-1 justify-center me-2 mb-2"
                    >
                      <span className="max-md:hidden">See profile</span>
                      <BiShow />
                    </button>
                  </td>
                  <td className="py-2 flex items-center text-left">
                    <button
                      id="apple-iphone-14-dropdown-button"
                      data-dropdown-toggle="apple-iphone-14-dropdown"
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th className="pl-1 font-medium text-gray-900 whitespace-nowrap ">
                    Apple iPad Air
                  </th>
                  <td className="flex items-center">
                    <span className="inline-flex items-center border justify-center rounded-md bg-amber-100 px-2 py-0.5 text-amber-700">
                      <svg
                        className="mr-1"
                        height="14px"
                        width="14px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 500 500"
                        xmlSpace="preserve"
                        fill="#dea11b"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g >
                          {" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M251,492c-64.374,0-124.894-25.068-170.412-70.587C35.069,375.894,10,315.373,10,251 S35.069,126.106,80.588,80.587C126.106,35.068,186.626,10,251,10s124.894,25.068,170.412,70.587 C466.931,126.106,492,186.627,492,251s-25.069,124.894-70.588,170.413C375.894,466.932,315.374,492,251,492z M251,70.756 c-99.387,0-180.244,80.857-180.244,180.244S151.613,431.244,251,431.244S431.244,350.387,431.244,251S350.387,70.756,251,70.756z "></path>{" "}
                                <path d="M251,502c-67.045,0-130.076-26.108-177.483-73.516C26.108,381.075,0,318.043,0,251S26.108,120.925,73.517,73.516 C120.924,26.108,183.955,0,251,0s130.076,26.108,177.483,73.516C475.892,120.925,502,183.957,502,251 s-26.108,130.075-73.517,177.484C381.076,475.892,318.045,502,251,502z M251,20c-61.702,0-119.711,24.028-163.341,67.658 C44.028,131.29,20,189.298,20,251s24.028,119.71,67.659,163.342C131.289,457.972,189.298,482,251,482 s119.711-24.028,163.341-67.658C457.972,370.71,482,312.702,482,251s-24.028-119.71-67.659-163.342 C370.711,44.028,312.702,20,251,20z M251,441.244c-104.901,0-190.244-85.343-190.244-190.244S146.099,60.756,251,60.756 S441.244,146.099,441.244,251S355.901,441.244,251,441.244z M251,80.756c-93.873,0-170.244,76.371-170.244,170.244 S157.127,421.244,251,421.244S421.244,344.873,421.244,251S344.873,80.756,251,80.756z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                            <path d="M343,263c5.522,0,10-4.477,10-10s-4.478-10-10-10h-83V107c0-5.523-4.478-10-10-10s-10,4.477-10,10v146 c0,5.523,4.478,10,10,10H343z"></path>{" "}
                            <g>
                              {" "}
                              <path d="M250,405c-61.364,0-116.387-36.553-140.174-93.123c-2.142-5.091,0.25-10.954,5.342-13.095 c5.087-2.139,10.952,0.25,13.094,5.342C148.922,353.254,196.706,385,250,385c5.522,0,10,4.477,10,10S255.522,405,250,405z"></path>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path d="M109.529,284.002c-4.874,0-9.144-3.569-9.879-8.535C98.555,268.079,98,260.521,98,253c0-5.523,4.478-10,10-10 s10,4.477,10,10c0,6.542,0.482,13.115,1.434,19.534c0.81,5.463-2.962,10.548-8.426,11.358 C110.512,283.966,110.018,284.002,109.529,284.002z"></path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                      <p className="whitespace-nowrap text-sm">Pending</p>
                    </span>
                  </td>
                  <td className="py-0.5">
                    <span className="flex gap-x-1 items-center flex-wrap gap-2 ">
                      <img className="transform transition duration-300 
                      hover:scale-125 cursor-pointer" src={github} alt="github" />{" "}
                      <img className="transform transition duration-300 
                      hover:scale-125 cursor-pointer" src={linkedin} alt="github" />
                      <img className="transform transition duration-300 
                      hover:scale-125 cursor-pointer" src={dribble} alt="github" />
                      <img className="transform transition duration-300 
                      hover:scale-125 cursor-pointer" src={twitter} alt="github" />{" "}
                    </span>
                  </td>
                  <td className="border-b border-gray-700">
                    <button
                      type="button"
                      class="text-blue-700 hover:text-white border border-blue-700 hover:bg-custom-blue focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm px-2 py-0.5 text-center inline-flex items-center gap-x-1 justify-center me-2 mb-2"
                    >
                      <span className="max-md:hidden">See profile</span>
                      <BiShow />
                    </button>
                  </td>
                  <td className="py-2 flex items-center text-left">
                    <button
    
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th className="pl-1 font-medium text-gray-900 whitespace-nowrap ">
                    Xbox Series S
                  </th>
                  <td className="flex items-center">
                    <span className="inline-flex items-center justify-center rounded-md bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <p className="whitespace-nowrap text-sm">shortlisted</p>
                    </span>
                  </td>
                  <td className="py-0.5">
                    <span className="flex gap-x-1 items-center flex-wrap gap-2 ">
                      <img className="transform transition duration-300 
                      hover:scale-125 cursor-pointer" src={github} alt="github" />{" "}
                      <img className="transform transition duration-300 
                      hover:scale-125 cursor-pointer" src={dribble} alt="github" />
                    </span>
                  </td>
                  <td>
                    <button
                      type=" border-b border-gray-700"
                      class="text-blue-700 hover:text-white border border-blue-700 hover:bg-custom-blue focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm px-2 py-0.5 text-center inline-flex items-center gap-x-1 justify-center me-2 mb-2"
                    >
                      <span className="max-md:hidden">See profile</span>
                      <BiShow />
                    </button>
                  </td>
                  <td className="py-2 flex items-center text-left">
                    <button
                      id="xbox-series-s-dropdown-button"
                      data-dropdown-toggle="xbox-series-s-dropdown"
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th className="pl-1 font-medium text-gray-900 whitespace-nowrap ">
                    PlayStation 5
                  </th>
                  <td className="py-0.5">
                    <td className="  flex items-center">
                      <span className="inline-flex items-center justify-center border rounded-md bg-red-100 px-2.5 py-0.5 text-red-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="-ms-1 me-1.5 h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>

                        <p className="whitespace-nowrap text-sm">Rejected</p>
                      </span>
                    </td>
                  </td>
                  <td className="py-0.5">
                    <span className="flex gap-x-1 items-center flex-wrap gap-2 ">
                      <img className="ransform transition duration-300 
                                hover:scale-125 cursor-pointer" src={github} alt="github" />{" "}
                      <img className="ransform transition duration-300 
                                hover:scale-125 cursor-pointer" src={linkedin} alt="github" />
                      <img className="ransform transition duration-300 
                                hover:scale-125 cursor-pointer" src={dribble} alt="github" />
                      <img className="ransform transition duration-300 
                                hover:scale-125 cursor-pointer" src={twitter} alt="github" />{" "}
                    </span>
                  </td>
                  <td className=" border-b border-gray-700">
                    <button
                      type="button"
                      class="text-blue-700 hover:text-white border border-blue-700 hover:bg-custom-blue focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm px-2 py-0.5 text-center inline-flex items-center gap-x-1 justify-center me-2 mb-2"
                    >
                      <span className="max-md:hidden">See profile</span>
                      <BiShow />
                    </button>
                  </td>
                  <td className="py-2 flex items-center text-left">
                    <button
                      id="playstation-5-dropdown-button"
                      data-dropdown-toggle="playstation-5-dropdown"
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      
                      className="absolute z-10 w-10% max-md:right-0 max-md:w-1/3 bg-white rounded divide-y divide-gray-100 shadow-md "
                    >
                    <span className="flex flex-col  overflow-hidden rounded-md border bg-white shadow-sm">
                    <button
                      className=" flex items-center gap-x-1 justify-center py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black capitalize  focus:relative"
                    >
                      view <GrFormView size={20}/>
                    </button>
                    <button
                    className=" flex  items-center gap-x-1 justify-center py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black capitalize  focus:relative"
                  >
                    Next stage <BiLike  size={16}/>
                  </button>
                    <button
                    className=" flex items-center gap-x-1 justify-center py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black capitalize  focus:relative"
                  >
                    reject <BiDislike color="red" size={16}/>
                  </button>
                  
                 
                  </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th className="pl-1 font-medium text-gray-900 whitespace-nowrap ">
                    Xbox Series X
                  </th>
                  <td className="py-0.5">
                    <td className="  flex items-center">
                      <span className="inline-flex items-center justify-center  rounded-md bg-red-100 px-2.5 py-0.5 text-red-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="-ms-1 me-1.5 h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>

                        <p className="whitespace-nowrap text-sm">Rejected</p>
                      </span>
                    </td>
                  </td>
                  <td className="py-0.5">
                    <span className="flex gap-x-1 items-center flex-wrap gap-2 ">
                      <img className="transform transition duration-300 
                                hover:scale-125 cursor-pointer" src={github} alt="github" />{" "}
                      <img className="transform transition duration-300 
                                hover:scale-125 cursor-pointer" src={linkedin} alt="github" />
                      <img className="transform transition duration-300 
                                hover:scale-125 cursor-pointer" src={dribble} alt="github" />
                      <img className="transform transition duration-300 
                                hover:scale-125 cursor-pointer" src={twitter} alt="github" />{" "}
                    </span>
                  </td>
                  <td className=" border-b border-gray-700">
                    <button
                      type="button"
                      class="text-blue-700 hover:text-white border border-blue-700 hover:bg-custom-blue focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm px-2 py-0.5 text-center inline-flex items-center gap-x-1 justify-center me-2 mb-2"
                    >
                      <span className="max-md:hidden">See profile</span>
                      <BiShow />
                    </button>
                  </td>
                  <td className="py-2 flex items-center text-left">
                    <button
                      id="xbox-series-x-dropdown-button"
                      data-dropdown-toggle="xbox-series-x-dropdown"
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-3"
            aria-label="Table navigation"
          >
            <span className="text-sm flex items-center  gap-x-2 font-normal text-gray-600 ">
              Showing
              <span className="font-semibold text-gray-900 ">1-10</span>
              of
              <span className="font-semibold text-gray-900 ">1000</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 hover:bg-gray-200"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  100
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.section>
  );
};

export default ApplicationReview;
