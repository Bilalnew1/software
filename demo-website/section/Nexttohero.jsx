import React from "react";
import PropTypes from "prop-types";

const Nexttohero = (props) => {
  return (
    <>
      <div className="bg-black">
        <div className=" ">
          {/* <img
            src="../hero_logo__fyok6s0bvo2u_large.jpg"
            className="max-w-full lg:pl-80 pt-32"
            alt=""
          /> */}
        </div>
        <div>
            {/* <video autoPlay src="../large.mp4" ></video> */}
{/* <iframe src="../large.mp4" frameborder="0" controls="0"></iframe> */}
<video
                        height="456"  autoPlay="autoplay" id="vid" muted
                        className="hidden lg:block md:block absolute bg z-10 w-96 min-w-full min-h-full max-w-none">
                        <source
                            src='../large.mp4'
                            type="video/mp4" />
                    </video>
        </div>
      </div>
    </>
  );
};

export default Nexttohero;
