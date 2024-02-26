import { X } from 'lucide-react';
import React from 'react';

const Categories = ({ categoryList, showCategory, setShowCategory }) => {
    return (
        <div className={`fixed transition-all duration-300 w-full top-0 z-10 ${showCategory ? "right-0" : "-right-[100%]"} `}>
            <div className='flex items-start flex-row-reverse'>
                <div className='w-[47%] p-10 bg-white'>
                    <p className='text-4xl mb-16 font-semibold text-center'>Categories</p>
                    <div className='flex flex-wrap gap-4'>
                        <button className="px-4 border-[#176B87] secondary py-2 rounded-md border-2 text-lg">All Categories</button>
                        {categoryList.map((category, index) => <button key={index} className="px-4 py-2 rounded-md border-2 border-gray-400 text-lg text-gray-600">{category}</button>)}
                    </div>
                </div>
                <div className='w-[53%] bg-[#00000063] h-screen' onClick={() => setShowCategory(false)} >
                    <X onClick={() => setShowCategory(false)} className='ms-auto mt-4 me-4 cursor-pointer text-white w-8 h-8' />
                </div>
            </div>
        </div>
    );
};

export default Categories;