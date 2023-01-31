import { createSlice, createAsyncThunk, rejectWithValue } from '@reduxjs/toolkit'
import axios from 'axios';
import { getCategory } from 'service/api';

export const fetchSportsWear = createAsyncThunk('coats/fetchSportsWear', async (id = null,{ rejectWithValue }) => {
  try{
    return await getCategory("sportswear")
  }catch(error){
      return rejectWithValue("an error occurred")
  }
})

export const sportswearSlice = createSlice({
  name: 'sportswear',
  initialState: {
    items: [],
    category: 'sportswear',
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
    [fetchSportsWear.pending]: (state, action) =>{
      state.status = 'pending'
    },
    [fetchSportsWear.fulfilled]: (state, action) =>{
      state.items = action.payload.slice()
      state.id = action.payload[0]?.id
      // console.log("fetchSportsWear", action.payload[0])
      state.status = 'success'
    },
    [fetchSportsWear.rejected]: (state, action) =>{
      state.status = 'rejected'
      state.error = action.payload
    },

  }
})

export const { addItem } = sportswearSlice.actions
export const selectData = (state) => state.sportswear

export default sportswearSlice.reducer