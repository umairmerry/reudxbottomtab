import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../src/slice/CounterSlice';
import productSlice from './slice/ProductSlice';
import PostReducer from './slice/PostSlice'



export const Store = configureStore({
  reducer: {
    // counter: counterSlice,
    // product: productSlice
    post: PostReducer,
  },

})