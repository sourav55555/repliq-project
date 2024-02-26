import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import { CircleUserRound, Menu, NotebookPen, PlusCircle, Timer, Truck } from 'lucide-react';
import AddCustomer from './components/AddCustomer';

const App = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='overflow-x-hidden'>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div>
        <div className='w-1/2 px-3 py-2'>
          <div className='flex justify-around items-center font-semibold text-lg'>
            <Menu className='w-8 cursor-pointer' onClick={() => setShowSidebar(!showSidebar)} />
            <p className='flex items-center px-4 py-2 text-[#176B87] bg-[#EEF5FF] rounded-md gap-4'><NotebookPen /> Note</p>
            <p className='flex items-center px-4 py-2 text-[#176B87] bg-[#EEF5FF] rounded-md gap-4'><Truck /> Shipping</p>
            <p className='flex items-center px-4 py-2 text-[#176B87] bg-[#EEF5FF] rounded-md gap-4'><Timer /> Hold Orders</p>
            <p className='flex items-center px-4 py-2 text-[#176B87] bg-[#EEF5FF] rounded-md gap-4'><PlusCircle /> New Item</p>
          </div>

          {/* add customer  */}
          <AddCustomer/>

          {/* cart list */}
          
        </div>
        <div className='w-1/2'>

        </div>
      </div>
    </div>
  );
};

export default App;