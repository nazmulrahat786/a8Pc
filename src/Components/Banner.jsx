import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="text-center pt-16">
        <h1 className="text-5xl mb-2 font-bold ">
          We Build <br /> <span className="text-indigo-500">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-xl text-gray-400">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="flex justify-center gap-4 pt-6">
          <button className="btn ">
            {" "}
           
            <img className="w-5" src="https://static.vecteezy.com/system/resources/thumbnails/022/484/511/small/google-play-store-icon-logo-symbol-free-png.png" alt="" />
            Google Play
          </button>
          <button className="btn  ">
            {" "}
           <img className="w-5" src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-appstore-icon-png-image-purepng-transparent-4.png" alt="" />
            App Store
          </button>
        </div>
      </div>
      <div className="flex max-auto justify-center pt-12">
        <img src="/src/assets/hero.png" alt="" />
      </div>
      <div className="h-[400px] md:h-96  bg-gradient-to-r from-purple-700 via-violet-600 to-purple-500 text-center px-16 py-12 md:py-20  flex flex-col justify-around">
        <h1 className="text-2xl md:text-3xl font-bold  text-white">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="text-center">
            <p className="text-white">Total Downloads</p>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold">29.6M</h1>
            <p className="text-white">21% more than last month</p>
          </div>
          <div className="text-center">
            <p className="text-white">Total Reviews</p>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold">906K</h1>
            <p className="text-white">46% more than last month</p>
          </div>
          <div className="text-center">
            <p className="text-white">Active Apps</p>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold">132+</h1>
            <p className="text-white">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
