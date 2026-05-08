import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const [data ,setData] = useState() 
    const datas = useLoaderData()
  
    const a = useParams()
    const d = parseInt(a.id)
  
useEffect(()=>{
    const appData = datas.find((app) => app.id === d)
    setData(appData);


},[])

console.log(data.image);
   
    return (
        <div>
            <img src={data.image} alt="" />
        </div>
    );
};

export default AppDetails;