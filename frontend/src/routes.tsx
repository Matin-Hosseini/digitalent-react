import Home from "./pages/Home";
import About from "./pages/About-us";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Article from "./pages/Article";
import Course from './pages/Course'
import NotCompleted from "./pages/NotCompleted";
import NotFound from "./pages/404";

//user panel
import UserPanel from "./pages/User-panel";
import UserDashBoard from "./pages/User-panel/Dashboard";
import EditAccount from "./pages/User-panel/EditAccount";
import ChangePassword from "./pages/User-panel/ChangePassword";
import MyAllCourses from "./pages/User-panel/MyAllCourses";
import BuyedCourses from "./pages/User-panel/BuyedCourses";
import FreeCourses from "./pages/User-panel/FreeCourses";
import Tickets from "./pages/User-panel/Tickets";
import AddTicket from "./pages/User-panel/Tickets/AddTicket";

const routes:any = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/course", element: <Course /> },
  { path: "/article", element: <Article /> },
  { path: "/not-completed", element: <NotCompleted /> },
  { path: "*", element: <NotFound /> },

  {
    path: "/user-panel",
    element: <UserPanel />,
    children: [
      { path: "dashboard", element: <UserDashBoard /> },
      { path: "edit-account", element: <EditAccount /> },
      { path: "change-password", element: <ChangePassword /> },
      { path: "my-all-courses", element: <MyAllCourses /> },
      { path: "buyed-courses", element: <BuyedCourses /> },
      { path: "free-courses", element: <FreeCourses /> },
      { path: "tickets", element: <Tickets /> },
      { path: "add-ticket", element: <AddTicket /> },
    ],
  },
];

export default routes;
