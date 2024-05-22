import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AuthProvider from "./contexts/auth";
import ThemeProvider from "./contexts/theme";
import "./index.css";
import CoursesProvider from "./contexts/courses";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <CoursesProvider>
        <ThemeProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ThemeProvider>
      </CoursesProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </BrowserRouter>
);
