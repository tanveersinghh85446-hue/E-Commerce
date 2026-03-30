import React from 'react'
import { Link } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";

import { IoIosLogIn } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3 flex gap-2">Cartify<TiShoppingCart className="mt-2"/></h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop destination for the best products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/ProductListing" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/Cart" className="hover:text-white transition-colors">Cart</Link></li>
              <li><Link to="/Wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">My Account</h3>
            <div className="flex flex-col gap-3">
              <Link
                to="/SignUp"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg transition-colors w-fit"
              >
                <SiGnuprivacyguard className="text-lg" />
                Sign Up
              </Link>
              <Link
                to="/LogIn"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-lg transition-colors w-fit"
              >
                <IoIosLogIn className="text-lg" />
                Log In
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>

    </footer>
  );
}