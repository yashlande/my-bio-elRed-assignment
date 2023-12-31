import { Box } from "@mui/material";
import { Outlet } from "react-router";
// import logo from './logo.svg';
// import './App.css';

function App({children}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "375px", height: "812px", backgroundColor: "white" }}>
        {children}
      </Box>
    </Box>
  );
}

export default App;
