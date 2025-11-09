import React, { useEffect, useState } from 'react'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const ListBlog = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const { axios } = useAppContext()
  
  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('/api/admin/blogs')
      
      if (data.success) {
        setBlogs(data.blogs || [])
      } else {
        toast.error(data.message || 'Failed to fetch blogs')
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
      toast.error(error.response?.data?.message || 'Failed to load blogs')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold bg-linear-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
        All Blogs ({blogs.length})
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
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <BlogTableItem 
                    key={blog._id} 
                    blog={blog} 
                    fetchBlogs={fetchBlogs} 
                    index={index + 1}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                    No blogs found. Create your first blog to get started!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListBlog