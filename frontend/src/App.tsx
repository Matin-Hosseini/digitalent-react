import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import routes from "./routes";

const App = () => {
  const router = useRoutes(routes);

  return (
    <>
      <Header />
      {router}
      <Footer />
    </>
  );
};

export default App;
