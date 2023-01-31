import { createSlice } from '@reduxjs/toolkit'
const initialState ={
  user: null,
  load: false,
  items: [],
  
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
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