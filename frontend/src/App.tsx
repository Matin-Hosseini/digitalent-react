import { useLocation, useRoutes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

//contexts
import { ThemeContext } from "./contexts/theme";

import { useContext, useEffect } from "react";
import routes from "./routes";

const App = () => {
  const router = useRoutes(routes);

  const { theme } = useContext(ThemeContext);

  const location = useLocation();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const isAuthRoute =
    location.pathname === "/login" || location.pathname === "/sign-up";

  return (
    <div className={`App `}>
      {!isAuthRoute && <Header />}
      {/* {router} */}
      {/* {!isAuthRoute && <Footer />} */}
    </div>
  );
};

export default App;
