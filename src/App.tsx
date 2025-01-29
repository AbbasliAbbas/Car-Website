import React from 'react'
import Signup from './Page/Signup'
import Login from './Page/Login'
import Header from './Page/header'
import {Routes, Route} from 'react-router'
function App() {
  return (
    <div>
     
  <Routes>
    <Route index path="header" element={<Header />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
  </Routes>
    </div>
  )
}

export default App