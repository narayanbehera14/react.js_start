import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './pages/Product'
import About from './pages/About'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Nav2 from './components/Nav2'

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar />
      <Nav2/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses/>} /> 
        <Route path='/courses/:courseId' element={<CourseDetails/>} />    
        <Route path="/product" element={<Product />}>
  <Route path="men" element={<Men />} />
  <Route path="women" element={<Women />} />
  <Route path="kids" element={<Kids />} />
</Route>

        <Route path='*' element={<Notfound/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
