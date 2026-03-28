import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/BG.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Big Deals on Your Favorite Products
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Discover amazing products at unbeatable prices. Limited time deals available.
          </p>

          <Link to="/ProductListing" className="bg-red-500 animate-pulse px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition">
            Start Shopping
          </Link>
        </div>
      </div>

    </section>
  );
}