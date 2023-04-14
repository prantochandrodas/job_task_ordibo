import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.css'
const Navbar = () => {
    const menu = <>
        <li className='mr-[56px] lg:p-0 p-2'>Home</li>
        <li className='mr-[56px] lg:p-0 p-2'>About Us</li>
        <li className='mr-[56px] lg:p-0 p-2'>Features</li>
        <li className='mr-[20px] lg:p-0 p-2'>Solution</li>
    </>

    return (
        <div className="navbar navbarbg text-white lg:w-[80%] mx-auto lg:mb-[170px] sm:mb-[30px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {menu}
                    </ul>
                </div>
               <img src={logo} alt="" />
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;