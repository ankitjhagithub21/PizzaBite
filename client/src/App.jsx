import React from 'react'
import 'remixicon/fonts/remixicon.css'
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Menu from './pages/Menu'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import Login from './components/Login'
import Register from './components/Register'
import {Toaster} from "react-hot-toast"
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/pizza/:id" element={<SingleProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App