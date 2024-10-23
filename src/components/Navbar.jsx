import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moeBrandLogo from '../assets/moeBrandLogo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-[100px] ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0 flex items-center gap-2'>
            {/* <img className="h-[120px] w-auto object-contain" src={moeBrandLogo} alt="logo" /> */}
            <p className='text-white text-[20px] font-bold cursor-pointer flex'>
              MOE
            </p>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <Link to="/" className='text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition duration-300'>Home</Link>
              <Link to="/about" className='text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition duration-300'>About</Link>
              <Link to="/products" className='text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition duration-300'>Products</Link>
              <Link to="/contact" className='text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition duration-300'>Contact</Link>
            </div>
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300'
            >
              {isOpen ? <HiX className='block h-6 w-6' /> : <GiHamburgerMenu className='block h-6 w-6' />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden bg-white bg-opacity-10 backdrop-filter backdrop-blur-md'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link to="/" className='text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium transition duration-300'>Home</Link>
            <Link to="/about" className='text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium transition duration-300'>About</Link>
            <Link to="/products" className='text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium transition duration-300'>Products</Link>
            <Link to="/contact" className='text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium transition duration-300'>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
