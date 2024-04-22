import { configureStore } from '@reduxjs/toolkit'
import productCounterReducer from './productCounterSlice'
import addToCartReducer from './addToCartSlice'
export const store = configureStore({
  reducer: {
    productCounter: productCounterReducer,
    addToCart:addToCartReducer
  },
})