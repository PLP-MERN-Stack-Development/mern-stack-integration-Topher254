import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { blogComments, blogData } from '../assets/assets';
import Navbar from '../components/Navbar';
import bg1 from '../assets/bg1.jpg'
import Moment from 'moment'
import user from '../assets/user.png'
import { Facebook, Instagram, TwitterIcon, X } from 'lucide-react';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
const Blog = () => {
  const { id } = useParams();
const {axios} = useAppContext();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');


  const fetchBlogData = async () => {
   try {
    const {data} = await axios.get(`/api/blog/${id}`);
    data.success? setData(data.blog):toast.error(data.message)
   } catch (error) {
    toast.error(error.message)
    
   }
  }

  const addComment = (e) => {
    e.preventDefault();
  }

  const fetchComments = async () => {
try {
  const {data} = await axios.get('/api/blog/comments',{blogId:id})
  if(data.success){
    setComments(data.comments)
  }else{
    toast.error(data.message);
  }
} catch (error) {
    toast.error(error.message);
  
}
  }

  useEffect(() => {
    fetchBlogData();
    fetchComments();

  }, [])

  return data ? (
    <div className='mb-6'>
      <div className='relative'>
        <img src={bg1} alt='bg' className='absolute -top-50 -z-1 opacity-50' />
        <Navbar />
        <div className="max-w-3xl mx-auto mt-10 text-center space-y-3">
          <p className="text-gray-500 text-sm">
            Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {data.title}
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-600 italic">
            {data.subTitle}
          </h2>
          <p className="text-gray-700 font-medium">By Topher Raphael</p>
        </div>


      </div>
      <div className='mx-5 mt-6 max-w-2xl flex justify-center items-center flex-col'>
        <img src={data.image} alt='image' className='rounded-3xl mb-5 h-60 w-60' />
        <div className='py-2'>
          <p>{data.description}</p>
        </div>
        <div className='my-6 max-w-3xl'>
          <p>Comments ({comments.length})</p>
          <div className='flex flex-col gap-4 mt-2'>
            {comments.map((item, index) => (
              <div key={index} className='relative bg-gray-50 border shadow border-gray-200 max-w-xl rounded-lg p-1 text-gray-700'>
                <div className='flex items-center gap-2 pb-2'>

                  <img src={user} alt='' className='w-6 rounded-full border' />
                  <p className='font-medium'>{item.name}</p>
                </div>
                <p className='text-xs ml-8'>{item.content}</p>
                <div className='text-xs ml-8 absolute right-4 bottom-4 flex items-center gap-2 '>{Moment(item.createdAt).fromNow()}</div>
              </div>

            ))}

          </div>



        </div>
        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-lg font-semibold text-gray-800 mb-4">Add your comment</p>

          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4   "
          >
            <input
              type="text"
              placeholder="Your name"
              required
              onClick={(e) => { setName(e.target.value) }}
              className="w-full   bg-gray-100 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-pink-100"
            />

            <textarea
              required
              placeholder="Write your comment..."
              rows="4"
              onClick={(e) => { setComment(e.target.value) }}

              className="w-full  bg-gray-100  rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-pink-100 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-pink-600 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="max-w-3xl mx-auto my-10">
          <p className="text-gray-700 font-semibold mb-3">
            Share this article on social media
          </p>

          <div className="flex items-center gap-4 text-pink-500 text-2xl">
            <Instagram className="cursor-pointer rounded-full p-1 bg-gray-100 shadow hover:text-pink-600 transition-all" />
            <Facebook className="cursor-pointer rounded-full p-1 bg-gray-100 shadow hover:text-blue-600 transition-all" />
            <TwitterIcon className="cursor-pointer rounded-full p-1 bg-gray-100 shadow hover:text-sky-500 transition-all" />
          </div>
        </div>



      </div>

      <Footer />
    </div>
  ) : (
    <div>
      <Loader/>
    </div>
  )
}

export default Blog
