import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainPage = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainPage;