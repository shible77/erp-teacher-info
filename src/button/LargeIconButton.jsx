import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function LargeIconButton({ icon, text, onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        width: "110px",
        height: "110px",
        backgroundColor: "#f0f0f0", // Set the background color here
        "&:hover": { backgroundColor: "#ccc" }, // Change background color on hover
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {icon}
        <Typography variant="h6" align="center" sx={{ fontSize: "13px" }}>
          {text}
        </Typography>
      </div>
    </IconButton>
  );
}

export default LargeIconButton;
