import React, { useEffect, useState } from 'react'
import { Inbox, LucideTabletSmartphone, MessageCircle, Paperclip, RefreshCw } from 'lucide-react'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        blogs: 0,
        comments: 0,
        drafts: 0,
        recentBlogs: []
    })
    const [loading, setLoading] = useState(true)
    const { axios } = useAppContext()

    const fetchDashboard = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('/api/admin/dashboard')
            
            if (data.success) {
                setDashboardData({
                    blogs: data.dashboardData?.blogs || 0,
                    comments: data.dashboardData?.comments || 0,
                    drafts: data.dashboardData?.drafts || 0,
                    recentBlogs: data.dashboardData?.recentBlogs || []
                })
            } else {
                toast.error(data.message || 'Failed to fetch dashboard data')
            }
        } catch (error) {
            console.error('Error fetching dashboard:', error)
            toast.error(error.response?.data?.message || 'Failed to load dashboard')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDashboard()
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className="bg-pink-50 p-6 rounded-2xl shadow-lg border border-pink-200 hover:shadow-xl transition-all duration-300"> 
                    <div className="p-3 bg-pink-500 rounded-xl w-fit mb-4">
                        <Paperclip className="w-6 h-6 text-white"/>
                    </div>
                    <p className="text-4xl font-bold text-pink-600">{dashboardData.blogs}</p>
                    <p className="text-sm font-medium text-gray-700 mt-2">Blogs</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-2xl shadow-lg border border-pink-200 hover:shadow-xl transition-all duration-300"> 
                    <div className="p-3 bg-pink-500 rounded-xl w-fit mb-4">
                        <MessageCircle className="w-6 h-6 text-white"/>
                    </div>
                    <p className="text-4xl font-bold text-pink-600">{dashboardData.comments}</p>
                    <p className="text-sm font-medium text-gray-700 mt-2">Comments</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-2xl shadow-lg border border-pink-200 hover:shadow-xl transition-all duration-300"> 
                    <div className="p-3 bg-pink-500 rounded-xl w-fit mb-4">
                        <Inbox className="w-6 h-6 text-white"/>
                    </div>
                    <p className="text-4xl font-bold text-pink-600">{dashboardData.drafts}</p>
                    <p className="text-sm font-medium text-gray-700 mt-2">Drafts</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-pink-200 overflow-hidden">
                <div className="bg-pink-500 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <LucideTabletSmartphone className="w-5 h-5 text-white"/>
                        </div>
                        <p className="text-xl font-bold text-white">Latest Blogs</p>
                    </div>
                    <button 
                        onClick={fetchDashboard}
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                        title="Refresh"
                    >
                        <RefreshCw className="w-4 h-4 text-white" />
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-pink-50 border-b border-pink-200">
                                <th scope='col' className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">#</th>
                                <th scope='col' className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">Blog Title</th>
                                <th scope='col' className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">Date</th>
                                <th scope='col' className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">Status</th>
                                <th scope='col' className="px-6 py-4 text-left text-xs font-semibold text-pink-900 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-pink-100">
                            {dashboardData.recentBlogs.length > 0 ? (
                                dashboardData.recentBlogs.map((blog, index) => (
                                    <BlogTableItem 
                                        key={blog._id} 
                                        blog={blog} 
                                        fetchBlogs={fetchDashboard} 
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

export default Dashboard