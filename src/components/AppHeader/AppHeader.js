import React from 'react'
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box";

const AppHeader = ({onClick, theme}) => {
  return (
    <Box
      sx={{
        border: '1px solid black',
        display: "flex",
        justifyContent: "center",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={onClick} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

export default AppHeader