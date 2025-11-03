import { Delete, Trash } from 'lucide-react';
import React from 'react'

const BlogTableItem = ({blog,fetchBlogs,index}) => {
    const{title,createdAt} =blog;
    const BlogDate = new Date(createdAt);
  return (
 <tr>
    <th>{index}</th>
    <td>{title}</td>
    <td>{BlogDate.toLocaleDateString()}</td>
    <td>
        <p>{blog.isPublished?'published':'unpublished'}</p>
    </td>
    <td className='flex justify-center items-center'><button>{blog.isPublished?'unpublish':'publish'}</button>
    <Trash className='p-1 text-red-500 cursor-pointer' size={25} />
    </td>
 </tr>
  )
}

export default BlogTableItem
