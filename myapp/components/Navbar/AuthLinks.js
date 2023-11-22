'use client'
import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; 

const AuthLinks = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const menuLinks = [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ];
      const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
      };
  return (
    <section>

    </section>
  )
}

export default AuthLinks