import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
 
const MainPage = () => { 
    return ( 
        <div className='max-w-[1280px] mx-auto flex bg-gray-50 flex-col justify-between min-h-screen'>
           <div>
             <Navbar></Navbar> 
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainPage;
