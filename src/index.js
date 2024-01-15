import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css";
import ToggleColorMode from "./toggleTheme";
import App from "./App";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleColorMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ToggleColorMode>
    </BrowserRouter>
  </React.StrictMode>
);
