import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
      <div className="">
        <Navbar></Navbar>
        <div className='bg-[#D2D2D250]'>
          <div >
            <Outlet></Outlet>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
};

export default Root;