import { configureStore } from '@reduxjs/toolkit'
import aboutMeSlice from './aboutMeSlice'

export const store = configureStore({
  reducer: {
    aboutMeSlice,
  },
})