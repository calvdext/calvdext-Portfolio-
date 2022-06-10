import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navagation from './Navagation'
import HomePage from './HomePage'
import About from './About'
import Contact from './Contact'
import './App.css'
import Footer from './Footer'

const App = () => {


  return (
    <div >
        <BrowserRouter>
          <Navagation/>
            <Routes>
              <Route path="/" element={<Navigate to="home" replace/>} />
              <Route path="/home" element={<HomePage/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
