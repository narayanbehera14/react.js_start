import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import About from './pages/About'
import ContactPage from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route  path='/Product' element={<Product/>} />
      </Routes>
    </div>
  )
}

export default App
