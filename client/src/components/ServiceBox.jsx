import React from 'react'

const ServiceBox = ({ service }) => {
  return (
    <div className="flex flex-col lg:items-start items-center sm:w-full p-2 w-full lg:w-1/2 md:w-1/2">
      <div className="flex-grow   bg-white p-3 shadow-lg rounded-md pizza-box cursor-pointer">
        <i className={`${service.class} text-4xl text-green-500`}></i>
        <h2 className="text-xl font-bold my-2">
          {service.title}
        </h2>
        <p className="leading-relaxed text-base">
          {service.desc}
        </p>

      </div>
    </div>


  )
}

export default ServiceBox