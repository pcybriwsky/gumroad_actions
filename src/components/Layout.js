import React from 'react';
import Sidebar from './Sidebar.tsx';

const Layout = ({ children }) => {
  return (
    <div className="sm:flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;
