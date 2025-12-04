import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Department from './components/Department'
import DepartmentCard from './components/DepartmentCard'
import DepartmentDetails from './components/DepartmentDetails'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
         <Header/>
         <Routes>
          <Route path='/home' element= {<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/department' element={<Department/>}/>
          <Route path='/department/:id' element={<DepartmentDetails/>}/>
          <Route path='/contact' element={<Contact/>}/>
         </Routes>
        <Footer/>
      </BrowserRouter>
  

    </>
  )
}

export default App
