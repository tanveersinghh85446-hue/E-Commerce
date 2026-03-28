import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { BsBagHeart } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-amber-300 shadow-md px-6 py-4'>
      
      <div className='flex justify-between items-center'>
        
        {/* Logo */}
        <div className='text-xl font-bold'>
          <Link to="/">Cartify</Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8 text-lg'>
          <Link to="/">Home</Link>
          <Link to="/productlisting">Products</Link>
          <Link to="/productdetails">Product Details</Link>
          <Link to="/wishlist" className='text-2xl'><BsBagHeart /></Link>
          <Link to="/cart" className='text-2xl'><TiShoppingCart /></Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden text-3xl cursor-pointer' onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='flex flex-col items-center gap-6 mt-6 text-lg md:hidden'>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/productlisting" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/productdetails" onClick={() => setOpen(false)}>Product Details</Link>
          <Link to="/wishlist" onClick={() => setOpen(false)} className='text-2xl'><BsBagHeart /></Link>
          <Link to="/cart" onClick={() => setOpen(false)} className='text-2xl'><TiShoppingCart /></Link>
        </div>
      )}

    </nav>
  )
}