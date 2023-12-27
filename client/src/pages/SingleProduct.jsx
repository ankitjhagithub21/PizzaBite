import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import FoodData from '../data';

import Menu from './Menu';
import MyModal from '../components/MyModal';

const SingleProduct = () => {
 
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);
  useEffect(() => {
    const foundFood = FoodData.find((food) => food.id == id);

    if (foundFood) {
      setFood(foundFood);
    }
  }, [id]);

  if (!food) {
    return <div className='py-24'>Loading...</div>;
  }
  const handleClose = () =>{
    setShowModal(false)
  }
 
 

  const handleAddToCart = () => {
    if (isAuth) {
      dispatch(addToCart({ ...food, qty: 1 }));
      navigate('/cart');
    } else {
      setShowModal(true);
    }
  
  };
  
 
  return (
    <section>
      
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
          <img
            alt={food.name}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
            src={food.img}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium">
              {food.name}
            </h1>
            <div className="flex my-3 gap-3 text-lg">
              <div className='text-green-500'>
                <i className='ri-star-fill'></i>
                <i className='ri-star-fill'></i>
                <i className='ri-star-fill'></i>
                <i className='ri-star-fill'></i>
                <i className='ri-star-line'></i>
              </div>
              4 reviews
            </div>
            <p className="leading-relaxed text-md">
              {food.desc}
            </p>
            <div className="flex items-center my-5">
              <div className="flex items-center justify-between w-full gap-2 text-lg">
                <span className="font-bold text-2xl text-gray-900">
                  &#8377; {food.price}
                </span>
              </div>
            </div>
            <button
              className="text-white bg-green-500 border-0 py-2 px-6 hover:bg-green-600 rounded w-full"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      
      
      <MyModal visible={showModal} onClose={handleClose}/>
      <Menu />
    </section>
  );
};

export default SingleProduct;
