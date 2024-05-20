import React from 'react'
import About from './Pages/About'
import Checkout from './Pages/Checkout'
import Shop from './Pages/Shop'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <><><Header /><BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/courses' element={<Shop />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter></><Footer /></>
  )
}

export default App