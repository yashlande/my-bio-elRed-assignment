import { configureStore } from '@reduxjs/toolkit'
import aboutMeSlice from './aboutMeSlice'
import skillsSlice from './skillsSlice'

const store = configureStore({
  reducer: {
    aboutMeSlice,
    skillsSlice
  },
})

export default store