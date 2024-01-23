import { RouteObject } from "react-router-dom";

// pages
import Dashboard from "@/pages/translator/Dashboard";
import Requests from "@/pages/translator/Requests";
import SingleRequest from "@/pages/translator/SingleRequest";
import SubmitRequest from "@/pages/translator/SubmitRequest";
import Error404 from "@/pages/shared/error/Error404";
import TranslatorLayout from "@/layouts/TranslatorLayout";
import InternalUsers from "@/pages/translator/InternalUsers";
import InternalChat from "@/pages/translator/InternalChat";
import SingleChat from "@/pages/translator/SingleChat";

const translatorRoutes: RouteObject[] = [
  {
    path: "/",
    element: <TranslatorLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "internal-chat",
        children: [
          { path: "", element: <InternalUsers /> },
          { path: ":id", element: <InternalChat /> },
        ],
      },
      {
        path: "request",
        children: [
          {
            path: "",
            element: <Requests />,
          },
          {
            path: ":id",
            element: <SingleRequest />,
          },
          {
            path: ":id/submit",
            element: <SubmitRequest />,
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

export default translatorRoutes;
