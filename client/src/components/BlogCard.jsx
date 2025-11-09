import React from 'react'
import { useNavigate } from 'react-router'

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="bg-white w-full max-w-sm mx-auto flex flex-col rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="self-start mb-2 text-xs font-semibold bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
          {category}
        </span>

        <h5 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h5>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {description.slice(0, 100)}...
        </p>

        <button className="mt-auto text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors">
          Read More →
        </button>
      </div>
    </div>
  )
}

export default BlogCard
