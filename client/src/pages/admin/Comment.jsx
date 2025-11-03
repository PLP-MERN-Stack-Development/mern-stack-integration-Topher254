import React, { useEffect, useState } from 'react'
import { blogComments } from '../../assets/assets';
import CommentTableItem from '../../components/admin/CommentTableItem';

const Comment = () => {

const [comment,setComment] =useState([]);
const[filter,setFilter]=useState('Not Approved');
const fetchComments=async()=>{
    setComment(blogComments)
}


useEffect(()=>{
    fetchComments();
},[])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-linear-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Comments</h1>
        <div className="flex gap-3">
            <button onClick={()=>{setFilter('Approved')}} className={`px-6 py-1.5 cursor-pointer rounded-full font-medium transition-all duration-300 ${filter==='Approved'?'bg-linear-to-r from-green-500 to-emerald-500 text-white shadow-lg':'bg-white border border-pink-200 text-gray-600'}`}>Approved</button>
            <button onClick={()=>{setFilter('Not Approved')}} className={`px-6 py-1.5 cursor-pointer rounded-full font-medium transition-all duration-300 ${filter==='Not Approved'?'bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg':'bg-white border border-pink-200 text-gray-600'}`}>Not Approved</button>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-xl border border-pink-100 overflow-hidden">
        <table className="w-full">
            <thead>
                <tr className="bg-linear-to-r from-pink-50 to-rose-50 border-b border-pink-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">Blog Title & Comment</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-pink-100">
                {comment.filter((Comment)=>{
                   if(filter ==='Approved') return comment.isApproved===true;
                   return comment.isApproved===false
                }).map((comment,index)=>{
                <CommentTableItem key={comment._id} comment={comment} index={index +1} fetchComments={fetchComments}/>

                })}
            </tbody>
        </table>
      </div>




    </div>
  )
}

export default Comment