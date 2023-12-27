import React from 'react'
import { useNavigate } from 'react-router-dom'

const PizzaBox = ({food}) => {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate(`/pizza/${food.id}`)
    window.scrollTo({
      top: 0,
      
    });
  }
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2 cursor-pointer pizza-box w-full ">
        <div className="h-full flex flex-col items-center text-center shadow-md rounded py-3 bg-white" onClick={handleClick}>
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center"
            src={food.img}
          />
          <div className="w-full">
            <h2 className="text-lg text-gray-900 mt-3">
              {food.name}
            </h2>
            <h3 className="text-green-500 text-2xl font-bold mb-3">&#8377; {food.price}</h3>
          
          </div>
        </div>
      </div>
  )
}

export default PizzaBox