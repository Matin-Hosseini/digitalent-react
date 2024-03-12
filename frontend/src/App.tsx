import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

//contexts
import { ThemeContext } from "./contexts/theme";

import { useContext, useEffect } from "react";
import routes from "./routes";

const App = () => {
  const router = useRoutes(routes);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className={`App `}>
      <Header />
      {router}
      <Footer />
    </div>
  );
};

export default App;
