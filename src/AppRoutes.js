// import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import WeatherAppLayout from "./components/AppLayout/WeatherAppLayout";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WeatherAppLayout />} />
    </Routes>
  );
}
