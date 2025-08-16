"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Container,
  Typography,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  FormControlLabel,
  Box,
  Stack,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const sampleData = [
  { category: "Rent", us: 1200, pk: 300 },
  { category: "Food", us: 400, pk: 150 },
  { category: "Transport", us: 120, pk: 30 },
  { category: "Utilities", us: 200, pk: 60 },
  { category: "Entertainment", us: 150, pk: 50 },
  { category: "Groceries", us: 300, pk: 120 },
];

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const usCity = searchParams.get("us") || "US City";
  const pkCity = searchParams.get("pk") || "PK City";

  const [currencyUSD, setCurrencyUSD] = useState(true);

  const rate = 280;

  const displayData = sampleData.map((item) => ({
    ...item,
    us: currencyUSD ? item.us : item.us * rate,
    pk: currencyUSD ? item.pk : item.pk * rate,
  }));

  const totalUS = displayData.reduce((sum, item) => sum + item.us, 0);
  const totalPK = displayData.reduce((sum, item) => sum + item.pk, 0);

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {usCity} 🆚 {pkCity}
      </Typography>

      <Stack direction="row" spacing={2} mb={3}>
        <Chip
          label={`${usCity}: ${currencyUSD ? "$" : "₨"}${totalUS.toLocaleString()}`}
          color="primary"
        />
        <Chip
          label={`${pkCity}: ${currencyUSD ? "$" : "₨"}${totalPK.toLocaleString()}`}
          color="secondary"
        />
      </Stack>

      <FormControlLabel
        control={<Switch checked={currencyUSD} onChange={() => setCurrencyUSD((p) => !p)} />}
        label={currencyUSD ? "USD" : "PKR"}
      />

      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align="right">{usCity}</TableCell>
              <TableCell align="right">{pkCity}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayData.map((row) => (
              <TableRow key={row.category}>
                <TableCell>{row.category}</TableCell>
                <TableCell align="right">
                  {currencyUSD ? "$" : "₨"}
                  {row.us.toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {currencyUSD ? "$" : "₨"}
                  {row.pk.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ width: "100%", height: 350, mb: 3 }}>
        <ResponsiveContainer>
          <BarChart data={displayData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="us" fill="#1976d2" name={usCity} />
            <Bar dataKey="pk" fill="#d32f2f" name={pkCity} />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <Typography variant="body2" color="text.secondary" align="center">
        These are estimated student budgets.
      </Typography>
    </Container>
  );
}
