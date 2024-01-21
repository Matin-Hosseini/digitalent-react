import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import routes from "./routes";
import { useState } from "react";

const App = () => {
  const router = useRoutes(routes);

  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`application ${isDark ? "dark" : ""}`}>
      <Header isDark={isDark} onIsDark={setIsDark} />
      {router}
      <Footer />
    </div>
  );
};

export default App;
