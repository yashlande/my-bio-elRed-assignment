import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aboutMe: "",
  bloodGroup: "",
  resume: "",
};

export const aboutMeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setAboutMe: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.aboutMe = action.payload;
    },
    setBloodGroup: (state, action) => {
      state.bloodGroup = action.payload;
    },
    setResume: (state, action) => {
      state.resume = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAboutMe, setBloodGroup, setResume} = aboutMeSlice.actions;

export default aboutMeSlice.reducer;
