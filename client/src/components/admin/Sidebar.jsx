import { Home, List, MessageCircle, Plus } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const Sidebar = () => {
  return (
    <div className="w-60 bg-pink-100 min-h-screen flex flex-col py-6 shadow-lg border-r border-pink-200">
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-3 px-6 py-3 mx-3  transition-all duration-300 ${
            isActive
              ? 'border-b text-black shadow-lg'
              : 'text-gray-700 hover:bg-pink-200 hover:text-pink-800'
          }`
        }
      >
        <Home className="w-5 h-5" />
        <p className="font-medium">Dashboard</p>
      </NavLink>

      <NavLink
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 px-6 py-3 mx-3  transition-all duration-300 ${
            isActive
              ? 'border-b text-black shadow-lg'
              : 'text-gray-700 hover:bg-pink-200 hover:text-pink-800'
          }`
        }
      >
        <Plus className="w-5 h-5" />
        <p className="font-medium">Add Blog</p>
      </NavLink>

      <NavLink
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 px-6 py-3 mx-3  transition-all duration-300 ${
            isActive
              ? 'border-b text-black shadow-lg'
              : 'text-gray-700 hover:bg-pink-200 hover:text-pink-800'
          }`
        }
      >
        <List className="w-5 h-5" />
        <p className="font-medium">List Blogs</p>
      </NavLink>

      <NavLink
        end={true}
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-3 px-6 py-3 mx-3  transition-all duration-300 ${
            isActive
              ? 'border-b text-black shadow-lg'
              : 'text-gray-700 hover:bg-pink-200 hover:text-pink-800'
          }`
        }
      >
        <MessageCircle className="w-5 h-5" />
        <p className="font-medium">Comments</p>
      </NavLink>
    </div>
  )
}

export default Sidebar