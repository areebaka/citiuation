"use client";

import { Container, Typography, Paper, Stack, Button, Chip } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Citiuation
      </Typography>


      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" paragraph>
          Citiuation is a simple tool to compare the cost of living between US and Pakistani cities. 
          It helps students, job seekers, and curious people quickly understand how living expenses differ.
        </Typography>
        <Typography variant="body1" paragraph>
          I built this project as part of my portfolio to sharpen my frontend skills and create something practical and visually engaging. 
          It combines my interest in data visualization with my journey as a software engineer.
        </Typography>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Tech Stack
      </Typography>
      <Stack direction="row" spacing={1} mb={4}>
        <Chip label="React" color="primary" />
        <Chip label="Next.js" color="primary" variant="outlined" />
        <Chip label="MUI" color="secondary" />
        <Chip label="Recharts" color="success" />
        <Chip label="TypeScript" color="info" />
      </Stack>

      <Paper elevation={1} sx={{ p: 3, textAlign: "center", mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Made by Areeba Asad
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            startIcon={<LinkedIn />}
            href="https://www.linkedin.com/in/areeba-asad-085446225"
            target="_blank"
          >
            LinkedIn
          </Button>
      
        </Stack>
      </Paper>

    </Container>
  );
}
