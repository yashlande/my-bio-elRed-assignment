import {
  Box,
  Button,
  Divider,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import { resume } from "../assets/img/index";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { setAboutMe, setBloodGroup } from "../store/aboutMeSlice";

const AboutMeEdit = () => {
  const rootState = useSelector((state) => state.aboutMeSlice);
  const history = useNavigate();
  const dispatch = useDispatch();
  const [bloodGroup, setBloodGroupState] = useState(rootState.bloodGroup);
  const [aboutMe, setAboutMeState] = useState(rootState.aboutMe);
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const handleBloodGroupChange = (event) => {
    setBloodGroupState(event.target.value);
  };

  const handleAboutMeChange = (event) => {
    setAboutMeState(event.target.value);
  };

  const handleSaveBtn = () => {
    dispatch(setAboutMe(aboutMe));
    dispatch(setBloodGroup(bloodGroup));
    history('/')
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
        <Typography variant="body1">Write something about yourself?</Typography>
      </Box>
      <Box>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          variant="filled"
          value={aboutMe}
          onChange={handleAboutMeChange}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": { border: "none !important" },
          }}
        />
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
        <FormControl sx={{ width: "100px" }} size="small">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bloodGroup}
            onChange={handleBloodGroupChange}
          >
            {bloodGroups.map((group, key) => (
              <MenuItem key={key} value={group}>
                {group}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
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
            ":disabled":{
              backgroundColor:'#FDEBEB'
            }
          }}
          disabled={bloodGroup == "" || aboutMe == ""}
          onClick={() => handleSaveBtn()}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AboutMeEdit;
