import { useContext } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import AppRoutes from "./AppRoutes";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./toggleTheme";
import HistorySideBar from "./components/HistorySideBar/HistorySideBar";

const App = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  console.log("app");

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
      <div className="flex h-full w-full">
          {/* <HistorySideBar /> */}
        <div className="flex-col w-full">
          <AppHeader onClick={colorMode.toggleColorMode} theme={theme} />
          <AppRoutes />
        </div>
      </div>
    </Box>
  );
};

export default App;
