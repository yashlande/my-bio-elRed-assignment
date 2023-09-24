import { Box, Divider } from "@mui/material";
import AboutMeView from "./AboutMeView";
import Skills from "./Skills";
// import logo from './logo.svg';
// import './App.css';

function MainPage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "375px", height: "812px", backgroundColor: "white" }}>
        <AboutMeView />
        <Divider sx={{marginTop:'20px'}}/>
        <Skills/>
      </Box>
    </Box>
  );
}

export default MainPage;
