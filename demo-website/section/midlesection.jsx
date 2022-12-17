// import imag from "../public/"
import Heading from "../components/heading";
function Midlesection() {
  return (
    <div className="bg-blue-800 py-6">
      <div className="py-3 ">
        <h1 className="text-center text-[56px] text-white font-bold">
          Our Experience
        </h1>
      </div>
      <div className="lg:grid grid-cols-2 gap-1 w-[80%] mx-auto">
        <div className="text-white my-5 lg:my-0">
          <h1 className="text-[56px] font text-4xl sm:text-6xl">
            {" "}
            Web Application Development{" "}
          </h1> 
          
          <p className="mt-4 text-xl ">
            We specialize in creating responsive UI and UX design using React,
            Vue, and Next JS. By integrating database such as Mongo DB, AWS, or
            Firebase we provide end to end web application development
            solutions. Be it your website, web application or E-Store, we cover
            it all for you. We secure the frontend results with structured
            backend code that completely fulfills customer requirements.
          </p>{" "}
        </div>
        <div className="bg-black my-5 lg:my-0 w-[87%]">
          <img src="../WebApplication.webp" alt="" />
        </div>

        <div className="bg-black my-5 lg:my-0 w-[87%]">
          <img src="../Blockchainweb3.webp" alt="" />
        </div>
        <div className="text-white my-5 lg:my-0">
          <h1 className="text-[56px] font text-4xl sm:text-6xl">
            {" "}
            Web Application Development{" "}
          </h1>
          <p className="mt-4 text-xl ">
            We specialize in creating responsive UI and UX design using React,
            Vue, and Next JS. By integrating database such as Mongo DB, AWS, or
            Firebase we provide end to end web application development
            solutions. Be it your website, web application or E-Store, we cover
            it all for you. We secure the frontend results with structured
            backend code that completely fulfills customer requirements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Midlesection;
