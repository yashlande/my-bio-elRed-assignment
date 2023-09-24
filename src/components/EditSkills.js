import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import MultipleSelectChip from "./MultipleSelectChip";

const EditSkills = ({ skillName, skillData, onChange }) => {
  

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        margin: "30px 0px",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "bold", flexWrap: "wrap" }}>
        {skillName}
      </Typography>
      <Box>
        <MultipleSelectChip data={skillData} onChange={onChange}/>
      </Box>
    </Box>
  );
};

export default EditSkills;
