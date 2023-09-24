import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfessionalSkills = createAsyncThunk(
  "skills",
  async (projectContent, { dispatch }) => {
    const response = await axios.get(
      `https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json`
    );
    const data = response.data.result;
    
    dispatch(setSkills(data[0]?.skills))
    return data;
  }
);

export const getHobbies = createAsyncThunk(
  "skills",
  async (projectContent, { dispatch }) => {
    const response = await axios.get(
      `https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json`
    );
    const data = response.data.result;
    dispatch(setHobbies(data[0]?.hobbies))
    return data;
  }
);

export const getSubjects = createAsyncThunk(
  "skills",
  async (projectContent, { dispatch }) => {
    const response = await axios.get(
      `https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json`
    );
    const data = response.data.result;
    dispatch(setSubjects(data[0]?.subjects))
    return data;
  }
);

const initialState = {
  skills: "",
  hobbies: "",
  subjects: "",
};

const skillsSlice = createSlice({
  name: "skillsSlice",
  initialState: initialState,
  reducers: {
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setHobbies: (state, action) => {
      state.hobbies = action.payload;
    },
    setSubjects: (state, action) => {
      state.subjects = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSkills, setHobbies, setSubjects} = skillsSlice.actions;

export default skillsSlice.reducer;
