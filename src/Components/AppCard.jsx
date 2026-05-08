import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id,image, title, downloads, ratingAvg } = app;
  

  return (
   <Link to={`details/${id}`}>
    <div className="w-52 h-56 p-3 hover:cursor-pointer shadow rounded bg-white  ">
     <img className="rounded-2xl mx-auto pt-2 w-32" src={image} alt="" />
     <h3>{title}</h3>
     <div className="flex justify-around my-2">
        <p className="flex items-center bg-emerald-50 rounded py-0.5 px-2 gap-1"> <img className="w-4 h-4" src="/src/assets/icon-downloads.png" alt="" /> {downloads}</p>
        <p className="flex items-center bg-amber-50 rounded py-0.5 px-2 gap-1"> <img className="w-4 h-4" src="/src/assets/icon-ratings.png"></img>{ratingAvg}</p>
     </div>
    </div>
   
   
   </Link>
  );
};

export default AppCard;
