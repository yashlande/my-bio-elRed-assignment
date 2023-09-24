import { Box, Divider, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { resume } from "../assets/img/index";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Skills = () => {
  const rootState = useSelector((state) => state.aboutMeSlice);
  console.log("Root State", rootState);
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
    </Box>
  );
};

export default Skills;
