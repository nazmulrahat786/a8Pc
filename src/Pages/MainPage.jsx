import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainPage = () => {
    return (
        <div className='max-w-[1280px] mx-auto flex flex-col justify-between h-screen'>
           <div>
             <Navbar></Navbar>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainPage;