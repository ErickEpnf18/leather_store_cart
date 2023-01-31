import { createSlice, createAsyncThunk, rejectWithValue } from '@reduxjs/toolkit'
import axios from 'axios';
import { getCategory } from 'service/api';

export const fetchFormalShirts = createAsyncThunk('formalshirts/fetchFormalShirts', async (id = null,{ rejectWithValue }) => {
  try{
    return await getCategory("formal_shirts")
  }catch(error){
      return rejectWithValue("an error occurred")
  }
})

export const formalshirtsSlice = createSlice({
  name: 'formalshirts',
  initialState: {
    items: [],
    category: 'formalshirts',
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
    [fetchFormalShirts.pending]: (state, action) =>{
      state.status = 'pending'
    },
    [fetchFormalShirts.fulfilled]: (state, action) =>{
      state.items = action.payload.slice()
      state.id = action.payload[0]?.id
      // console.log("formalshirts", action.payload[0])
      state.status = 'success'
    },
    [fetchFormalShirts.rejected]: (state, action) =>{
      state.status = 'rejected'
      state.error = action.payload
    },

  }
})

export const { addItem } = formalshirtsSlice.actions
export const selectData = (state) => state.formalshirts

export default formalshirtsSlice.reducer