import { Box, Divider, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import { resume } from "../assets/img/index";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getHobbies,
  getProfessionalSkills,
  getSubjects,
} from "../store/skillsSlice";
import SkillSet from "../components/SkillSet";

const Skills = () => {
  const rootState = useSelector((state) => state.skillsSlice);

  const [skills, setSkillsState] = useState([]);
  const [hobbies, setHobbiesState] = useState([]);
  const [subjects, setSubjectState] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      rootState.skills === "" &&
      rootState.hobbies === "" &&
      rootState.subjects === ""
    ) {
      dispatch(getProfessionalSkills());
      dispatch(getHobbies());
      dispatch(getSubjects());
    }
  }, []);

  useEffect(() => {
    setSkillsState(rootState.skills);
    setHobbiesState(rootState.hobbies);
    setSubjectState(rootState.subjects);
  }, [rootState]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Skills
        </Typography>
        <Link to={`editSkills`}>
          <EditIcon
            sx={{ cursor: "pointer", textDecoration: "none" }}
            fontSize="20px"
          />
        </Link>
      </Box>
      <SkillSet skillName={"My Professional Skills"} skillData={skills} />
      <SkillSet skillName={"My Hobbies"} skillData={hobbies} />
      <SkillSet skillName={"My Subjects"} skillData={subjects} />
    </Box>
  );
};

export default Skills;
