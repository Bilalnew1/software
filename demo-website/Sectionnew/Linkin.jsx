import React from 'react'
import PropTypes from 'prop-types'

const Linkin = props => {
  return (
    <>
      <div className="w-full h-full   px-8 py-10">
        <div className="ml-72 mt-72">
          <img src="./illustration-thinking.png" className=" h-80" alt="" />
          <h3 className="ml-28 text-2xl font-bold ">
            Connect your LinkedIn page
          </h3>
          <p className="ml-3">
            Track your performance, get insights on your posts, and optimize
            your posting strategy.
          </p>
          <br />
          <p className="ml-3 w-4/6 italic text-sm">
            Unfortunately, LinkedIn Profiles are not supported in Analytics.
            Connect your first LinkedIn page to get started.
          </p>
          <button className="ml-48 mt-2  focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm px-4 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-900">
            Connect LinkedIn
          </button>
        </div>
      </div>
    </>
  );
}


export default Linkin
