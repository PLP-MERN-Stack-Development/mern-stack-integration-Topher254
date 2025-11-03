import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comment from './pages/admin/Comment'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'


const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/admin' element={true ? <Layout /> : <Login/>}>
          <Route index element={<Dashboard />} />
          <Route path='/admin/addBlog' element={<AddBlog />} />
          <Route path='/admin/listBlog' element={<ListBlog />} />
          <Route path='/admin/comments' element={<Comment />} />


        </Route>
      </Routes>
    </div>
  )
}

export default App
