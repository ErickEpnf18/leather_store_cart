import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    load: false,
  },
  reducers: {
    logins: (state, action) => {
      state.user = action.payload
    },
    logouts: (state) => {
      state.user = null
    },
    loading: (state, action)=>{
      state.load = true
    }
  },
})

export const { logins, logouts } = userSlice.actions
export const selectUser = (state) => state.user.user
export const selectLoading = (state) => state.user.load


export default userSlice.reducer