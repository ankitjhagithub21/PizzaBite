import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, logout, setUser } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {
   
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "Menu",
      path: "/menu"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact"
    },
  ]
  const [active, setActive] = useState(false)
  const toggleNav = () => {
    setActive(!active)
  }
  const isAuth = useSelector((state) => state.auth.isAuth)
  const cart = useSelector((state) => state.cart.cart)
  const handleLogOut = async() =>{
    const res = await axios.get("http://localhost:3000/api/auth/logout",{
      withCredentials:true
    })
    const data = await res.data;
   if(data.success){
    toast.success(data.message)
    dispatch(logout())
    navigate("/")
   }
  }
  const checkUser = async() =>{
    const res = await axios.get("http://localhost:3000/api/auth/checkUser",{
      withCredentials:true,
    });
    const data = await res.data;
   
    if(data.success){
      dispatch(login())
      dispatch(setUser(data.user));
      setName(data.user.username)
    }
  }
  useEffect(()=>{
    checkUser()
  },[])
  
  return (
    <header className="fixed top-0 w-full bg-white shadow-md" id='header'>
      <i className={`${active ? 'ri-close-line' : 'ri-menu-2-line'}`} id='menuBtn' onClick={toggleNav}></i>
      <div className="container mx-auto flex flex-wrap p-3  items-center justify-between">
        <Link className="text-3xl font-bold" to={"/"} id='logo'>
          Pizza
          <span className=" text-green-500">Bite</span>
        </Link>
        <nav className={`md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center ${active ? 'active' : ''}`} id='navbar'>

          {
            links.map((link) => {
              return <Link key={link.id} className="px-2  py-1 rounded-md mr-3  hover:bg-gray-200 text-lg" to={link.path} onClick={toggleNav}>{link.name}</Link>
            })
          }
        </nav>
        <div className='flex gap-3 items-center'>
          <Link className=" border-0 py-1 px-3 rounded bg-gray-100 hover:bg-gray-200   relative " to={"/cart"}>
            <span className='absolute -right-2 -top-2 bg-green-500 text-white rounded-full px-2 text-md'>{cart.length}</span>
            <i className="ri-shopping-cart-2-line"></i>
          </Link>
          {
            isAuth ? <button className="text-green-500 bg-gray-100 px-2 py-1 rounded" onClick={handleLogOut}>
            Log Out
          </button>: <Link className=" bg-green-500 py-1 px-3 hover:bg-green-600  rounded text-white" to={"/login"}>
            Log in
          </Link>
          }

        </div>

      </div>
    </header>
  )
}

export default Navbar