import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id,image, title, downloads, ratingAvg } = app;
  

  return (
   <Link to={`details/${id}`}>
    <div className="w-52 h-52 p-3 hover:cursor-pointer shadow rounded bg-white  ">
     <img className="rounded-2xl mx-auto pt-2 w-32" src={image} alt="" />
     <h3>{title}</h3>
     <div className="flex justify-around">
        <p>{downloads}</p>
        <p>{ratingAvg}</p>
     </div>
    </div>
   
   
   </Link>
  );
};

export default AppCard;
