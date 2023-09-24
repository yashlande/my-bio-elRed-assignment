import { Box, Divider, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { resume } from "../assets/img/index";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useSelector } from "react-redux";

const AboutMeEdit = () => {
  const rootState = useSelector((state) => state.aboutMeSlice);

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
        <KeyboardArrowLeftIcon />
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", marginBottom: "30px" }}
        >
          My Bio
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          About me
        </Typography>
        <EditIcon sx={{ cursor: "pointer" }} fontSize="20px" />
      </Box>
      <Box>
        {rootState && rootState.aboutMe !== "" ? (
          <Typography variant="body2">{rootState.aboutMe}</Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              height: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" sx={{ color: "#949293" }}>
              No about me added yet
            </Typography>
          </Box>
        )}
      </Box>
      <Divider sx={{ margin: "20px 0px" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Blood group
        </Typography>
        {rootState && rootState.bloodGroup !== "" ? (
          <Typography variant="body1" sx={{ color: "#949293" }}>
            {rootState.bloodGroup}
          </Typography>
        ) : (
          <Typography variant="body1" sx={{ color: "#949293" }}>
            Select
          </Typography>
        )}
      </Box>
      <Box>
        <Box
          sx={{
            height: "50px",
            boxShadow: "rgba(58, 53, 65, 0.1) 0px 2px 10px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={resume}
              alt="resume-icon"
              width={"40px"}
              height={"40px"}
            />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Resume
            </Typography>
          </Box>
          <ChevronRightIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMeEdit;
