import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="">
      <main className='min-h-screen dark:bg-black'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App