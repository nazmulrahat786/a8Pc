import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import AppCard from "./AppCard";

const Apps = () => {
  const data = useLoaderData();
  return (
    <div className="flex flex-col py-6 ">
      <div className="flex flex-col gap-3 md:flex-row items-center justify-between px-32 ">
        <div>
          <h1 className="font-bold text-sm md:text-2xl">({data.length}) Apps Found</h1>
        </div>
        <div>
          <label className="input w-56">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="search Apps" />
          </label>
        </div>
      </div>
         <div className='grid md:grid-cols-3 pt-5 lg:grid-cols-4 gap-10 mx-auto   '>

    <Suspense fallback={'loading....'}>
                {data.map(app=><AppCard app={app} key={app.id}></AppCard>)}
                   </Suspense>
            </div>
    </div>
  );
};

export default Apps;
