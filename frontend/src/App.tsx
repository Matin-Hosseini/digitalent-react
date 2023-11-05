import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/404/404";
import NotCompleted from "./pages/NotCompleted/NotCompleted";
import AboutUs from "./pages/About-us";
import Article from "./pages/Article";
import Course from "./pages/Course";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/course" element={<Course />} />
        <Route path="/article" element={<Article />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/not-completed" element={<NotCompleted />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
