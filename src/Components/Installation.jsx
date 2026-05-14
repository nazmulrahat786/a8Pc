import React, { useEffect, useState } from "react";
import { getStoredBook } from "./localstorage";
import { useLoaderData } from "react-router";
import InstallAppCard from "./InstallAppCard";

const Installation = () => {
  const [sApp, setSApp] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const installApp = getStoredBook();
  
    const installedApps = data.filter((app) => installApp.includes(app.id));

    setSApp(installedApps);
  }, [data]); 

  console.log(sApp);  
  
  return ( 
    <div  className="flex flex-col  px-3">
     <h1 className="font-bold  text-2xl text-center pt-7 ">Your Installed Apps Apps Found</h1>
     <h1 className=" text-gray-400 text-center  mx-10  ">Explore All Trending Apps on the Market developed by us Apps Found</h1>
     <h1 className="font-bold  mx-10 pt-7 ">{sApp.length} Apps Found</h1>
      <div>
        {sApp.length !== 0 ? (
        <div className="flex flex-col gap-10 p-9">
             
          {sApp.map((apps) => (
            <InstallAppCard key={apps.id} apps={apps} />
          ))}
        </div>
      ) : (
       <div className="flex flex-col items-center  justify-center">
        <img className="w-1/3" src="/src/assets/App-Error.png" alt="" />

         <h1 className="text-3x text-black font-bold text-center py-16">
          No apps installed yet!
        </h1>



       </div>
      )}
      </div>
    </div>
  );
};

export default Installation;
