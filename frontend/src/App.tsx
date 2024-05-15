import { useLocation, useRoutes } from "react-router-dom";

//contexts
import { useThemeContext } from "./contexts/theme";

import { ThemeProvider, createTheme } from "@mui/material";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import routes from "./routes";
import GloablLoading from "./components/Loaders/Gloabal";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

const App = () => {
  const router = useRoutes(routes);

  const { theme } = useThemeContext();

  const location = useLocation();

  const isAuthRoute =
    location.pathname === "/login" || location.pathname === "/sign-up";

  const muiTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
      },
    },
    typography: {
      fontFamily: "var(--text-font)",
    },
  });

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <ScrollToTop />

        <div className={`App `}>
          {!isAuthRoute && <Header />}
          <Suspense fallback={<GloablLoading />}>{router}</Suspense>
          {!isAuthRoute && <Footer />}
        </div>

        <ToastContainer
          position="top-left"
          autoClose={3000}
          rtl={true}
          theme={theme}
          draggable
        />
      </ThemeProvider>
    </>
  );
};

export default App;
