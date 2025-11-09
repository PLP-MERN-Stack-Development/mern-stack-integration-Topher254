import React, { useEffect, useRef, useState } from 'react'
import { Upload } from 'lucide-react'
import addImage from '../../assets/upload.png'
import Quill from 'quill'
import { blogCategories } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddBlog = () => {
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('startup');
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null)
  const quillRef = useRef(null)
  const { axios } = useAppContext()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    if (!title || !subTitle || !quillRef.current || !image) {
      toast.error('Please fill all required fields');
      return;
    }

    const description = quillRef.current.root.innerHTML;
    if (!description || description === '<p><br></p>') {
      toast.error('Please add blog content');
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      const blogData = {
        title,
        subTitle,
        description,
        category,
        isPublished
      };

      formData.append('blog', JSON.stringify(blogData));
      formData.append('image', image);

      const { data } = await axios.post('/api/blog/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (data.success) {
        toast.success('Blog added successfully!');
        // Reset form
        setTitle('');
        setSubTitle('');
        setCategory('startup');
        setIsPublished(false);
        setImage(false);
        if (quillRef.current) {
          quillRef.current.root.innerHTML = '';
        }
      } else {
        toast.error(data.message || 'Failed to add blog');
      }
    } catch (error) {
      console.error('Error adding blog:', error);
      toast.error(error.response?.data?.message || 'Failed to add blog');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Initialize quill
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { 
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
          ]
        },
        placeholder: 'Write your blog content here...'
      })
    }
  }, [])

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmitHandler} className='flex-1 space-y-6'>
        <div className='bg-white p-6 rounded-2xl shadow-xl border border-pink-200 space-y-6'>
          <p className="text-sm font-semibold text-gray-700">Upload thumbnail</p>
          <label htmlFor='image' className="block cursor-pointer group">
            <div className="relative overflow-hidden rounded-xl border-2 border-dashed border-pink-300 hover:border-pink-500 transition-all">
              <img 
                src={!image ? addImage : URL.createObjectURL(image)} 
                alt='add image' 
                className="w-24 h-24 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Upload className='w-8 h-8 text-white' />
              </div>
            </div>
            <input 
              onChange={(e) => { setImage(e.target.files[0]) }} 
              type='file' 
              id='image' 
              hidden 
              required 
            />
          </label>

          <p className="text-sm font-semibold text-gray-700">Blog Title</p>
          <input 
            type='text' 
            placeholder='type here' 
            required 
            onChange={(e) => { setTitle(e.target.value) }} 
            value={title} 
            className="w-full px-4 py-3 rounded-xl border border-pink-200 transition-all outline-none"
          />

          <p className="text-sm font-semibold text-gray-700">Blog subTitle</p>
          <input 
            type='text' 
            placeholder='type here' 
            required 
            onChange={(e) => { setSubTitle(e.target.value) }} 
            value={subTitle} 
            className="w-full px-4 py-3 rounded-xl border border-pink-200 transition-all outline-none"
          />

          <p className="text-sm font-semibold text-gray-700">Blog Description</p>
          <div className="space-y-4">
            <div 
              ref={editorRef} 
              className="border border-pink-200 rounded-xl overflow-hidden min-h-[300px]"
            >
            </div>
          </div>

          <p className="text-sm font-semibold text-gray-700">Blog Category</p>
          <select 
            onChange={(e) => { setCategory(e.target.value) }} 
            value={category}
            className="w-full px-4 py-3 rounded-xl border border-pink-200 transition-all outline-none bg-white"
          >
            {blogCategories.map((item, index) => {
              return <option key={index} value={item}>{item}</option>
            })}
          </select>

          <div className="flex items-center gap-3 p-4 bg-pink-50 rounded-xl border border-pink-200">
            <input 
              type='checkbox' 
              checked={isPublished} 
              onChange={e => setIsPublished(e.target.checked)} 
              className="w-5 h-5 rounded border-pink-300 text-pink-600 cursor-pointer"
            />
            <p className="text-sm font-medium text-gray-700">Publish Now</p>
          </div>

          <button 
            type='submit' 
            disabled={loading}
            className='bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white px-6 py-2 rounded-full flex justify-right cursor-pointer font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
          >
            {loading ? 'Adding Blog...' : 'Add Blog'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddBlog