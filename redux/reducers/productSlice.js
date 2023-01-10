import { createSlice, createAsyncThunk, rejectWithValue } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (id = null,{ rejectWithValue }) => {
  try{
    const response = await axios.get('/data/women/jeans.json')
    return response.data
  }catch(error){
      return rejectWithValue("an error occurred")
  }
})

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.products.push(action.payload)
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) =>{
      state.status = 'pending'
    },
    [fetchProducts.fulfilled]: (state, action) =>{
      state.status = 'success'
      state.items = action.payload
    },
    [fetchProducts.rejected]: (state, action) =>{
      state.status = 'rejected'
      state.error = action.payload
    },

  }
})

export const { addItem } = productSlice.actions
export const selectData = (state) => state.products.data

export default productSlice.reducer