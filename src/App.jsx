import React, { useState } from 'react';

import Sidebar from './components/Sidebar';

const App = () => {

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className='overflow-x-hidden'>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div>
        <div className='w-1/2'>

        </div>
        <div className='w-1/2'></div>
      </div>
    </div>
  );
};

export default App;