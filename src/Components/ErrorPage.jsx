import React from "react";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div className="flex flex-col justify-center items-center my-16">
      <img className="w-3/12" src="/src/assets/error-404.png" alt="" />
      <h1 className="text-3xl font-semibold">Oops, page not found!</h1>
      <p className="text-gray-400 mb-3">The page you are looking for is not available.</p>
     <Link to="/">
      <button className="btn px-6 btn-xs bg-gradient-to-t from-purple-400 to-purple-700 text-white sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl font-normal">
        Go Back!
      </button>
     </Link>
    </div>
  );
};

export default Errorpage;
