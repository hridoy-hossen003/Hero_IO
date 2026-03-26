import React from 'react';
import logo from '../assets/logo.png'
import { NavLink, useNavigate} from 'react-router';
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

     const btn = (
       <>
         <a
           target="_black"
           href="https://github.com/hridoy-hossen003"
           className="btn transition duration-600 hover:scale-105 hover:text-black  text-white bg-linear-to-r from-[#632EE3]  to-[#9F62F2]  text-lg font-semibold"
         >
           <i class="fa-brands fa-github"></i>
           Continue
         </a>
       </>
     );
    const links = (
      <>
        <li className="hover:transition  duration-600 hover:scale-110">
          <NavLink to={"/"}>
            <i className="fa-regular fa-house"></i>
            Home
          </NavLink>
        </li>
        <li className="hover:transition  duration-600 hover:scale-110">
          <NavLink to={"/apps"}>
            <i className="fa-brands fa-app-store"></i>
            Apps
          </NavLink>
        </li>
        <li className="hover:transition  duration-600 hover:scale-110">
          <NavLink to={"/installation"}>
            <i className="fa-brands fa-instalod"></i>
            Installation
          </NavLink>
        </li>
        
        <li className="md:hidden">{btn}</li>
      </>
    );

   
    return (
      <div>
        <div className="md:navbar   shadow-sm md:px-20">
          <div className="md:navbar-start py-4 md:py-0 flex md:shadow-none shadow-sm">
            <div className="dropdown flex-1 md:flex-none">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-46 gap-1 p-4 shadow"
              >
                {links}
              </ul>
            </div>
            <div className="">
              <a onClick={() => navigate('/')} className=" btn btn-ghost font-bold text-xl bg-linear-to-r from-[#632EE3100] via-[#632EE3] to-[#9F62F2]  bg-clip-text text-transparent">
                <img className="w-9" src={logo} alt="" />
                HERO.IO
              </a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu font-semibold menu-horizontal px-1 [&_active]:text-blue-700">
              {links}
            </ul>
          </div>
          <div className="navbar-end hidden md:flex">
            {
                btn
            }
          </div>
        </div>
      </div>
    );
};

export default Navbar;