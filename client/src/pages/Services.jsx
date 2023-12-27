import React from 'react'
import ServiceBox from '../components/ServiceBox'

const Services = () => {
  const services = [
    {
      id:1,
      class:"ri-bowl-fill",
      title:"Catering",
      desc:"Delight your guests with our flavors and presentation.",
    },
    {
      id:2,
      class:"ri-motorbike-fill",
      title:"Fast delivery",
      desc:"We deliver your order promptly to your door in very less time.",
    },
    {
      id:3,
      class:"ri-shopping-cart-2-fill",
      title:"Online Ordering",
      desc:"Explore menu & order with ease using our Online Ordering.",
    },
    {
      id:4,
      class:"ri-gift-2-fill",
      title:"Gift Cards",
      desc:"Give the gift of exceptional dining with Foodi Gift Cards.",
    },
  ]
  return (
    <section className="py-24">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
      Our Services
      </h1>
  <div className="container px-5  mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full flex flex-col items-start justify-center p-3">
      <img src="./service.png" alt="service" className='shadow rounded-md' id='serviceImg' />
     
    </div>
    <div className="flex flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left text-center">
     {
      services.map((service)=>{
        return <ServiceBox key={service.id} service={service}/>
      })
     }
      
    </div>
  </div>
</section>

  )
}

export default Services