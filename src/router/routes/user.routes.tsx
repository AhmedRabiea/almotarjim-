import { RouteObject } from "react-router-dom";

// pages
import Error404 from "@/pages/shared/error/Error404";
import CreateRequest from "@/pages/user/CreateRequest";
import Requests from "@/pages/user/Requests";
import SingleChat from "@/pages/user/SingleChat";
import SingleRequest from "@/pages/user/SingleRequest";
import UserLayout from "@/layouts/UserLayout";
import ChooseService from "@/pages/user/ChooseService";
import Home from "@/pages/user/Home";

const userRoutes: RouteObject[] = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "dashboard",
        element: <Home />,
      },

      {
        path: "request",
        children: [
          {
            path: "",
            element: <Requests />,
          },
          {
            path: "create",
            element: <ChooseService />,
          },
          {
            path: "create/:serviceId",
            element: <CreateRequest />,
          },
          {
            path: ":id",
            element: <SingleRequest />,
          },
        ],
      },
      {
        path: "chat",
        children: [
          {
            path: ":id",
            element: <SingleChat />,
          },
        ],
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];

export default userRoutes;
