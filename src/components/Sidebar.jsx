import { LayoutDashboard, MapPin, Receipt, Settings, X } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    console.log(showSidebar, "sidebar")
    return (
        <div className={`fixed transition-all duration-300 w-full top-0 z-10 ${showSidebar ? "left-0" : "-left-[100%]"} `}>

            <div className='flex items-start'>
                <div className='md:w-[21rem] w-[19rem] bg-white h-screen'>
                    <div className='bg-gray-200 px-6 py-7'>
                        <div className='font-bold text-4xl text-center mb-10'>go<span className='text-green-600'>B</span>illing</div>
                        <div>
                            <p className='text-muted'>Location:</p>
                            <p className='text-2xl font-semibold'>Los Angeles, California</p>
                        </div>
                    </div>

                    <div className='text-xl text-gray-500 font-semibold'>
                        <NavLink to="/dashborad" className={`${({ isActive }) =>
                            isActive
                                ? "bg-violet-300"
                                : ""}
                        flex items-center py-4 gap-4 px-6
                    `} >
                            <LayoutDashboard />
                            Dashboard
                        </NavLink>
                        <Link to="/locations" className='flex items-center py-4 gap-4 px-6 '>
                            <MapPin />
                            Locations
                        </Link>
                        <Link to="/invoice" className='flex items-center py-4 gap-4 px-6'>
                            <Receipt />
                            POS Invoices
                        </Link>
                        <Link className='flex items-center py-4 gap-4 px-6'>
                            <Settings />
                            Settings
                        </Link>

                    </div>
                </div>
                <div
                    className='md:w-[calc(100%-21rem)] w-[calc(100%-19rem)] bg-[#00000063] h-screen'
                    onClick={() => setShowSidebar(false)}
                >
                    <X
                        onClick={() => setShowSidebar(false)}
                        className='absolute font-semibold left-[19rem] md:left-[22rem] top-4 cursor-pointer text-white w-8 h-8'
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;