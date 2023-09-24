import { Box } from "@mui/material";
import AboutMe from "./pages/AboutMe";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "375px", height: "812px", backgroundColor: "white" }}>
        <AboutMe />
      </Box>
    </Box>
  );
}

export default App;
