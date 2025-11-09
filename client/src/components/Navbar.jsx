import React from 'react'
import logo from '../assets/rida.png'
import { useNavigate } from 'react-router' 
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const {navigate,token} =useAppContext()

  return (
    <div className='sticky top-0 z-50  backdrop-blur-md '>
      <div className='flex justify-between items-center py-4 px-6 sm:px-10 xl:px-32'>
        
        <div className='flex justify-center items-center'>
          <h1 
            className='text-2xl sm:text-3xl font-bold text-gray-900 cursor-pointer hover:scale-105 transition-transform duration-300' 
            onClick={() => navigate('/')}
          >
            Rida
          </h1>
        </div>

        <ul className='hidden md:flex gap-8 text-sm font-semibold text-gray-700'>
          <li 
            className='cursor-pointer hover:text-gray-900 hover:scale-110 transition-all duration-200 relative group' 
            onClick={() => navigate('/')}
          >
            Home
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300'></span>
          </li>
          <li className='cursor-pointer hover:text-gray-900 hover:scale-110 transition-all duration-200 relative group'>
            Categories
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300'></span>
          </li>
          <li className='cursor-pointer hover:text-gray-900 hover:scale-110 transition-all duration-200 relative group'>
            Contact
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300'></span>
          </li>
          <li className='cursor-pointer hover:text-gray-900 hover:scale-110 transition-all duration-200 relative group'>
            About
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300'></span>
          </li>
        </ul>

        <button
          onClick={() => navigate('/admin')}
          className='bg-gray-900 cursor-pointer text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md'
        >
          {token? "Dashboard":'Login'}
        </button>
      </div>
    </div>
  )
}

export default Navbar