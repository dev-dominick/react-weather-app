import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import CurrentWeather from "../CurrentWeather/CurrentWeather";
// import HourlyWeather from "../HourlyWeather/HourlyWeather";
// import WeeklyWeather from "../WeeklyWeather/WeeklyWeather";

const pages = ["Current Forecast", "Hourly Forecast", "Weekly Forecast"];

const DisplayOptions = ({
  today,
  hourly,
  weekly,
  tabState,
  tabSetState,
  time,
  day,
}) => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => tabSetState(`${page}`)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <div>
        {tabState === "" && null}
        {tabState === "Loading" && <div>Loading</div>}
        {/* {tabState === "Current Forecast" && (
          <CurrentWeather today={today} time={time} />
        )}
        {tabState === "Hourly Forecast" && <HourlyWeather hourly={hourly} />}
        {tabState === "Weekly Forecast" && (
          <WeeklyWeather weekly={weekly} day={day} />
        )} */}
      </div>
    </>
  );
};
export default DisplayOptions;
