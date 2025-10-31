import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from 'react-router'
import Blog from './pages/Blog'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
      </Routes>
    </div>
  )
}

export default App
