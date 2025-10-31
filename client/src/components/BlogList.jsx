import React, { useState } from 'react'
import { blogCategories, blogData } from '../assets/assets';
import BlogCard from './BlogCard';

const BlogList = () => {
  const [menu, setMenu] = useState('All');

  return (
    <div className="max-w-7xl  px-6 sm:px-10 xl:px-32 pt-6">
      <div className="flex justify-center items-center gap-3 sm:gap-6 ">
        {blogCategories.map((item) => (
          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`relative cursor-pointer  px-4 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none  ${
              menu === item
                ? 'bg-pink-500 text-white '
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24 mx-8 mt-8'>
        {
            blogData.filter((blog)=>
                menu==='All'?true:blog.category === menu

            ).map((blog)=><BlogCard key={blog._id} blog={blog}/>)
        }
      </div>
    </div>
  )
}

export default BlogList
