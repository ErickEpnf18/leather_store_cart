import { createSlice, createAsyncThunk, rejectWithValue } from '@reduxjs/toolkit'
import axios from 'axios';
import { getCategory } from 'service/api';

// export const fetchKarts = createAsyncThunk('coats/fetchKarts', async (id = null,{ rejectWithValue }) => {
//   try{
//     return await getCategory("user")
//   }catch(error){
//       return rejectWithValue("an error occurred")
//   }
// })


export const kartsSlice = createSlice({
  name: 'karts',
  initialState: {
    items: [],
    category: 'karts',
    status: null,
    error: null,
    email:"",
    id: 0,
    items_length: 0,
  },
  reducers: {
    addItem: (state, action) => {
      console.log("payload", action.payload)
      const existingIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );

      if (existingIndex >= 0) {
        state.items[existingIndex] = {
          ...state.items[existingIndex],
          cartQuantity: state.items[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        console.log("hey", tempProductItem)
        state.items.push(tempProductItem);
      }
      state.items_length = state.items.length
    },
    deleteItem: (state, action) => {
      state.items = [];
    },
    editItem: (state, action) => {
    },
    addEmail: (state, action) => {
      console.log("pay", action.payload)
      state.email = action.payload.email
    },
  },
  // extraReducers: {
  //   [fetchKarts.pending]: (state, action) =>{
  //     state.status = 'pending'
  //   },
  //   [fetchKarts.fulfilled]: (state, action) =>{
  //     state.items = action.payload?.slice()
  //     state.id = action.payload[0]?.id
  //     console.log("fetchKarts", action.payload[0])
  //     state.status = 'success'
  //   },
  //   [fetchKarts.rejected]: (state, action) =>{
  //     state.status = 'rejected'
  //     state.error = action.payload
  //   },

  // }
})

export const { addItem, addEmail } = kartsSlice.actions
export const selectData = (state) => state.karts

export default kartsSlice.reducer