import { LayoutDashboard, MapPin, Receipt, Settings } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({showSidebar, setShowSidebar}) => {
    return (
        <div className={`fixed transition-all duration-300 top-0 z-10 ${showSidebar ? "left-0" : "-left-[100%]" } `}>
            <div className='w-[21rem]'>
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
        </div>
    );
};

export default Sidebar;