import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import Sidebar from '../../components/admin/Sidebar'

const Layout = () => {
  const navigate = useNavigate()

  const logOut = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen flex flex-col  text-gray-800">
      <div className="flex items-center justify-between  px-6 py-1 shadow-lg sticky top-0 z-10 backdrop-blur-sm">
        <p
          onClick={() => navigate('/')}
          className="h-10 w-auto cursor-pointer hover:opacity-80 transition-all hover:scale-105"
        >Rida</p>
        <button
          onClick={logOut}
          className="bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-1.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium"
        >
          Log Out
        </button>
      </div>

      <div className="flex flex-1 h-[calc(100vh-70px)] bg-white/50 backdrop-blur-sm">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout