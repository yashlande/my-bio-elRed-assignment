import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfessionalSkills = createAsyncThunk(
  'skills',
  async (projectContent, { dispatch }) => {
    const response = await axios.get(
      `https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json`
    );
    const data = response.data.result;
    return data;
  }
);

export const getHobbies = createAsyncThunk(
  'skills',
  async (projectContent, { dispatch }) => {
    const response = await axios.get(
      `https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json`
    );
    const data = response.data.result;
    return data;
  }
);

export const getSubjects = createAsyncThunk(
  'skills',
  async (projectContent, { dispatch }) => {
    const response = await axios.get(
      `https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json`
    );
    const data = response.data.result;
    return data;
  }
);


const initialState = {
  aboutMe: "",
  bloodGroup: "",
  resume: "",
};

const skillsSlice = createSlice({
  name: "skillsSlice",
  initialState: initialState,
  reducers: {
  },
});

// Action creators are generated for each case reducer function
export const { setAboutMe, setBloodGroup, setResume } = skillsSlice.actions;

export default skillsSlice.reducer;
