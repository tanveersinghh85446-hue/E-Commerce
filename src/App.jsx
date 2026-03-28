import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";
import ProductListing from "./Pages/ProductListing";
import ProductDetails from "./Pages/ProductDetails";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Cart from "./Pages/Cart";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Wishlist" element={<Wishlist/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/ProductListing" element={<ProductListing/>}/>
        <Route path="/ProductDetails" element={<ProductDetails/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}