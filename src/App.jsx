import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Home from "./Pages/Home";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/Home" element={<Home/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}