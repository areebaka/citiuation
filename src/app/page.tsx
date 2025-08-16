"use client"
import { useState } from "react";
import { Container, Typography, Button,  Paper, Stack } from "@mui/material";
import CitySelector from "../components/CitySelector";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/navigation";


export default function Home() {
  const [usCity, setUsCity] = useState("");
  const [pkCity, setPkCity] = useState("");

 
    const router = useRouter();

  const handleCompare = () => {
    if (usCity && pkCity) {
      router.push(`/results?us=${usCity}&pk=${pkCity}`);
    }
  };


  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", py: 6 }}>

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
