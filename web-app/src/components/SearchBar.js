"use client";
import { useState } from "react";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';

export default function SearchBar({onSearch}) {

    const [query, setQuery] = useState("");

    return (
        <TextField id="outlined-basic" label="Search Crypto" variant="outlined" type="text"
        placeholder="Search cryptocurrency"
        value={query}
        onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
        }}
        sx={{
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
            "& .MuiInputBase-input": {
              color: "var(--foreground)",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "var(--foreground)",
              },
              "&:hover fieldset": {
                borderColor: "var(--foreground)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(--foreground)",
              },
            },
            "& .MuiInputLabel-root": {
              color: "var(--foreground)",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "var(--foreground)",
            },
          }}
            />

    );
}