import React from 'react'
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-900 px-4'>

      <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8'>

        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-6'>
          Create an Account
        </h2>

        {/* Name */}
        <div className='mb-4'>
          <label className='block text-sm mb-1'>Full Name</label>
          <input
            type='text'
            placeholder='Enter your name'
            className='w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400'
          />
        </div>

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

        {/* Confirm Password */}
        <div className='mb-4'>
          <label className='block text-sm mb-1'>Confirm Password</label>
          <input
            type='password'
            placeholder='Confirm your password'
            className='w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400'
          />
        </div>

        {/* Button */}
        <button className='w-full bg-amber-400 py-2 rounded-lg font-semibold hover:bg-amber-500 transition'>
          Sign Up
        </button>

        {/* Login Link */}
        <p className='text-center text-sm mt-4'>
          Already have an account?{" "}
          <Link to="/login" className='text-amber-500 hover:underline'>
            Login
          </Link>
        </p>

      </div>

    </div>
  )
}