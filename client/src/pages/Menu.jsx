import React from 'react'
import PizzaBox from '../components/PizzaBox'
import FoodData from '../data'
const Menu = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-bold  text-gray-900">
      Our Menu
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-4 items-center justify-center ">
      {
        FoodData.map((food)=>{
            return <PizzaBox key={food.id} food={food}/>
        })
      }
      
    </div>
  </div>
</section>

  )
}

export default Menu