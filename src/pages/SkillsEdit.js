import { Box, Button, Divider, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditSkills from "../components/EditSkills";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useDispatch, useSelector } from "react-redux";
import { setHobbies, setSkills, setSubjects } from "../store/skillsSlice";

const SkillsEdit = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const rootState = useSelector((state) => state.skillsSlice);

  const [skills, setSkillsState] = useState([]);
  const [hobbies, setHobbiesState] = useState([]);
  const [subjects, setSubjectState] = useState([]);

  const [selectedSkills, setSelectedSkillsState] = useState([]);
  const [selectedHobbies, setSelectedHobbiesState] = useState([]);
  const [selectedSubjects, setSelectedSubjectState] = useState([]);

  useEffect(() => {
    setSkillsState(rootState.skills);
    setHobbiesState(rootState.hobbies);
    setSubjectState(rootState.subjects);
  }, [rootState]);

  const handleSaveBtn = () => {
    if (selectedSkills.length > 0) dispatch(setSkills(selectedSkills));
    if (selectedHobbies.length > 0) dispatch(setHobbies(selectedHobbies));
    if (selectedSubjects.length > 0) dispatch(setSubjects(selectedSubjects));

    history("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Link to={"/"}>
          {" "}
          <KeyboardArrowLeftIcon />
        </Link>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", marginBottom: "30px" }}
        >
          Skills
        </Typography>
      </Box>
      <EditSkills
        skillName={"My Professional Skills"}
        skillData={skills}
        onChange={setSelectedSkillsState}
      />
      <EditSkills
        skillName={"My Hobbies"}
        skillData={hobbies}
        onChange={setSelectedHobbiesState}
      />
      <EditSkills
        skillName={"My Subjects"}
        skillData={subjects}
        onChange={setSelectedSubjectState}
      />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Button
          sx={{
            borderRadius: "8px",
            backgroundColor: "#E72D38",
            color: "white",
            width: "100%",
            ":hover": {
              backgroundColor: "#963933",
            },
            ":disabled": {
              backgroundColor: "#FDEBEB",
            },
          }}
          onClick={() => handleSaveBtn()}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default SkillsEdit;
