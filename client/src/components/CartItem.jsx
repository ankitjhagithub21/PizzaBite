import React from 'react'
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../slices/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const handleDecrease = () => {
        dispatch(decreaseQuantity(item.id));
    };

    const handleIncrease = () => {
        dispatch(increaseQuantity(item.id));
    };



    return (


        <tr className='text-center text-xl bg-white border'>
            <td className="px-4 py-3">{item.name}</td>
            <td className="px-4 py-3">&#8377; {item.price * item.qty}</td>
            <td className="px-4 py-3 flex gap-2 items-center justify-center">

                <button className='text-white rounded px-1 bg-red-500' onClick={handleDecrease}>
                    <i className="ri-subtract-line"></i>
                </button>
                <span className="px-2 border rounded">{item ? item.qty : 0}</span>
                <button className='bg-green-500 px-1 text-white rounded' onClick={handleIncrease}>
                    <i className="ri-add-line"></i>
                </button>

            </td>
            <td className="px-4 py-3 text-lg text-gray-900">
                <button onClick={() => dispatch(removeFromCart(item.id))} className='text-red-500 text-2xl'>
                    <i className="ri-delete-bin-fill"></i>
                </button>
            </td>

        </tr>




    )
}

export default CartItem