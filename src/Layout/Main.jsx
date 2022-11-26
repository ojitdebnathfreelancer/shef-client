import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Footer/Footer';
import Navbar from '../Componets/Navbar/Navbar';

const Main = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;