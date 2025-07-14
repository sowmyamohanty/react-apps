import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ApiIcon from "@mui/icons-material/Api";

const AppHeader: React.FC = () => {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <ApiIcon sx={{ mr: 2, fontSize: 32 }} />
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
          API Monitoring Dashboard
        </Typography>
        <Box />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
