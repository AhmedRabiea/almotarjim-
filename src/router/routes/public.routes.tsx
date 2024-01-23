import { RouteObject } from "react-router-dom";

// pages
import Home from "@/pages/shared/Home";
import Login from "@/pages/shared/Login";
import Register from "@/pages/shared/Register";
import Teaser from "@/pages/shared/Teaser";
import Error404 from "@/pages/shared/error/Error404";
import Contact from "@/pages/user/Contact";
import Landing from "@/pages/shared/Landing";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "landing",
        element: <Landing />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "teaser",
        element: <Teaser />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];

export default publicRoutes;
