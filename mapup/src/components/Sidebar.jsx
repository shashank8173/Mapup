import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNightMode } from '../redux/action';
const Sidebar = () => {
 const nightMode = useSelector((state) => state.nightMode);
  const dispatch = useDispatch();

  const handleNightModeToggle = () => {
    dispatch(toggleNightMode());
  };
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <aside className={`bg-${nightMode ? 'black' : 'black'} bg-gray-200 w-48 min-h-screen py-6 px-4 ${isSidebarCollapsed ? 'hidden' : ''}`}>
     <div className="flex items-center mb-4">
        <svg className={`w-6 h-6 mr-2 ${nightMode ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* Add your moon/sun icon here */}
        </svg>
        <span className={`font-semibold ${nightMode ? 'text-white' : 'text-black'}`}>Night Mode</span>
        <label className="switch ml-auto">
          <input type="checkbox" onChange={handleNightModeToggle} checked={nightMode} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="flex items-center mb-4">
      
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <span className="font-semibold">Sidebar Item</span>
      </div>
      <button
        onClick={handleSidebarToggle}
        className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4"
      >
        {isSidebarCollapsed ? 'Expand' : 'Collapse'} Sidebar
      </button>
    </aside>
  );
};

export default Sidebar;
