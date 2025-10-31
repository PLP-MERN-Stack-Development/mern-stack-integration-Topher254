import React from 'react'
import { useNavigate } from 'react-router';

const BlogCard = ({blog}) => {
    const {title,description,category,image,_id} = blog;
    const navigate = useNavigate();
  return (
    <div onClick={()=>{navigate(`/blog/${_id}`)}} className='w-full transition-all duration-300 rounded-lg overflow-hidden shadow hover:scale-105 cursor-pointer'>
        <img src={image} className='aspect-video'/>
        <span className='ml-5 mt-4  rounded-full bg-pink-100 px-3 py-1 text-xs'>{category}</span>
      <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
        <p className='mb-3 text-xs text-gray-600'>{description.slice(0,80)}</p>
      </div>
    </div>
  )
}

export default BlogCard
