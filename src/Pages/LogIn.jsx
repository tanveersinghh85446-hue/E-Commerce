import React from 'react'
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-900 px-4'>
      
      <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8'>
        
        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-6'>
          Login to Your Account
        </h2>

        {/* Email */}
        <div className='mb-4'>
          <label className='block text-sm mb-1'>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            className='w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400'
          />
        </div>

        {/* Password */}
        <div className='mb-4'>
          <label className='block text-sm mb-1'>Password</label>
          <input
            type='password'
            placeholder='Enter your password'
            className='w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400'
          />
        </div>

        {/* Forgot Password */}
        <div className='text-right mb-4'>
          <a href="#" className='text-sm text-amber-500 hover:underline'>
            Forgot Password?
          </a>
        </div>

        {/* Button */}
        <button className='w-full bg-amber-400 py-2 rounded-lg font-semibold hover:bg-amber-500 transition'>
          Login
        </button>

        {/* Signup */}
        <Link to="/SignUp" className='text-center text-sm mt-4'>
          Don’t have an account?{" "}
          <span className='text-amber-500 cursor-pointer hover:underline'>
            Sign Up
          </span>
        </Link>

      </div>

    </div>
  )
}