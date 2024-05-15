import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RoutesConst from './constants/RoutesConst'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Header from './Components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path={RoutesConst.SIGNIN} element={<Signin />} />
      <Route path={RoutesConst.PROFILE} element={<Profile />} />
      <Route path={RoutesConst.SIGNUP} element={<Signup />} />
      <Route path={RoutesConst.ABOUT} element={<About />} />
    </Routes>
    </BrowserRouter>
  ) 
}
