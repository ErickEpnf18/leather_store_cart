import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice';
import authSlice from './reducers/authSlice';
import productSlice from './reducers/productSlice';
import { productsApi } from '../features/productsApi';
import cartReducer from '../features/cartSlice';
import kartsSlice from './reducers/kartsSlice';
      //////categories/////
import coatsSlice from './reducers/categories/formalshirtsSlice';
import dressesSlice from './reducers/categories/dressesSlice';
import formalshirtsSlice from './reducers/categories/formalshirtsSlice';
import jeansSlice from './reducers/categories/jeansSlice';
import makeupSlice from './reducers/categories/makeupSlice';
import sportswearSlice from './reducers/categories/sportswearSlice';

export default configureStore({
      reducer: {
      /////users//////
      auth: authSlice,
      user: userSlice,
      cart: cartReducer,
      middleware: [logger],
      products: productSlice,
      karts: kartsSlice,
      //////categories/////
      coats: coatsSlice,
      dresses: dressesSlice,
      formalshirts: formalshirtsSlice,
      jeans: jeansSlice,
      makeup: makeupSlice,
      sportswear: sportswearSlice,
      [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),

});

