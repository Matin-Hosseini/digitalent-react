import NotFound from "./pages/404";
import About from "./pages/About-us";
import Article from "./pages/Article";
import ArticleCategory from "./pages/ArticleCategory";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotCompleted from "./pages/NotCompleted";
import SignUp from "./pages/SignUp";

//user panel
import UserPanel from "./pages/User-panel";
import ChangePassword from "./pages/User-panel/ChangePassword";
import MyAllCourses from "./pages/User-panel/Courses";
import UserDashBoard from "./pages/User-panel/Dashboard";
import EditAccount from "./pages/User-panel/EditAccount";
import Tickets from "./pages/User-panel/Tickets";
import AddTicket from "./pages/User-panel/Tickets/AddTicket";

const routes: any = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/course", element: <Course /> },
  { path: "/article", element: <Article /> },
  { path: "/articles", element: <ArticleCategory /> },
  { path: "/not-completed", element: <NotCompleted /> },
  { path: "*", element: <NotFound /> },

  {
    path: "/user-panel",
    element: <UserPanel />,
    children: [
      { path: "", element: <UserDashBoard /> },
      { path: "dashboard", element: <UserDashBoard /> },
      { path: "edit-account", element: <EditAccount /> },
      { path: "change-password", element: <ChangePassword /> },
      { path: "courses", element: <MyAllCourses /> },
      { path: "tickets", element: <Tickets /> },
      { path: "add-ticket", element: <AddTicket /> },
    ],
  },
];

export default routes;
