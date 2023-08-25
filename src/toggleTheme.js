import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import AppHeader from "./components/AppHeader/AppHeader";
import AppRoutes from "./AppRoutes";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh !important",
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <AppHeader onClick={colorMode.toggleColorMode} theme={theme} />
        <AppRoutes />
      </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
