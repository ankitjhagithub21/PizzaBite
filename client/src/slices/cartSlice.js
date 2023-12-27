import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      const existingItem = state.cart.find((item) => item.id === payload.id);

      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(payload);
      }
      
      toast.success('Added to cart');
    },
    increaseQuantity:(state,action) =>{
      state.cart = state.cart.map((item)=>item.id===action.payload ? {...item,qty:item.qty+1} : item)
      
    },
    decreaseQuantity:(state,action) =>{
       
      state.cart = state.cart.map((item)=>{
        if(item.id===action.payload){
          if(item.qty>1){
          item = {...item,qty:item.qty-1}
          }
        }
        return item
      })
      
    },
    removeFromCart:(state,action) =>{
      state.cart= state.cart.filter(item=>item.id!==action.payload)
      toast.success("Product removed")
      
    },

  },
});

export const { addToCart,increaseQuantity,decreaseQuantity,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
