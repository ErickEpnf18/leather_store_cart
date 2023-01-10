import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice';
import authSlice from './reducers/authSlice';
import productSlice from './reducers/productSlice';
import { productsApi } from '../features/productsApi';
import cartReducer from '../features/cartSlice';

export default configureStore({
      reducer: {
      auth: authSlice,
      user: userSlice,
      middleware: [logger],
      products: productSlice,
      cart: cartReducer,
      [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),

});

