import React from 'react'
import PropTypes from 'prop-types'

const Intagram = props => {
  return (
    <>
      <div className="w-full h-full   px-8 py-10">
        <div className="ml-72 mt-72">
          <img src="./illustration-thinking.png" className=" h-80" alt="" />
          <h3 className="ml-12 text-2xl font-bold ">
            Connect your Instagram Business account
          </h3>
          <p className="ml-3">
            Connect your Facebook Page to get insights on your posts, audience
            growth,
            <br />
            <span className="ml-36">reach, engagement and more!</span>
          </p>
          <button className="ml-48 mt-2  focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm px-4 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-900">
            Connect Instagram
          </button>
        </div>
      </div>
    </>
  );
}



export default Intagram
