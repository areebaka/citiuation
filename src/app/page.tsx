"use client"
import { useState } from "react";
import { Container, Typography, Button, Box, Paper, Stack } from "@mui/material";
import CitySelector from "../components/CitySelector";
import InfoCard from "../components/InfoCard";


export default function Home() {
  const [usCity, setUsCity] = useState("");
  const [pkCity, setPkCity] = useState("");

  const handleCompare = () => {
    // For now just log, later you can route to results page
    console.log(`Comparing ${usCity} with ${pkCity}`);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", py: 6 }}>
        {/* <Box
        component="img"
        src="./compare_arrows.svg" 
        alt="City comparison"
        sx={{
          width: "100%",
          maxWidth: 60,
          mx: "auto",
          // my: 2,
        }}
      /> */}

      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Citiuation
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Compare living costs between US & PK cities in seconds.
      </Typography>

    

    
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Stack spacing={2}>
          <CitySelector
            label="Select a US City"
            value={usCity}
            onChange={(e) => setUsCity(e.target.value)}
            options={["New York", "Los Angeles", "Chicago"]}
          />
          <CitySelector
            label="Select a PK City"
            value={pkCity}
            onChange={(e) => setPkCity(e.target.value)}
            options={["Karachi", "Lahore", "Islamabad"]}
          />
          <Button
            variant="contained"
            size="large"
            disabled={!usCity || !pkCity}
            onClick={handleCompare}
          >
            Compare
          </Button>
        </Stack>
      </Paper>


      <InfoCard />
    </Container>
  );
}
