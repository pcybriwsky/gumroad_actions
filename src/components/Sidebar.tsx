import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ShopWindowIcon } from 'bootstrap-icons/icons/shop-window.svg';
import { ReactComponent as ArchiveFillIcon } from 'bootstrap-icons/icons/archive-fill.svg';
import { ReactComponent as DealFillIcon } from 'bootstrap-icons/icons/bag-check-fill.svg';
import { ReactComponent as Cart3FillIcon } from 'bootstrap-icons/icons/cart-fill.svg';
import { ReactComponent as EnvelopeFillIcon } from 'bootstrap-icons/icons/envelope-fill.svg';
import { ReactComponent as Diagram2FillIcon } from 'bootstrap-icons/icons/diagram-2-fill.svg';
import { ReactComponent as CurrencyDollarIcon } from 'bootstrap-icons/icons/coin.svg';
import { ReactComponent as BarChartFillIcon } from 'bootstrap-icons/icons/bar-chart-fill.svg';
import { ReactComponent as Check2SquareIcon } from 'bootstrap-icons/icons/check2-square.svg';
import { ReactComponent as MenuIcon } from 'bootstrap-icons/icons/list.svg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <div className="bg-black text-white w-full flex p-4 justify-between items-center sm:hidden">
        <div className="flex items-center flex-grow">
          <img src="/Assets/Images/gumroadIcon.png" alt="Gumroad Logo" className="w-[20px]" />
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <MenuIcon className="w-6 h-6 fill-current" />
        </button>
      </div>

      {/* Navigation items in a horizontal bar for small screens */}
      {isOpen && (
        <div className="bg-black text-white w-full flex flex-col sm:hidden">
          <nav>
            <ul className="text-center">
              <li className='py-[10px]'>
                <Link to="/" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Home
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/products" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Products
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Actions
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/collaborators" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Collaborators
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/checkout" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Checkout
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/emails" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Emails
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/workflows" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Workflows
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/sales" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Sales
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/analytics" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Analytics
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/payouts" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Payouts
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/discover" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Discover
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/library" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Library
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/help" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Help
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/settings" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Sidebar for larger screens */}
      <div className="hidden sm:flex w-64 bg-black text-white flex-col">
        <div className="p-4">
          <Link to="/" className="flex items-center py-[40px] space-x-2">
            <img src="/Assets/Images/gumroadWhite.png" alt="Gumroad Logo" className="w-[80%] mx-auto" />
          </Link>
        </div>
        <nav className="flex-1">
          <ul className="divide-y-2 divide-solid divide-white my-auto text-center">
            <li className='py-[20px]'>
              <Link to="/" className="flex items-center p-2 text-white hover:text-pink">
                <ShopWindowIcon className="w-6 h-6 fill-current" />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/products" className="flex items-center p-2 text-white hover:text-pink">
                <ArchiveFillIcon className="w-6 h-6 fill-current" />
                <span className="ml-2">Products</span>
              </Link>
            </li>

            <li className='py-[20px]'>
              <Link to="/" className="flex items-center p-2 text-white hover:text-pink">
                <Check2SquareIcon className="w-6 h-6 fill-current" />
                <span className="ml-2">Actions</span>
              </Link>
            </li>
            
            <li className='py-[20px]'>
              <Link to="/collaborators" className="flex items-center p-2 text-white hover:text-pink">
                <DealFillIcon className="w-6 h-6 fill-current" />
                <span className="ml-2">Collaborators</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/checkout" className="flex items-center p-2 text-white hover:text-pink">
                <Cart3FillIcon className="w-6 h-6 fill-current" />
                <span className="ml-2">Checkout</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/emails" className="flex items-center p-2 text-white hover:text-pink">
                <EnvelopeFillIcon className="w-6 h-6 fill-current" />
                <span className="ml-2">Emails</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/workflows" className="flex items-center p-2 text-white hover:text-pink">
                <Diagram2FillIcon className="w-6 h-6 fill-current" />
                <span className="ml-2">Workflows</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/sales" className="flex items-center p-2 text-white hover:text-pink">
                <CurrencyDollarIcon className="w-6 h-6 fill-current" />
                <span className="ml-2">Sales</span>
              </Link>
            </li>

            <li className='py-[20px]'>
              <Link to="/analytics" className="flex items-center p-2 text-white hover:text-pink">
                <BarChartFillIcon className="w-6 h-6 fill-current" />
                <span className="ml-2">Analytics</span>
              </Link>
            </li>


            <li className='py-[20px]'>
              <Link to="/payouts" className="flex items-center p-2 text-white hover:text-pink">
                <CurrencyDollarIcon className="w-6 h-6 fill-current" />
                <span className="ml-2">Payouts</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/discover" className="flex items-center p-2 text-white hover:text-pink">
                <span className="ml-2">Discover</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/library" className="flex items-center p-2 text-white hover:text-pink">
                <span className="ml-2">Library</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/help" className="flex items-center p-2 text-white hover:text-pink">
                <span className="ml-2">Help</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/settings" className="flex items-center p-2 text-white hover:text-pink">
                <span className="ml-2">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
