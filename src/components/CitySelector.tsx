import { TextField, MenuItem } from "@mui/material";
import { ChangeEvent } from "react";

interface CitySelectorProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  options: string[];
}

export default function CitySelector({
  label,
  value,
  onChange,
  options,
}: CitySelectorProps) {
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
    >
      {options.map((city) => (
        <MenuItem key={city} value={city}>
          {city}
        </MenuItem>
      ))}
    </TextField>
  );
}
