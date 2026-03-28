// import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// import { BsBagHeart } from "react-icons/bs";
// import { TiShoppingCart } from "react-icons/ti";
// import { HiMenu, HiX } from "react-icons/hi";
// import { CgProfile } from "react-icons/cg";

// export default function Navbar() {

//   const [open, setOpen] = useState(false);

//   return (
//     <nav className='bg-amber-300 shadow-md px-6 py-4'>

//       <div className='flex justify-between items-center'>

//         {/* Logo */}
//         <div className='text-xl font-bold flex'>
//           <Link to="/">Cartify</Link>
//           <span><TiShoppingCart className='mb-1 text-white text-2xl' /></span>
//         </div>

//         {/* Desktop Menu */}
//         <div className='hidden md:flex items-center gap-8 text-lg'>
//           <Link to="/">Home</Link>
//           <Link to="/wishlist" className='text-2xl'><BsBagHeart /></Link>
//           <Link to="/cart" className='text-2xl'><TiShoppingCart /></Link>
//           <Link to="/productlisting">Products</Link>
//           <Link to="/productdetails">Product Details</Link>
//           <Link to="/Profile"><CgProfile /></Link>


//         </div>

//         {/* Mobile Menu Button */}
//         <div className='md:hidden text-3xl cursor-pointer' onClick={() => setOpen(!open)}>
//           {open ? <HiX /> : <HiMenu />}
//         </div>

//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className='flex flex-col items-center gap-6 mt-6 text-lg md:hidden'>
//           <Link to="/" onClick={() => setOpen(false)}>Home</Link>
//           <Link to="/productlisting" onClick={() => setOpen(false)}>Products</Link>
//           <Link to="/productdetails" onClick={() => setOpen(false)}>Product Details</Link>
//           <Link to="/wishlist" onClick={() => setOpen(false)} className='text-2xl'><BsBagHeart /></Link>
//           <Link to="/cart" onClick={() => setOpen(false)} className='text-2xl'><TiShoppingCart /></Link>
//           <Link to="/Profile" onClick={() => setOpen(false)}><CgProfile /></Link>

//         </div>
//       )}

//     </nav>
//   )
// }


import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { BsBagHeart } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { HiMenu, HiX } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/productlisting", label: "Products" },
    { to: "/productdetails", label: "Details" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-amber-400/20
        ${scrolled
          ? 'bg-stone-950/90 backdrop-blur-xl shadow-2xl shadow-black/40'
          : 'bg-stone-950'
        }`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }
        .nav-underline::after {
          content: ''; position: absolute; bottom: 4px; left: 50%;
          transform: translateX(-50%); width: 0; height: 1.5px;
          background: #f59e0b; transition: width 0.3s ease; border-radius: 2px;
        }
        .nav-underline:hover::after, .nav-underline.active::after { width: 55%; }
      `}</style>

      <div className="font-dm max-w-7xl mx-auto px-6 h-17 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5 no-underline group">
          <span className="font-playfair text-2xl font-bold text-stone-100 group-hover:text-amber-400 transition-colors duration-200">
            Cartify
          </span>
          <TiShoppingCart className="text-amber-400 text-[1.7rem] -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-underline relative px-4 py-2 rounded-lg text-[0.8rem] font-medium tracking-widest uppercase transition-all duration-200 no-underline
                ${location.pathname === to
                  ? 'text-amber-400 active'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-amber-400/5'
                }`}
            >
              {label}
            </Link>
          ))}

          <div className="w-px h-6 bg-amber-400/20 mx-3" />

          {/* Icon Buttons */}
          <div className="flex items-center gap-1">
            <Link to="/wishlist" title="Wishlist"
              className="relative flex items-center justify-center w-10 h-10 rounded-xl text-stone-400 text-xl hover:text-amber-400 hover:bg-amber-400/10 hover:-translate-y-0.5 transition-all duration-200 no-underline">
              <BsBagHeart />
            </Link>
            <Link to="/cart" title="Cart"
              className="relative flex items-center justify-center w-10 h-10 rounded-xl text-stone-400 text-[1.35rem] hover:text-amber-400 hover:bg-amber-400/10 hover:-translate-y-0.5 transition-all duration-200 no-underline">
              <TiShoppingCart />
              <span className="absolute top-1.5 right-1.5 bg-amber-400 text-stone-950 text-[0.55rem] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">3</span>
            </Link>
            <Link to="/Profile" title="Profile"
              className="flex items-center justify-center w-10 h-10 rounded-xl text-stone-400 text-[1.35rem] hover:text-amber-400 hover:bg-amber-400/10 hover:-translate-y-0.5 transition-all duration-200 no-underline">
              <CgProfile />
            </Link>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-amber-400/20 text-amber-400 text-[1.4rem] cursor-pointer hover:bg-amber-400/15 transition-all duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 border-t border-amber-400/10 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="font-dm flex flex-col gap-1 px-6 py-4">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[0.9rem] tracking-wide transition-all duration-200 no-underline
                ${location.pathname === to
                  ? 'text-amber-400 bg-amber-400/8'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-amber-400/5 hover:pl-6'
                }`}
            >
              {label}
            </Link>
          ))}

          <div className="h-px bg-amber-400/10 mx-2 my-2" />

          <div className="flex items-center gap-2 px-2">
            <Link to="/wishlist"
              className="relative flex items-center justify-center w-10 h-10 rounded-xl text-stone-400 text-xl hover:text-amber-400 hover:bg-amber-400/10 transition-all duration-200 no-underline">
              <BsBagHeart />
            </Link>
            <Link to="/cart"
              className="relative flex items-center justify-center w-10 h-10 rounded-xl text-stone-400 text-[1.35rem] hover:text-amber-400 hover:bg-amber-400/10 transition-all duration-200 no-underline">
              <TiShoppingCart />
              <span className="absolute top-1.5 right-1.5 bg-amber-400 text-stone-950 text-[0.55rem] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">3</span>
            </Link>
            <Link to="/Profile"
              className="flex items-center justify-center w-10 h-10 rounded-xl text-stone-400 text-[1.35rem] hover:text-amber-400 hover:bg-amber-400/10 transition-all duration-200 no-underline">
              <CgProfile />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}