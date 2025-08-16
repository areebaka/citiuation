"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
    
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
          Citiuation
        </Typography>

      
        <Stack direction="row" spacing={2}>
          <Button component={Link} href="/" sx={{ color: "white" }}>
            Home
          </Button>
          <Button
            component={Link}
            href="/results?us=NYC&pk=Karachi"
            sx={{ color: "white" }}
          >
            Results
          </Button>
          <Button component={Link} href="/about" sx={{ color: "white" }}>
            About
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
