import React from "react";
import { Box, Chip, Typography } from "@mui/material";

const SkillSet = ({ skillName, skillData }) => {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "20px",
          margin: "30px 0px",
          overflowX: "scroll",
          width: "100%",
        }}
      >
        {skillData.length > 0 &&
          skillData?.map((data) => (
            <Box>
              <Chip key={data._id} label={data.value} color="primary" />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default SkillSet;
