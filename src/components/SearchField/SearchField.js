import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useGetWeather } from "../../Hooks/useGetWeather/useGetWeather";
import { Search } from "@mui/icons-material";

const SearchField = () => {
  const [userLocationSearch, setUserLocationSearch] = useState("");
  const { mutate: sendUserLocation } = useGetWeather();
  const handleUserInput = (ev) => {
    setUserLocationSearch(ev.target.value);
  };
  const onSubmitForm = (ev) => {
    ev.preventDefault();
    if (userLocationSearch) {
      sendUserLocation(userLocationSearch);
    } else {
      return;
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          sx={{ color: "yellow !important" }}
          size="small"
          id="cityInput"
          variant="outlined"
          label="Search"
          value={userLocationSearch}
          onChange={handleUserInput}
          onSubmit={onSubmitForm}
          // value={(e) => setUserLocationSearch(e.target.value)}
        />
        <Button
          sx={{
            width: 1 / 5,
          }}
          size="medium"
          type="submit"
          variant="contained"
          onClick={onSubmitForm}
        >
          <Search />
        </Button>
      </Box>
    </div>
  );
};

export default SearchField;
