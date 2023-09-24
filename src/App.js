import { Box } from "@mui/material";
import AboutMeView from "./pages/AboutMeView";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "375px", height: "812px", backgroundColor: "white" }}>
        <AboutMeView />
      </Box>
    </Box>
  );
}

export default App;
