import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Contact from '../Pages/Contact'
import About from '../Pages/About'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes