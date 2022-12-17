import React from "react";
import Facebook from "./Facebook";
import Home from "./Home";
import Intagram from "./Intagram";
import Linkin from "./Linkin";
import Shopify from "./Shopify";
import Twitter from "./Twitter";

function Sidebar() {
  return (
    <div className="flex flex-no-wrap  bg-gray-100 py-10">
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className="w-64 absolute sm:relative md:h-full flex-col justify-between hidden sm:flex">
        <div>
          <ul className="ml-5">
            <li className="flex w-full justify-between rounded-md font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-300 cursor-pointer items-center py-3 px-8">
              <div className="flex items-center">
                <img src="../home.png" className="w-[10%] h[10%]" alt="" />
                <span className="text-sm  ml-2">Home</span>
              </div>
            </li>
            <br />
            <p className="text-[13px] pl-3 text-bold">Channels</p>
            <hr />
            <li className="flex w-full justify-between  rounded-md font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-300 cursor-pointer items-center px-8 py-3">
              <div className="flex items-center">
                <img src="facebook.png" className="w-[10%] h[10%]" alt="" />
                <span className="text-sm  ml-2">Facebook</span>
              </div>
            </li>
            <li className="flex w-full justify-between rounded-md font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-300 cursor-pointer items-center px-8 py-3">
              <div className="flex items-center">
                <img src="instagram.png" className="w-[10%] h[10%]" alt="" />
                <span className="text-sm  ml-2">Intagram</span>
              </div>
            </li>
            <li className="flex w-full justify-between  rounded-md font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-300 cursor-pointer items-center px-8 py-3">
              <div className="flex items-center">
                <img src="twitter.png" className="w-[10%] h-[10%]" alt="" />
                <span className="text-sm  ml-2">Twitter</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-800 hover:bg-gray-300 cursor-pointer items-center  px-8 py-3">
              <div className="flex items-center">
                <img src="linkedin.png" className="w-[10%] h-[10%]" alt="" />
                <span className="text-sm  ml-2">LinkIn</span>
              </div>
            </li>
            <li className="flex w-full justify-between  rounded-md font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-300 cursor-pointer items-center px-8 py-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-stack"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="12 4 4 8 12 12 20 8 12 4" />
                  <polyline points="4 12 12 16 20 12" />
                  <polyline points="4 16 12 20 20 16" />
                </svg>
                <span className="text-sm  ml-2">Spotify</span>
              </div>
            </li>

            <br />
            <p className="text-[13px] pl-3 text-bold">Tools</p>
            <hr />
            <li className="flex w-full justify-between  rounded-md font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-300 cursor-pointer items-center px-8 py-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                <span className="text-sm  ml-2">Campaigns</span>
              </div>
            </li>
            <li className="flex w-full justify-between  rounded-md font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-300 cursor-pointer items-center px-8 py-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                <span className="text-sm  ml-2">Reports</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="text-gray-600 mr-8 visible sm:hidden relative"
        onclick="dropdownHandler(this)"
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
      </div>
      <div className="container mx-auto bg-white h-[90vh] overflow-y-scroll rounded border-outline border-2 border-gray-300 text-ellipsis md:w-4/5 w-11/12 px-6">
        {/* <Home /> */}
        {/* <Facebook/> */}
        <Intagram/>
        {/* <Twitter/> */}
        {/* <Linkin/> */}
        {/* <Shopify /> */}
      </div>
    </div>
  );
}

export default Sidebar;
