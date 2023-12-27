import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font" id='hero'>
            <div className="container mx-auto flex px-5 py-24 md:flex-row items-center flex-col-reverse">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl my-3 font-bold text-gray-900 ">
                       Welcome To Pizza
                       <span className=" text-green-500">Bite</span>
                    </h1>
                    <p className="mb-8 leading-relaxed text-xl">
                        Indulge in a culinary journey with our artisanal pizzas made from the finest ingredients. From classic favorites to unique creations, each pizza is a masterpiece of flavor and quality. Savor the taste of perfection crafted just for you.
                    </p>
                    <div className="flex justify-center">
                        <Link className="inline-flex text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg" to={"/menu"}>
                            Explore Menu
                        </Link>
                        <Link className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg" to="/cart">
                            Order Now
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./pizza/p1.png"
                    />
                </div>
            </div>

        </section>


    )
}

export default Hero