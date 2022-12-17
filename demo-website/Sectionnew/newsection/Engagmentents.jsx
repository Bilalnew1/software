import React from "react";
import Gridcard1 from "./gridcard";
import Dropdown from "./Dropdown";
import COmmentsSection from "./commentsSection";

function Sidebar() {
  return (
    <>
        <div className="flex flex-no-wrap  bg-gray-100 py-12">
         <div className="w-96 absolute sm:relative md:h-full flex-col justify-between hidden  sm:flex">
         <Dropdown />
        <div>
       
           <div className="container mx-auto bg-white h-[83vh] overflow-y-scroll rounded border-outline border-2 border-gray-300 text-ellipsis md:w-5/5 w-11/12 px-6">
               <Gridcard1 />
             </div>
        </div>
      </div>
      {/* <div
        className="text-gray-600 mr-8 visible sm:hidden relative"
        onClick="dropdownHandler(this)"
      >
        <svg
          aria-label="Main Menu"
          aria-haspopup="true"
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu cursor-pointer"
          width={30}
          height={30}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1={4} y1={8} x2={20} y2={8} />
          <line x1={4} y1={16} x2={20} y2={16} />
        </svg>
      </div> */}
      <div className="container mx-auto bg-white h-[90vh]  rounded border-outline border-2 border-gray-300 text-ellipsis lg:w-96  md:w-4/5 w-11/12 px-2">
    
      </div>
    </div>
    </>
  );
}

export default Sidebar;
