import React from 'react'
import PropTypes from 'prop-types'

const Home = props => {
  return (
    <>
      <div className="w-full h-full   px-8 py-10">
        <div className="pt-6">
          <h3 className="px-6 text-4xl font-semibold">Good evening!</h3>
          <p className="px-6 pt-2">
            Get an idea of how your hashtags are performing with our ouer
            hashtags performance table in the{" "}
            <span className="text-blue-600">poste </span> tab
          </p>

          {/* <Card/> */}
        </div>
        <br />
        <br />
        <div className="  rounded boder-outline border-2 border-gray-400 h-[44%] ml-3">
          <h4 className="ml-4 mt-1 font-semibold">Totals</h4>
          {/* <div className=" ">b</div> */}

          {/* <a
            href=""
            class="hover:border-black-500 hover:border-solid hover:bg-white  hover:text-black-500 group w-10 flex flex-col items-center justify-center rounded-md border-2 border-solid border-slate-300 text-sm leading-6 text-slate-900 font-medium py-2 lg: relative left-3/4 ml-56  -mt-5"
          >
            <svg
              class="group-hover:text-black-500 mb-1 text-slate-400"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
          
          </a> */}

          <p className="pt-64 pl-28 text-lg">
            Connect Facebook, Instagram, Twitter, LinkedIn Pages or (and!)
            Shopify to begin analyzing your marketing efforts.
          </p>
        </div>
        <br />
        <div className="  rounded boder-outline border-2 border-gray-400 h-[17%] ml-3 ">
          <h1 className="ml-4 mt-9 font-semibold">
            Looking to succeed at social?
          </h1>
          <p className="ml-4 text-base">
            You’re all set up but how to take it further? Cycle through useful
            <br /> articles we’ve provided or find more at Buffer Library.
          </p>

          <div className="pl-96 ml-80 -mt-24">
            <img
              src="./social-media-for-small-business.jpg"
              className="w-44 h-29"
              alt=""
            />

            <p className="w-40 ml-48 -mt-28">
              Social Media for Small Business: A Guide for 2021 and Beyond
            </p>
            <button className="ml-48 mt-2  focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm px-4 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-900">
              read more
            </button>
          </div>
        </div>
        <br />

        <div className="  rounded boder-outline border-2 border-gray-400 h-[35%] ml-3">
          <h4 className="ml-4 mt-1 font-semibold">Recent posts</h4>
          {/* <div className=" ">b</div> */}

          <p className="pt-48 pl-28 text-lg">
            Connect Facebook, Instagram, Twitter, LinkedIn Pages or (and!)
            Shopify to begin analyzing your marketing efforts.
          </p>
        </div>
        <br />
        <div className="  rounded boder-outline border-2 border-gray-400 h-[40%] ml-3">
          <h4 className="ml-4 mt-1 font-semibold">Social channels overview</h4>
          {/* <div className=" ">b</div> */}
        </div>
        <br />
        <div className="  rounded boder-outline border-2 border-gray-400 h-[56%] ml-3">
          <h4 className="ml-4 mt-1 font-semibold">Recent posts</h4>
          {/* <div className=" ">b</div> */}

          <p className="pt-96 pl-96 text-lg">
            Aw, shucks! There are currently no reports
          </p>
        </div>
      </div>
    </>
  );
}


export default Home
