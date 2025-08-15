import { Paper, Typography } from "@mui/material";

export default function InfoCard() {
  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        What is Citiuation?
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Citiuation helps you quickly compare living costs, quality of life, and
        other essential factors between cities in the US and Pakistan — so you
        can make informed decisions about where to live or work.
      </Typography>
    </Paper>
  );
}
