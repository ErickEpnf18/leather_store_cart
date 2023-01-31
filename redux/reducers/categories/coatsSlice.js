import { createSlice, createAsyncThunk, rejectWithValue } from '@reduxjs/toolkit'
import axios from 'axios';
import { getCategory } from 'service/api';

export const fetchCoats = createAsyncThunk('coats/fetchCoats', async (id = null,{ rejectWithValue }) => {
  try{
    return await getCategory("coats")
  }catch(error){
      return rejectWithValue("an error occurred")
  }
})

export const coatsSlice = createSlice({
  name: 'coats',
  initialState: {
    items: [],
    category: 'coats',
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
    [fetchCoats.pending]: (state, action) =>{
      state.status = 'pending'
    },
    [fetchCoats.fulfilled]: (state, action) =>{
      // console.log("yes this", action.payload)
      state.items = [...action.payload[0]?.data[0]]
      state.id = action.payload[0]?.id
      state.status = 'success'
    },
    [fetchCoats.rejected]: (state, action) =>{
      state.status = 'rejected'
      state.error = action.payload
    },
  }
})

export const { addItem } = coatsSlice.actions
export const selectData = (state) => state.coats

export default coatsSlice.reducer