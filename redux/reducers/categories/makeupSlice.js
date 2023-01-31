import { createSlice, createAsyncThunk, rejectWithValue } from '@reduxjs/toolkit'
import axios from 'axios';
import { getCategory } from 'service/api';

export const fetchMakeUp = createAsyncThunk('coats/fetchMakeUp', async (id = null,{ rejectWithValue }) => {
  try{
    return await getCategory("makeup")
  }catch(error){
      return rejectWithValue("an error occurred")
  }
})

export const makeupSlice = createSlice({
  name: 'makeup',
  initialState: {
    items: [],
    category: 'makeup',
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
    [fetchMakeUp.pending]: (state, action) =>{
      state.status = 'pending'
    },
    [fetchMakeUp.fulfilled]: (state, action) =>{
      state.items = action.payload.slice()
      state.id = action.payload[0]?.id
      // console.log("dressesSlice", action.payload[0])
      state.status = 'success'
    },
    [fetchMakeUp.rejected]: (state, action) =>{
      state.status = 'rejected'
      state.error = action.payload
    },

  }
})

export const { addItem } = makeupSlice.actions
export const selectData = (state) => state.makeup

export default makeupSlice.reducer