import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sprovider from './pages/Sprovider'
import Login from './pages/login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import Mybooking from './pages/Mybooking'
import Booking from './pages/Booking'
import Navbar from './componements/Navbar'
import Footer from './componements/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sprovider' element={<Sprovider />} />
         <Route path='/sprovider/:speciality' element={<Sprovider />} />
          <Route path='/login' element={<Login />} />
           <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
             <Route path='/myprofile' element={<Myprofile />} />
              <Route path='/mybooking' element={<Mybooking />} />
               <Route path='/booking/:spId' element={<Booking />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
