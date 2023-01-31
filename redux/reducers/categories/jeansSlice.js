import { createSlice, createAsyncThunk, rejectWithValue } from '@reduxjs/toolkit'
import axios from 'axios';
import { getCategory } from 'service/api';

export const fetchJeans = createAsyncThunk('jeans/fetchJeans', async (id = null,{ rejectWithValue }) => {
  try{
    return await getCategory("jeans")
  }catch(error){
      return rejectWithValue("an error occurred")
  }
})

export const jeansSlice = createSlice({
  name: 'jeans',
  initialState: {
    items: [],
    category: 'jeans',
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
    [fetchJeans.pending]: (state, action) =>{
      state.status = 'pending'
    },
    [fetchJeans.fulfilled]: (state, action) =>{
      state.items = action.payload.slice()
      state.id = action.payload[0]?.id
      // console.log("jeans", action.payload[0])
      state.status = 'success'
    },
    [fetchJeans.rejected]: (state, action) =>{
      state.status = 'rejected'
      state.error = action.payload
    },

  }
})

export const { addItem } = jeansSlice.actions
export const selectData = (state) => state.jeans

export default jeansSlice.reducer