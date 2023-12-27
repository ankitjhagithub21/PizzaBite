import React, { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
  const initialData = {
    username: "",
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialData)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/api/auth/register", formData, {
      withCredentials: true
    })

    const data = await res.data;
    if (data.success) {
      toast.success(data.message)
      navigate("/login")
    }

  }

  return (
    <section className="body-font relative h-screen flex items-center justify-center">
      <div className="container px-5 mx-auto">

        <div className="lg:w-1/2 md:w-2/3 mx-auto  px-3 py-5 shadow-lg rounded-md bg-white">
          <h1 className="sm:text-3xl text-2xl mb-5 font-bold">
            Welcome To Pizza<span className='text-green-500'>Bite</span>
          </h1>
          <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="username" className="leading-7 text-lg ">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full rounded-md  bg-gray-100 outline-none  py-1 px-3 leading-8 mt-1"
                  placeholder='Enter Username'
                  value={formData.username}
                  onChange={handleChange}
                  required
                  autoComplete='off'
                />
              </div>
            </div>

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
                  placeholder='Enter Email'
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
                  placeholder='Enter Password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete='off'
                />
              </div>
            </div>

            <div className="p-2 w-full flex justify-between items-center">
              <button className=" text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Register
              </button>


            </div>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Register