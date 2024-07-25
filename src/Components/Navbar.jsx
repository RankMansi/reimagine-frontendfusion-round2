import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaHeart, FaShoppingBag } from 'react-icons/fa';
import { SiNike } from 'react-icons/si';
import './Navbar.css'; // Make sure to import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-ui-2 px-4 py-2 flex justify-between items-center bg-grey-500 font-font1 text-4xl">
      <div className="flex items-center space-x-4">
        <SiNike className="h-8 w-8 text-black" />
      </div>
      <div className="hidden md:flex md:flex-grow md:justify-center">
        <div className="flex space-x-4">
          <a href="#" className="text-black hover:text-gray-600">NEW & FEATURED</a>
          <a href="#" className="text-black hover:text-gray-600">MEN</a>
          <a href="#" className="text-black hover:text-gray-600">WOMEN</a>
          <a href="#" className="text-black hover:text-gray-600">KIDS</a>
          <a href="#" className="text-black hover:text-gray-600">SALE</a>
          <a href="#" className="text-black hover:text-gray-600">CUSTOMISE</a>
          <a href="#" className="text-black hover:text-gray-600">SNKRS</a>
        </div>
      </div>
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {isMenuOpen ? <FiX className="h-8 w-8" /> : <FiMenu className="h-8 w-8" />}
        </button>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <button onClick={toggleDropdown} className="text-black focus:outline-none relative">
          Options <FiChevronDown className="h-6 w-6 inline" />
        </button>
        <div className={`dropdown-menu absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md ${isDropdownOpen ? 'open' : ''}`}>
          <a href="#" className="block px-4 py-2 text-black hover:text-gray-600">Profile</a>
          <a href="#" className="block px-4 py-2 text-black hover:text-gray-600">Wishlist</a>
          <a href="#" className="block px-4 py-2 text-black hover:text-gray-600">Orders</a>
          <a href="#" className="block px-4 py-2 text-black hover:text-gray-600">Sign Out</a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 z-10 left-0 right-0 bg-accent flex flex-col items-center space-y-4 md:hidden">
          <a href="#" className="text-black hover:text-gray-600">NEW & FEATURED</a>
          <a href="#" className="text-black hover:text-gray-600">MEN</a>
          <a href="#" className="text-black hover:text-gray-600">WOMEN</a>
          <a href="#" className="text-black hover:text-gray-600">KIDS</a>
          <a href="#" className="text-black hover:text-gray-600">SALE</a>
          <a href="#" className="text-black hover:text-gray-600">CUSTOMISE</a>
          <a href="#" className="text-black hover:text-gray-600">SNKRS</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
