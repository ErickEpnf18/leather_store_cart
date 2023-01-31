import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUsers } from 'service/api'

export const fetchUser = createAsyncThunk('auth/fetchUser', async (id = null,{ rejectWithValue }) => {
  try{
    return await getUsers()
  }catch(error){
      return rejectWithValue("an error occurred")
  }
})
const initialState = {
    username: "invitado",
    name:"invitado",
    email: "invitado@gmail.com",
    password:"invitado",
    token: "asdf3rrg424tgfd",
    status: null,
    error: null,
} 
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const {email, name, password, username} = action.payload
      state.email = email,
      state.name = name
      state.password = password
      state.username = username
      state.status = "success";
      state.error = null;
      if (typeof window !== "undefined"){
        localStorage.setItem("currentUser", JSON.stringify(state));
      }
    },
    logout: (state, action) => {
      state = {};
      localStorage.setItem("currentUser", JSON.stringify(state));
    },
    signup: (state, action) => {
      const {email, name, password, username} = action.payload
      state.email = email,
      state.name = name
      state.password = password
      state.username = username
      state.status = "success";
      state.error = null;
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) =>{
      state.status = 'pending'
    },
    [fetchUser.fulfilled]: (state, action) =>{
      //console.log("whta is this", action.payload)
      const user_index = action.payload.findIndex((item) => item.id.includes(state.email))
      state = {...action.payload[user_index]};
//      console.log("user_index", user_index)
      //state = user_index
      state.status = "success"    
      // console.log("super state", state)
    },
    [fetchUser.rejected]: (state, action) =>{
      state.status = 'rejected'
      state.error = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { login, logout, signup } = authSlice.actions
export const selectData = (state) => state.auth

export default authSlice.reducer