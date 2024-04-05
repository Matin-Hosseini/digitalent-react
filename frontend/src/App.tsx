import { useLocation, useRoutes } from "react-router-dom";

//contexts
import { ThemeContext } from "./contexts/theme";

import { ThemeProvider, createTheme } from "@mui/material";
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import routes from "./routes";
import Counter from "./components/Counter";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

const App = () => {
  const router = useRoutes(routes);

  const { theme } = useContext(ThemeContext);

  const location = useLocation();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

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
  });

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <ScrollToTop />

        <div className={`App `}>
          {!isAuthRoute && <Header />}
          {router}
          {!isAuthRoute && <Footer />}
        </div>

        <ToastContainer
          position="top-left"
          autoClose={3000}
          rtl={true}
          theme={theme}
          draggable
        />
        <Counter/>
      </ThemeProvider>
    </>
  );
};

export default App;
