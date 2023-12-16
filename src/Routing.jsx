import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup/signup'
import Login from './Pages/Login'
import Home from './Pages/Home'

const Routing = () => {
  return (
    <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default Routing
