import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react';
const Navbar = () => {
    const ref = useRef();
    return (
        // Navigationbar for app
        <nav className='bg-slate-800 text-white'>
            {/* <Link to='/'></Link> */}
            <div className='mycontainer flex justify-between items-center px-4 py-5 h-16'>
                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-500'> &lt; </span>
                    Password
                    <span className='text-green-500'> Manger / &gt;</span>
                </div>
                <div className='flex justify-between gap-4'>  
                <div>
                    <Link to='/'>
                        <button className='text-white bg-green-700 my-5 rounded-full flex justify-between items-center ring-white ring-1 p-1'>
                            <span className='font-bold px-4'>Home Page</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to='/activitytab'>
                        <button className='text-white bg-green-700 my-5 rounded-full flex justify-between items-center ring-white ring-1 p-1'>
                            <span className='font-bold px-4'>Activity Tab</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <button className='text-white bg-green-700 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
                        <img className='invert w-10 py-1 px-2' ref={ref} src="/github_icon.png" alt="show" />
                        <a href='https://github.com/Sahil-1005/PasswordManager_Local_Storage/settings'>
                            <span className='font-bold px-4'>GitHub</span></a>
                    </button>
                </div>
                <div>
                    <Link to='/login'>
                        <button className='text-white bg-green-700 my-5 rounded-full flex justify-between items-center ring-white ring-1 p-1'>
                            <span className='font-bold px-4'>Logout</span>
                        </button>
                    </Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
