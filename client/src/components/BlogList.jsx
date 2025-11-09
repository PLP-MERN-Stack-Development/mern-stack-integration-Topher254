import React, { useState } from 'react'
import { blogCategories } from '../assets/assets'
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {
  const [menu, setMenu] = useState('All')
  const { blogs, input } = useAppContext()

  const filteredBlogs = () => {
    if (input === '' || !input) {
      return blogs
    }
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
    )
  }

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 mb-10">
          {blogCategories.map((item) => (
            <button
              key={item}
              onClick={() => setMenu(item)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                menu === item
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'text-gray-700 bg-white hover:bg-pink-50 hover:text-pink-600 border border-gray-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {filteredBlogs()
            .filter((blog) => (menu === 'All' ? true : blog.category === menu))
            .map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
