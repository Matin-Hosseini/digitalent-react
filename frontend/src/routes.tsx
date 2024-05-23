import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/404"));
const About = lazy(() => import("./pages/About-us"));
const Article = lazy(() => import("./pages/Article"));
const Course = lazy(() => import("./pages/Course"));
const Category = lazy(() => import("./pages/Category"));
const Login = lazy(() => import("./pages/Login"));
const NotCompleted = lazy(() => import("./pages/NotCompleted"));
const SignUp = lazy(() => import("./pages/SignUp"));

//user-panel
const UserPanel = lazy(() => import("./pages/User-panel"));
const ChangePassword = lazy(() => import("./pages/User-panel/ChangePassword"));
const MyAllCourses = lazy(() => import("./pages/User-panel/Courses"));
const UserDashBoard = lazy(() => import("./pages/User-panel/Dashboard"));
const EditAccount = lazy(() => import("./pages/User-panel/EditAccount"));
const Tickets = lazy(() => import("./pages/User-panel/Tickets"));
const AddTicket = lazy(() => import("./pages/User-panel/Tickets/AddTicket"));
const ContactUs = lazy(() => import("./pages/Contact-us/index"))

const routes: any = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/contact-us", element: <ContactUs /> },

  { path: "/course/:short_name", element: <Course /> },
  { path: "/courses", element: <Category /> },
  { path: "/article/:short_name", element: <Article /> },
  { path: "/articles", element: <Category /> },
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
