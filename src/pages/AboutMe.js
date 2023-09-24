import { Box, Divider, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { resume } from "../assets/img/index";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
        flexDirection: "column",
      }}
    >
      <Box>
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
        <Typography variant="body2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          sapiente commodi, voluptates at non, excepturi maxime deleniti nostrum
          culpa doloribus voluptas deserunt ut quo.
        </Typography>
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
        <Typography variant="body1" sx={{ color: "gray" }}>
          Blood group
        </Typography>
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
            cursor:'pointer'
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

export default AboutMe;
