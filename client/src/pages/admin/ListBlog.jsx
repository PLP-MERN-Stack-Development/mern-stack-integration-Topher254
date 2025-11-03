import React, { useEffect, useState } from 'react'
import { blogData } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'

const ListBlog = () => {
  const [blogs, setBlogs] = useState([])
  
  const fetchBlogs = async () => {
    setBlogs(blogData)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold bg-linear-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
        All Blogs
      </h1>
      
      <div className="bg-white rounded-2xl shadow-xl border border-pink-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-linear-to-r from-pink-50 to-rose-50 border-b border-pink-200">
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">
                  #
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">
                  Blog Title
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-100">
              {blogs.map((blog, index) => {
                return (
                  <BlogTableItem 
                    key={blog._id} 
                    blog={blog} 
                    fetchBlogs={fetchBlogs} 
                    index={index + 1}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListBlog