import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../components/CartItem';

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cart);

  if (cartItems.length === 0) {
    return (
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <p className="text-2xl font-medium text-gray-900 title-font mb-4">
            Your cart is empty.
          </p>
        </div>
      </section>
    );
  }

  return (

    <section className="body-font">
      <div className="container px-5 py-24 mx-auto ">

        <h1 className="sm:text-4xl text-3xl font-bold title-font text-center mb-10 ">
          Your Cart
        </h1>


        <div className="mx-auto w-full overflow-auto">
          <table className="table-auto w-full">
            <thead className='bg-gray-100'>
              <tr>
                <th className="px-4 py-3 ">
                  Name
                </th>
                <th className="px-4 py-3 ">
                  Price
                </th>
                <th className="px-4 py-3 ">
                  Quantity
                </th>
                <th className="px-4 py-3 ">
                  Action
                </th>


              </tr>
            </thead>
            <tbody>

              {
                cartItems.map((item) => {
                  return <CartItem key={item.id} item={item} />
                })
              }
            </tbody>
          </table>
        </div>

      </div>
    </section>



  );
};

export default Cart;
