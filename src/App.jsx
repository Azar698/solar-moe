import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Payment from './components/Payment'
import Faq from './components/Faq'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='font-poppins relative z-0 bg-primary min-h-screen w-full'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
