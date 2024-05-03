import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AuthProvider from "./contexts/auth";
import ThemeProvider from "./contexts/theme";
import "./index.css";
import CoursesProvider from "./contexts/courses";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CoursesProvider>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </CoursesProvider>
  </BrowserRouter>
);
