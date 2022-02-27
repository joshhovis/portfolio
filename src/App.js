import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import MyResume from './components/Resume'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="">
      <main className='min-h-screen dark:bg-black'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/resume' element={<MyResume />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App