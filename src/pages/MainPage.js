import { Box } from "@mui/material";
import AboutMeView from "./AboutMeView";
// import logo from './logo.svg';
// import './App.css';

function MainPage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "375px", height: "812px", backgroundColor: "white" }}>
        <AboutMeView />
      </Box>
    </Box>
  );
}

export default MainPage;
