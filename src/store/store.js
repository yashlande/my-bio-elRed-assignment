import { configureStore } from '@reduxjs/toolkit'
import aboutMeSlice from './aboutMeSlice'

const store = configureStore({
  reducer: {
    aboutMeSlice,
  },
})

export default store