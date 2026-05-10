import React, { Suspense, use } from 'react';
import AppCard from './AppCard';
import { Link } from 'react-router';

const TrendingApps = ({data}) => {
 
    return (
        <div className='text-center flex flex-col px-2   py-6'>
            <h1 className=' text-3xl md:text-4xl font-bold'>Trending Apps</h1>
            <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>

       
             <div className='grid md:grid-cols-3 pt-5 lg:grid-cols-4 gap-10 mx-auto   '>

    <Suspense fallback={'loading....'}>
                {data.map(app=><AppCard app={app} key={app.id}></AppCard>)}
                   </Suspense>
            </div>
           <Link to="/apps">
            <button className='btn w-32 mx-auto my-6 bg-gradient-to-t from-purple-400 to-purple-700 text-white'>Show All</button>
           </Link>
        
            
        </div>
    );
};

export default TrendingApps;