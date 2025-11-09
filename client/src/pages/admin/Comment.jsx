import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import CommentTableItem from '../../components/admin/CommentTableItem'

const Comment = () => {
  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved')
  const [loading, setLoading] = useState(true)
  const { axios } = useAppContext()

  const fetchComments = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('/api/admin/comments')
      
      if (data.success) {
        setComments(data.comments || [])
      } else {
        toast.error(data.message || 'Failed to fetch comments')
      }
    } catch (error) {
      console.error('Error fetching comments:', error)
      toast.error(error.response?.data?.message || 'Failed to load comments')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [])

  // Filter comments based on approval status
  const filteredComments = comments.filter(comment => {
    if (filter === 'Approved') {
      return comment.isApproved === true
    } else {
      return comment.isApproved === false
    }
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading comments...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-linear-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
          Comments ({filteredComments.length})
        </h1>
        <div className="flex gap-3">
          <button 
            onClick={() => { setFilter('Approved') }} 
            className={`px-6 py-1.5 cursor-pointer rounded-full font-medium transition-all duration-300 ${
              filter === 'Approved' 
                ? 'bg-linear-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                : 'bg-white border border-pink-200 text-gray-600'
            }`}
          >
            Approved
          </button>
          <button 
            onClick={() => { setFilter('Not Approved') }} 
            className={`px-6 py-1.5 cursor-pointer rounded-full font-medium transition-all duration-300 ${
              filter === 'Not Approved' 
                ? 'bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg' 
                : 'bg-white border border-pink-200 text-gray-600'
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-pink-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-linear-to-r from-pink-50 to-rose-50 border-b border-pink-200">
              <th className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">
                Blog Title & Comment
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-pink-100">
            {filteredComments.length > 0 ? (
              filteredComments.map((comment, index) => (
                <CommentTableItem 
                  key={comment._id} 
                  comment={comment} 
                  index={index + 1} 
                  fetchComments={fetchComments}
                />
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-8 text-center text-gray-500">
                  {filter === 'Approved' 
                    ? 'No approved comments found.' 
                    : 'No pending comments for approval.'
                  }
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comment