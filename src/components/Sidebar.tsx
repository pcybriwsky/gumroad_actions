import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import ArchiveIcon from '/Assets/Images/archive-fill.svg'
// import BarChartIcon from '/Assets/Images/bar-chart-fill.svg'
// import CartIcon from '/Assets/Images/cart-3-fill.svg'
// import CollectionIcon from '/Assets/Images/collection.svg'
// import CurrencyDollarIcon from '/Assets/Images/currency-dollar.svg'
// import DealIcon from '/Assets/Images/deal-fill.svg'
// import DiagramIcon from '/Assets/Images/diagram-2-fill.svg'
// import EnvelopeIcon from '/Assets/Images/envelope-fill.svg'
// import GearIcon from '/Assets/Images/gear-full.svg'
// import SearchIcon from '/Assets/Images/search.svg'
// import ShopWindowIcon from '/Assets/Images/shop-window.svg'
// import BookHalfIcon from '/Assets/Images/book-half.svg'
// import CheckIcon from '/Assets/Images/custom-checkbox-selected.svg'
import { ReactComponent as MenuIcon } from 'bootstrap-icons/icons/list.svg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current URL path
  const isActive = (path) => location.pathname === path;


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
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Home
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Products
                </Link>
              </li>
              <li className='py-[10px]'>
              

                <Link to="/" className={`block p-2 text-white hover:text-pink ${isActive('/') ? 'text-pink' : 'text-white'}`} onClick={handleMenuClick}>
                  Actions
                  {/* <span className="ml-2 mt-1 text-black bold font-bold bg-pink w-[25px] h-[25px] text-center mx-auto items-center rounded-full px-2">!</span> */}
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Collaborators
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Checkout
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Emails
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Workflows
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Sales
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Analytics
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Payouts
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Discover
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Library
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Help
                </Link>
              </li>
              <li className='py-[10px]'>
                <Link to="/about" className="block p-2 text-white hover:text-pink" onClick={handleMenuClick}>
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Sidebar for larger screens */}
      <div className="hidden sm:flex w-64 bg-black text-white flex-col h-screen fixed overflow-y-auto">
        <div className="p-4">
          <Link to="/" className="flex items-center py-[40px] space-x-2">
            <img src="/Assets/Images/gumroadWhite.png" alt="Gumroad Logo" className="w-[80%] mx-auto" />
          </Link>
        </div>
        <nav className="flex-1">
          <ul className="divide-y-[1px] divide-solid divide-white my-auto text-center">
            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5.99072 2.92993C5.61172 2.92993 5.25372 3.15394 5.08472 3.49194L2.99072 6.92993C3.02672 8.81593 4.51572 9.92993 5.99072 9.92993C6.76872 9.92993 7.45772 9.63493 7.99072 9.14893C8.52372 9.63493 9.21272 9.92993 9.99072 9.92993C10.7687 9.92993 11.4577 9.63493 11.9907 9.14893C12.5237 9.63493 13.2127 9.92993 13.9907 9.92993C14.7687 9.92993 15.4577 9.66593 15.9907 9.17993C16.5237 9.66593 17.2127 9.92993 17.9907 9.92993C19.4657 9.92993 20.9817 8.77793 20.9907 6.92993L18.8967 3.49194C18.7277 3.15394 18.3697 2.92993 17.9907 2.92993H5.99072ZM11.9907 11.4609C11.3647 11.7359 10.7017 11.9299 9.99072 11.9299C9.63672 11.9299 9.32272 11.7929 8.99072 11.7109V14.9299H14.9907V11.7109C14.6587 11.7939 14.3447 11.9299 13.9907 11.9299C13.2807 11.9299 12.6107 11.7359 11.9907 11.4609ZM3.99072 11.4919C3.99072 14.3629 3.99072 17.4069 3.99072 18.9299C3.43872 18.9299 2.99072 19.3779 2.99072 19.9299C2.99072 20.4819 3.43872 20.9299 3.99072 20.9299H4.99072H18.9907H19.9907C20.5427 20.9299 20.9907 20.4819 20.9907 19.9299C20.9907 19.3779 20.5427 18.9299 19.9907 18.9299V11.4919C19.3697 11.7659 18.6987 11.9299 17.9907 11.9299C17.6367 11.9299 17.3227 11.7939 16.9907 11.7109V15.9299C16.9907 16.4819 16.5427 16.9299 15.9907 16.9299H7.99072C7.43872 16.9299 6.99072 16.4819 6.99072 15.9299V11.7109C6.65772 11.7939 6.34472 11.9299 5.99072 11.9299C5.28272 11.9299 4.60872 11.7619 3.99072 11.4919Z" />
                </svg>
                {/* <img src="/Assets/Images/shop-window-fill.svg" alt="Home Icon" className="w-6 h-6 fill-current" /> */}
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                {/* <ArchiveIcon className="w-6 h-6 fill-current" /> */}
                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M6.01416 2.99985C3.80516 2.99985 2.01416 4.79085 2.01416 6.99985V7.99985H22.0142V6.99985C22.0142 4.79085 20.2232 2.99985 18.0142 2.99985H6.01416ZM3.01416 9.99985V17.9998C3.01416 20.1848 4.61717 21.9998 6.67017 21.9998H17.3582C19.4112 21.9998 21.0142 20.1848 21.0142 17.9998V9.99985H3.01416ZM10.5142 11.9998H13.5142C14.3422 11.9998 15.0142 12.6718 15.0142 13.4998C15.0142 14.3278 14.3422 14.9998 13.5142 14.9998H10.5142C9.68616 14.9998 9.01416 14.3278 9.01416 13.4998C9.01416 12.6718 9.68616 11.9998 10.5142 11.9998Z" />
                </svg>

                <span className="ml-2">Products</span>
              </Link>
            </li>

            <li className='py-[20px]'>
              <Link to="/" className={`flex items-center p-2 ${isActive('/') ? 'text-pink' : 'text-white'}`}>
                {/* <CheckIcon className="w-6 h-6 fill-current" /> */}
                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3.5 9.00024C3.5 5.96268 5.96243 3.50024 9 3.50024H15C18.0376 3.50024 20.5 5.96268 20.5 9.00024V15.0002C20.5 18.0378 18.0376 20.5002 15 20.5002H9C5.96243 20.5002 3.5 18.0378 3.5 15.0002V9.00024ZM16.0089 10.6341C16.497 10.146 16.497 9.35452 16.0089 8.86636C15.5207 8.37821 14.7293 8.37821 14.2411 8.86636L10.75 12.3575L9.88388 11.4914C9.39573 11.0032 8.60427 11.0032 8.11612 11.4914C7.62796 11.9795 7.62796 12.771 8.11612 13.2591L9.86612 15.0091C10.3543 15.4973 11.1457 15.4973 11.6339 15.0091L16.0089 10.6341Z" />
                </svg>
                <span className="ml-2">Actions</span>
                {/* <span className="ml-2 mt-1 text-black font-bold bg-pink w-[25px] h-[25px] text-center mx-auto items-center rounded-full px-2">!</span> */}

              </Link>
            </li>

            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                {/* <DealIcon className="w-6 h-6 fill-current" /> */}
                <svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_12118_26733)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.96744 8.98572L12.3747 6.81041C13.4948 5.79826 15.003 5.32934 16.4995 5.52799L19.6838 5.9507L24.1037 3.56167C24.3892 3.40733 24.736 3.61409 24.736 3.93869V12.0612C24.736 12.6144 24.4692 13.1335 24.0194 13.4554L21.0429 15.5852L17.8216 12.8823C18.4687 12.6529 19.0214 12.2744 19.4774 11.8015C19.8881 11.3755 19.8758 10.6972 19.4498 10.2865C19.024 9.87574 18.3456 9.88809 17.9349 10.3141C17.6161 10.6447 17.2476 10.8571 16.8164 10.9415C16.4407 11.0151 15.9623 11.0019 15.3607 10.8175L14.5952 10.1752L12.4617 11.9018C11.6236 12.58 10.3914 12.4351 9.7336 11.5808C9.12251 10.7873 9.22433 9.65724 9.96744 8.98572ZM8.53073 7.39581L10.2592 5.83387C9.52538 5.63366 8.7479 5.59264 7.9798 5.72563L4.83312 6.27045L1.38134 4.41276C1.08962 4.25577 0.735962 4.46705 0.735962 4.79834L0.735997 12.0605C0.736 12.6397 1.02235 13.1814 1.50093 13.5077L10.8522 19.8823C12.0628 20.7075 13.6591 20.6923 14.8536 19.8439L19.1489 16.7934L14.5705 12.9518L13.8098 13.5674C12.036 15.003 9.42806 14.6962 8.0358 12.8882C6.74246 11.2087 6.95796 8.81705 8.53073 7.39581Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_12118_26733">
                      <rect width="24" height="24" fill="currentColor" transform="translate(0.735962 0.000244141)" />
                    </clipPath>
                  </defs>
                </svg>

                <span className="ml-2">Collaborators</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                {/* <CartIcon className="w-6 h-6 fill-current" /> */}
                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3.0142 1.99904C2.4622 2.00444 2.0092 2.44674 2.0142 2.99904C2.0192 3.55134 2.4622 4.00444 3.0142 3.99904H4.4832C4.4832 3.99904 7.71021 11.5196 7.79521 11.7178C7.31521 12.0514 6.8972 12.4693 6.6082 12.999C6.2162 13.715 6.06721 14.4248 6.04521 14.9365V15.124C6.08121 15.3791 6.1792 15.7022 6.3892 16.0302C6.7642 16.6153 7.37321 16.9678 8.17021 16.9678C8.58721 16.9678 18.7062 16.9984 19.0142 16.999C19.5672 17.0001 20.0132 16.5512 20.0142 15.999C20.0152 15.4467 19.5672 15.0001 19.0142 14.999C18.7062 14.9984 8.58921 14.9677 8.17021 14.9678C8.09221 14.9678 8.07021 14.9747 8.04521 14.9365C8.06721 14.6957 8.1582 14.3327 8.3582 13.9678C8.6972 13.3466 9.23821 12.999 10.1702 12.999H18.0142C18.4142 12.999 18.7632 12.7729 18.9202 12.4052L21.9202 5.40524C22.2032 4.74544 21.7322 3.99904 21.0142 3.99904H16.0142H6.67021L6.32622 3.18654C6.02822 2.49054 5.2402 1.99164 4.4832 1.99904H3.0142ZM7.5142 18.999C6.6862 18.999 6.0142 19.6706 6.0142 20.499C6.0142 21.3274 6.6862 21.999 7.5142 21.999C8.34221 21.999 9.01421 21.3274 9.01421 20.499C9.01421 19.6706 8.34221 18.999 7.5142 18.999ZM18.5142 18.999C17.6862 18.999 17.0142 19.6706 17.0142 20.499C17.0142 21.3274 17.6862 21.999 18.5142 21.999C19.3422 21.999 20.0142 21.3274 20.0142 20.499C20.0142 19.6706 19.3422 18.999 18.5142 18.999Z" />

                </svg>
                <span className="ml-2">Checkout</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                {/* <EnvelopeIcon className="w-6 h-6 fill-current" /> */}
                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5.95215 3.99786C3.91815 3.99786 2.32617 4.51186 2.04517 6.46686C1.95517 7.09285 2.15315 7.70887 2.60816 8.15387C2.83416 8.37487 3.07316 8.63787 3.38916 8.90386C4.18216 9.57286 5.19317 10.3249 6.13917 10.9979C8.74217 12.8479 10.7972 13.9979 12.0142 13.9979C13.2312 13.9979 15.2862 12.8479 17.8892 10.9979C18.8362 10.3249 19.8472 9.57186 20.6392 8.90386C20.9552 8.63787 21.1942 8.37587 21.4202 8.15387C21.8752 7.70887 22.0732 7.09285 21.9832 6.46686C21.7022 4.51186 20.1102 3.99786 18.0762 3.99786H5.95215ZM2.01416 10.1539V15.9979C2.01416 18.2069 3.80516 19.9978 6.01417 19.9978H18.0142C20.2232 19.9978 22.0142 18.2069 22.0142 15.9979V10.1539C21.1942 10.9329 20.2782 11.7369 18.9832 12.6539C16.1472 14.6619 13.6002 15.9979 12.0142 15.9979C10.4282 15.9979 7.88118 14.6619 5.04517 12.6539C3.74917 11.7369 2.83416 10.9329 2.01416 10.1539Z" />
                </svg>
                <span className="ml-2">Emails</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                {/* <DiagramIcon className="w-6 h-6 fill-current" /> */}
                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12.0283 1.99896C10.3713 1.99896 9.02829 3.34196 9.02829 4.99896C9.02829 6.26696 9.86729 7.40699 11.0263 7.82599L11.0283 10.999H7.02829C6.47629 10.999 6.02829 11.447 6.02829 11.999L6.02728 16.174C4.87628 16.57 4.02829 17.731 4.02829 18.999C4.02829 20.656 5.37129 21.999 7.02829 21.999C8.68529 21.999 10.0283 20.656 10.0283 18.999C10.0283 17.731 9.23329 16.6129 8.03929 16.1609L8.02829 12.999H12.0283H16.0283L16.0353 16.176C14.8343 16.593 14.0283 17.731 14.0283 18.999C14.0283 20.656 15.3713 21.999 17.0283 21.999C18.6853 21.999 20.0283 20.656 20.0283 18.999C20.0283 17.731 19.2093 16.615 18.0363 16.171L18.0283 11.999C18.0283 11.447 17.5803 10.999 17.0283 10.999H13.0283L13.0253 7.82196C14.1893 7.41096 15.0283 6.26696 15.0283 4.99896C15.0283 3.34196 13.6853 1.99896 12.0283 1.99896Z" />
                </svg>
                <span className="ml-2">Workflows</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                {/* <CurrencyDollarIcon className="w-6 h-6 fill-current" /> */}
                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10.1201 8.90167C10.3058 8.77783 10.5353 8.66715 10.8 8.58148L10.8 10.6191C10.5353 10.5334 10.3058 10.4227 10.1201 10.2989C9.68315 10.0076 9.60002 9.73695 9.60002 9.60027C9.60002 9.46359 9.68315 9.19296 10.1201 8.90167Z" />
                  <path d="M13.2 15.4191L13.2 13.3815C13.4648 13.4672 13.6942 13.5778 13.88 13.7017C14.3169 13.993 14.4 14.2636 14.4 14.4003C14.4 14.537 14.3169 14.8076 13.88 15.0989C13.6942 15.2227 13.4648 15.3334 13.2 15.4191Z" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.6003C17.302 21.6003 21.6 17.3022 21.6 12.0003C21.6 6.69834 17.302 2.40027 12 2.40027C6.69809 2.40027 2.40002 6.69834 2.40002 12.0003C2.40002 17.3022 6.69809 21.6003 12 21.6003ZM13.2 6.00027C13.2 5.33753 12.6628 4.80027 12 4.80027C11.3373 4.80027 10.8 5.33753 10.8 6.00027V6.11066C10.0541 6.25074 9.3642 6.52115 8.7888 6.90475C7.92279 7.48209 7.20002 8.41147 7.20002 9.60027C7.20002 10.7891 7.92279 11.7184 8.7888 12.2958C9.3642 12.6794 10.0541 12.9498 10.8 13.0899L10.8 15.4194C10.3308 15.267 9.98303 15.0385 9.78803 14.8138C9.35368 14.3132 8.59578 14.2596 8.09521 14.6939C7.59464 15.1283 7.54096 15.8862 7.9753 16.3867C8.65029 17.1646 9.67149 17.6773 10.8 17.8894L10.8 18.0002C10.8 18.663 11.3373 19.2003 12 19.2003C12.6627 19.2003 13.2 18.663 13.2 18.0003L13.2 17.8899C13.946 17.7498 14.6359 17.4794 15.2113 17.0958C16.0773 16.5184 16.8 15.5891 16.8 14.4003C16.8 13.2115 16.0773 12.2821 15.2113 11.7047C14.6359 11.3212 13.9459 11.0507 13.2 10.9107L13.2 8.58117C13.6692 8.73352 14.017 8.96198 14.212 9.18672C14.6464 9.68729 15.4043 9.74098 15.9049 9.30663C16.4054 8.87228 16.4591 8.11439 16.0248 7.61382C15.3498 6.83591 14.3286 6.32325 13.2 6.1111V6.00027Z" />
                </svg>
                <span className="ml-2">Sales</span>
              </Link>
            </li>

            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                {/* <BarChartIcon className="w-6 h-6 fill-current" /> */}
                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M18.0142 3.99786C16.9092 3.99786 16.0142 4.89286 16.0142 5.99786V17.9979C16.0142 19.1029 16.9092 19.9979 18.0142 19.9979H20.0142C21.1192 19.9979 22.0142 19.1029 22.0142 17.9979V5.99786C22.0142 4.89286 21.1192 3.99786 20.0142 3.99786H18.0142ZM11.0142 7.99786C9.90916 7.99786 9.01416 8.89286 9.01416 9.99786V17.9979C9.01416 19.1029 9.90916 19.9979 11.0142 19.9979H13.0142C14.1192 19.9979 15.0142 19.1029 15.0142 17.9979V9.99786C15.0142 8.89286 14.1192 7.99786 13.0142 7.99786H11.0142ZM4.01416 11.9979C2.90916 11.9979 2.01416 12.8929 2.01416 13.9979V17.9979C2.01416 19.1029 2.90916 19.9979 4.01416 19.9979H6.01416C7.11916 19.9979 8.01416 19.1029 8.01416 17.9979V13.9979C8.01416 12.8929 7.11916 11.9979 6.01416 11.9979H4.01416Z" />
                </svg>
                <span className="ml-2">Analytics</span>
              </Link>
            </li>


            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                {/* <CurrencyDollarIcon className="w-6 h-6 fill-current" /> */}

                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10.1201 8.90167C10.3058 8.77783 10.5353 8.66715 10.8 8.58148L10.8 10.6191C10.5353 10.5334 10.3058 10.4227 10.1201 10.2989C9.68315 10.0076 9.60002 9.73695 9.60002 9.60027C9.60002 9.46359 9.68315 9.19296 10.1201 8.90167Z" />
                  <path d="M13.2 15.4191L13.2 13.3815C13.4648 13.4672 13.6942 13.5778 13.88 13.7017C14.3169 13.993 14.4 14.2636 14.4 14.4003C14.4 14.537 14.3169 14.8076 13.88 15.0989C13.6942 15.2227 13.4648 15.3334 13.2 15.4191Z" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.6003C17.302 21.6003 21.6 17.3022 21.6 12.0003C21.6 6.69834 17.302 2.40027 12 2.40027C6.69809 2.40027 2.40002 6.69834 2.40002 12.0003C2.40002 17.3022 6.69809 21.6003 12 21.6003ZM13.2 6.00027C13.2 5.33753 12.6628 4.80027 12 4.80027C11.3373 4.80027 10.8 5.33753 10.8 6.00027V6.11066C10.0541 6.25074 9.3642 6.52115 8.7888 6.90475C7.92279 7.48209 7.20002 8.41147 7.20002 9.60027C7.20002 10.7891 7.92279 11.7184 8.7888 12.2958C9.3642 12.6794 10.0541 12.9498 10.8 13.0899L10.8 15.4194C10.3308 15.267 9.98303 15.0385 9.78803 14.8138C9.35368 14.3132 8.59578 14.2596 8.09521 14.6939C7.59464 15.1283 7.54096 15.8862 7.9753 16.3867C8.65029 17.1646 9.67149 17.6773 10.8 17.8894L10.8 18.0002C10.8 18.663 11.3373 19.2003 12 19.2003C12.6627 19.2003 13.2 18.663 13.2 18.0003L13.2 17.8899C13.946 17.7498 14.6359 17.4794 15.2113 17.0958C16.0773 16.5184 16.8 15.5891 16.8 14.4003C16.8 13.2115 16.0773 12.2821 15.2113 11.7047C14.6359 11.3212 13.9459 11.0507 13.2 10.9107L13.2 8.58117C13.6692 8.73352 14.017 8.96198 14.212 9.18672C14.6464 9.68729 15.4043 9.74098 15.9049 9.30663C16.4054 8.87228 16.4591 8.11439 16.0248 7.61382C15.3498 6.83591 14.3286 6.32325 13.2 6.1111V6.00027Z" />
                </svg>

                <span className="ml-2">Payouts</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                {/* <SearchIcon className="w-6 h-6 fill-current" /> */}
                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.60002 4.80027C6.94906 4.80027 4.80002 6.9493 4.80002 9.60027C4.80002 12.2512 6.94906 14.4003 9.60002 14.4003C12.251 14.4003 14.4 12.2512 14.4 9.60027C14.4 6.9493 12.251 4.80027 9.60002 4.80027ZM2.40002 9.60027C2.40002 5.62382 5.62357 2.40027 9.60002 2.40027C13.5765 2.40027 16.8 5.62382 16.8 9.60027C16.8 11.1553 16.3071 12.5951 15.4689 13.7721L21.2486 19.5517C21.7172 20.0204 21.7172 20.7802 21.2486 21.2488C20.7799 21.7174 20.0201 21.7174 19.5515 21.2488L13.7719 15.4692C12.5949 16.3073 11.155 16.8003 9.60002 16.8003C5.62357 16.8003 2.40002 13.5767 2.40002 9.60027Z" />
                </svg>
                <span className="ml-2">Discover</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                {/* <CollectionIcon className="w-6 h-6 fill-current" /> */}
                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M7.99774 2.01421C5.44574 2.01421 3.99774 3.46261 3.99774 6.01631V21.0242C3.99774 21.7425 4.74375 22.2128 5.40375 21.9309L11.9977 19.1169L18.5917 21.9309C19.2517 22.2139 19.9977 21.7423 19.9977 21.0242V6.01631C19.9977 3.39151 18.6927 2.01431 15.9977 2.01421H7.99774ZM9.99774 8.01741C10.7187 8.01741 11.3647 8.38291 11.7167 8.86151C11.8127 8.99291 11.9977 9.26801 11.9977 9.26801C11.9977 9.26791 12.2118 8.99031 12.3098 8.86151C12.6778 8.37941 13.3237 8.01741 13.9977 8.01741C15.1027 8.01741 15.9977 8.85731 15.9977 9.89331C15.9977 12.6031 11.9977 14.6771 11.9977 14.6771C11.9977 14.6771 7.99774 12.6031 7.99774 9.89331C7.99774 8.85741 8.89274 8.01741 9.99774 8.01741Z" />
                </svg>
                <span className="ml-2">Library</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                {/* <GearIcon className="w-6 h-6 fill-current" /> */}
                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M6.01416 3.99786C3.80516 3.99786 2.01416 5.78886 2.01416 7.99786V15.9979C2.01416 18.2069 3.80516 19.9979 6.01416 19.9979L9.02316 20.0079C9.44916 20.0079 9.89516 20.2039 10.4062 20.6749C10.6052 20.8589 10.8432 21.0889 11.0052 21.3039C11.1852 21.5439 11.4202 22.0008 12.0142 21.9978C12.6082 21.9948 12.8012 21.5909 13.0142 21.3099C13.1752 21.1119 13.3682 20.9229 13.5672 20.7389C14.0792 20.2679 14.5882 19.9979 15.0142 19.9979H18.0142C20.2232 19.9979 22.0142 18.2069 22.0142 15.9979V7.99786C22.0142 5.78886 20.2232 3.99786 18.0142 3.99786H15.0142C13.8032 3.99786 12.7482 4.55387 12.0142 5.40387C11.2802 4.55387 10.2252 3.99786 9.01416 3.99786H6.01416ZM15.0142 5.99786H18.0142C19.1192 5.99786 20.0142 6.89286 20.0142 7.99786V15.9979C20.0142 17.1029 19.1192 17.9979 18.0142 17.9979H15.0142C14.3022 17.9979 13.6342 18.2548 13.0102 18.6598L13.0142 7.99786C13.0142 6.89286 13.9092 5.99786 15.0142 5.99786Z" />
                </svg>
                <span className="ml-2">Help</span>
              </Link>
            </li>
            <li className='py-[20px]'>
              <Link to="/about" className="flex items-center p-2 text-white hover:text-pink">
                {/* <GearIcon className="w-6 h-6 fill-current" /> */}
                <svg className="w-6 h-6 fill-current" style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M8.9679 2.45578C7.5499 2.90478 6.3269 3.63979 5.2489 4.64279C4.9159 4.95379 4.81391 5.46078 5.02991 5.86178C5.83091 7.34278 4.99289 8.92678 3.18689 9.01778C2.74389 9.04078 2.3529 9.36778 2.2489 9.79878C2.0699 10.5438 1.9989 11.1678 1.9989 11.9868C1.9989 12.6738 2.0729 13.4508 2.2179 14.1428C2.3079 14.5748 2.6839 14.8858 3.1239 14.9248C4.9419 15.0818 5.84191 16.4678 5.02991 18.2368C4.84991 18.6298 4.9319 19.0998 5.2489 19.3928C6.3109 20.3758 7.5309 21.0678 8.9679 21.5178C9.3779 21.6468 9.8409 21.4918 10.0929 21.1428C11.2049 19.6048 12.8179 19.5988 13.8739 21.1428C14.1229 21.5068 14.5789 21.6818 14.9989 21.5488C16.3859 21.1128 17.6779 20.3698 18.7489 19.3928C19.0789 19.0928 19.1659 18.6058 18.9679 18.2058C18.1359 16.5268 19.0929 14.9848 20.8109 14.9558C21.2669 14.9478 21.6729 14.6478 21.7799 14.2058C21.9529 13.4888 21.9989 12.8638 21.9989 11.9868C21.9989 11.2328 21.9099 10.4898 21.7489 9.76778C21.6469 9.31178 21.2479 8.98778 20.7799 8.98678C19.0889 8.98378 18.1409 7.32178 18.9679 5.86178C19.1979 5.45478 19.1259 4.95679 18.7799 4.64279C17.6899 3.65279 16.3609 2.87978 14.9679 2.45578C14.5399 2.32578 14.0849 2.48578 13.8429 2.86178C12.8769 4.36178 11.0729 4.38879 10.1239 2.89279C9.8809 2.50979 9.3999 2.31778 8.9679 2.45578ZM11.9989 7.98678C14.2079 7.98678 15.9989 9.77778 15.9989 11.9868C15.9989 14.1958 14.2079 15.9868 11.9989 15.9868C9.7899 15.9868 7.9989 14.1958 7.9989 11.9868C7.9989 9.77778 9.7899 7.98678 11.9989 7.98678Z" />
                </svg>
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
