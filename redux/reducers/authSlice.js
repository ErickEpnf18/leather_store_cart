import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: "kmorles201314@gmail.com",
    name:"Kevin Morales",
    token: "dsdcrfedf345433f",
  },
  reducers: {
    login: (state) => {
      state.email = "hello, it works!",
      state.name = "Denisse Gavilanes"
    },
    logout: (state) => {
      state = {}
    },
    singup: (state, action) => {
      state= {
        email: action.payload.email,
        name: action.payload.name,
        token: action.payload.token,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, singup } = authSlice.actions

export default authSlice.reducer