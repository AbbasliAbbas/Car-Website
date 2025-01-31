import React from 'react'
import Signup from './Page/Signup'
import Login from './Page/Login'
import Header from './Page/Header'
import Hero from './Page/Hero'
import About from './Page/About'
import Market from './Page/Market'
import Contact from './Page/Contact'
import {Routes, Route} from 'react-router'
import Footer from './Page/Footer'

function App() {
  return (
    <div>
  <Header />
  <Routes>
    <Route path="Market" element={<Market />} />
    <Route path="About" element={<About />} />
    <Route path="Contact" element={<Contact />} />
    <Route path="Login" element={<Login />} />
    <Route path="Signup" element={<Signup />} />
    <Route index  element={<Hero />} />
  </Routes>
  <Footer />

    </div>
  )
}

export default App