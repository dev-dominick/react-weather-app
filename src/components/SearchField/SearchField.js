import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function SearchField({ value, data, change, submit }) {
  return (
    <div>
      <div>Search for your city</div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ color: "yellow !important" }}
          id="cityInput"
          label="Search Your City"
          variant="standard"
          onSubmit={submit}
          value={value}
          onChange={change}
        />
        <Button type="submit" variant="contained" onClick={submit}>
          Search
        </Button>
      </Box>
    </div>
  );
}
