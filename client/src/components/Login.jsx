import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { login, setUser } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialData = {
    email:"",
    password:""
  }
  const [formData,setformData] = useState(initialData)
  const handleChange = (e) =>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const  res = await axios.post("http://localhost:3000/api/auth/login",formData,{
      withCredentials:true
    })
    const data = await res.data;
    if(data.message){
      toast.success(data.message)
      dispatch(login())
      dispatch(setUser(data.user))
      navigate("/")
    }
  }
  return (
    <section className="relative h-screen flex items-center justify-center">
  <div className="container px-5 mx-auto">
    
    <div className="lg:w-1/2 md:w-2/3 mx-auto  px-3 py-5 shadow-lg rounded-md bg-white">
    <h1 className="sm:text-3xl text-2xl font-bold mb-5">
        Login to Your Account
      </h1>
      <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
        
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-lg ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md  bg-gray-100 outline-none  py-1 px-3 leading-8 mt-1"
              placeholder='Enter Your Email'
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete='off'
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="password" className="leading-7 text-lg ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full rounded-md  bg-gray-100 outline-none  py-1 px-3 leading-8 mt-1"
              placeholder='Enter Your Password'
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete='off'
            />
          </div>
        </div>
        <p className='text-lg ml-2 my-3'>New user? <Link to={"/register"} className='text-indigo-500 underline'> register here</Link></p>
        <div className="p-2 w-full flex justify-between items-center">
          <button className=" text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Log In
          </button>

         
        </div>
        
      </form>
    </div>
  </div>
</section>

  )
}

export default Login