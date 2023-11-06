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
import UserPanel from "./pages/User-panel/UserPanel";
import UserDashBoard from "./pages/User-panel/Dashboard";
import EditAccount from "./pages/User-panel/EditAccount";
import ChangePassword from "./pages/User-panel/ChangePassword";
import Courses from "./pages/User-panel/Courses";
import BuyedCourses from "./pages/User-panel/BuyedCourses";
import FreeCourses from "./pages/User-panel/FreeCourses";
import Tickets from "./pages/User-panel/Tickets";
import AddTicket from "./pages/User-panel/Tickets/AddTicket";

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

        <Route path="/user-panel" element={<UserPanel />}>
          <Route path="dashboard" element={<UserDashBoard />} />
          <Route path="edit-account" element={<EditAccount />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="courses" element={<Courses />} />
          <Route path="buyed-courses" element={<BuyedCourses />} />
          <Route path="free-courses" element={<FreeCourses />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="add-ticket" element={<AddTicket />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
