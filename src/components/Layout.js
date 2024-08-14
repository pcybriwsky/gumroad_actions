import React from 'react';
import Sidebar from './Sidebar.tsx';
import { Analytics } from "@vercel/analytics/react"

const Layout = ({ children }) => {
  return (
    
    <div className="sm:flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-100 sm:pl-72">
        {children}
        <Analytics />
      </div>
    </div>
  );
};

export default Layout;
