import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";


import App from "./App.tsx";
import ThemeProvider from "./contexts/theme.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
