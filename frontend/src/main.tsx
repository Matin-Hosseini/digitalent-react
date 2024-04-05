import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AuthProvider from "./contexts/auth";
import ThemeProvider from "./contexts/theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
