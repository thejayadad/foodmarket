'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; 
import Logo from '../Logo/Logo';


const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuLinks = [
      { text: 'Home', link: '/' },
      { text: 'Menu', link: '/menu' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
    ];
  
    const toggleMobileMenu = () => {
      setMobileMenu(!mobileMenu);
    };
  return (
    <header className='px-4 py-12 z-20 sticky top-0'>
        <div className='flex justify-between items-center px-4 md:px-8'>
        <Logo />
        <div className="hidden md:flex space-x-5">
          {menuLinks.map((link, index) => (
       <Link key={index} href={link.link} className="relative inline-block text-lg font-semibold transition-colors duration-300 hover:text-primary hover:after:content-[''] after:absolute after:w-0 after:h-0 after:border after:border-b-2 after:border-primary after:bottom-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:translate-y-1/2 hover:after:w-full hover:after:border-t-0 hover:after:border-b-2 hover:after:top-0">
       {link.text}
     </Link>
     
          ))}
        </div>
        <div className="flex items-center space-x-6">
        <span className="relative z-10 ">
            <FaShoppingCart className='text-primary' size={20}  />
            <span className="text-white absolute -top-4 -right-2 bg-secondary text-red text-lg rounded-full w-5 h-5 flex items-center justify-center">
            3 
            </span>
        </span>
        <span className='cursor-pointer px-3 py-4 bg-transparent border border-spacing-8 border-secondary'>Logout</span>
        <div className='md:hidden'>
        <button onClick={toggleMobileMenu}>
            {mobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        </div>
         </div>
        {mobileMenu && (
        <div className="md:hidden bg-primary text-white p-5 space-y-4">
          {menuLinks.map((link, index) => (
            <Link key={index} href={link.link} className="block hover:underline">
              {link.text}
            </Link>
          ))}
        </div>
      )}

    </header>
  )
}

export default Navbar