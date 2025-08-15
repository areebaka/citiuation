"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const Header = () => {
  return (
    <AppBar position="sticky" color="primary" elevation={3}>
      <Toolbar>
        <Box display="flex" alignItems="center" gap={1}>
          <TravelExploreIcon />
          <Typography variant="h6" component="div">
            Citiuation
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
