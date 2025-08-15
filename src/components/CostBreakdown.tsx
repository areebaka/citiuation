import React from "react";
import { Card, CardContent, Typography, Grid, Chip, Box } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MovieIcon from "@mui/icons-material/Movie";
import BoltIcon from "@mui/icons-material/Bolt";

const categoryIcons: Record<string, JSX.Element> = {
  Rent: <HomeIcon fontSize="small" />,
  Food: <FastfoodIcon fontSize="small" />,
  Transport: <DirectionsCarIcon fontSize="small" />,
  Utilities: <BoltIcon fontSize="small" />,
  Entertainment: <MovieIcon fontSize="small" />,
};

interface CostBreakdownProps {
  city: string;
  costs: Record<string, number>;
}

const CostBreakdown: React.FC<CostBreakdownProps> = ({ city, costs }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 4,
        flex: 1,
        backgroundColor: "#fafafa",
        boxShadow: 1,
        transition: "0.3s",
        "&:hover": { boxShadow: 3 },
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {city} – Monthly Snapshot
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(costs).map(([category, value]) => (
            <Grid item xs={12} key={category}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Chip
                  icon={categoryIcons[category] || <AttachMoneyIcon fontSize="small" />}
                  label={category}
                  variant="outlined"
                />
                <Typography variant="body2">${value.toFixed(2)}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CostBreakdown;

