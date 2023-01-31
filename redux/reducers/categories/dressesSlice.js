import { createSlice, createAsyncThunk, rejectWithValue } from '@reduxjs/toolkit'
import axios from 'axios';
import { getCategory } from 'service/api';

export const fetchDresses = createAsyncThunk('dresses/fetchDresses', async (id = null,{ rejectWithValue }) => {
  try{
    return await getCategory("dresses")
  }catch(error){
      return rejectWithValue("an error occurred")
  }
})

export const dressesSlice = createSlice({
  name: 'dresses',
  initialState: {
    items: [],
    category: 'dresses',
    status: null,
    error: null,
    id: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    deleteItem: (state, action) => {
    },
    editItem: (state, action) => {
    }
  },
  extraReducers: {
    [fetchDresses.pending]: (state, action) =>{
      state.status = 'pending'
    },
    [fetchDresses.fulfilled]: (state, action) =>{
      state.items = action.payload.slice()
      state.id = action.payload[0]?.id
      // console.log("dressesSlice", action.payload[0])
      state.status = 'success'
    },
    [fetchDresses.rejected]: (state, action) =>{
      state.status = 'rejected'
      state.error = action.payload
    },

  }
})

export const { addItem } = dressesSlice.actions
export const selectData = (state) => state.dresses

export default dressesSlice.reducer