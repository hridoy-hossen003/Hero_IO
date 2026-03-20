import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
      <div className="">
        <Navbar></Navbar>
        <div className='bg-[#D2D2D250]'>
          <div >
            <Outlet></Outlet>
            <ToastContainer position='top-center' pauseOnHover='true'></ToastContainer>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
};

export default Root;