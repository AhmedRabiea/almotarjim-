import AdminLayout from "@/layouts/AdminLayout";
import Chats from "@/pages/admin/Chats";
import CreateRequest from "@/pages/admin/CreateRequest";
import Dashboard from "@/pages/admin/Dashboard";
import Reports from "@/pages/admin/Reports";
import Requests from "@/pages/admin/Requests";
import SingleChat from "@/pages/admin/SingleChat";
import SingleRequest from "@/pages/admin/SingleRequest";
import Error404 from "@/pages/shared/error/Error404";
import { RouteObject } from "react-router-dom";
import Agents from "@/pages/admin/Agents";
import Translators from "@/pages/admin/Translators";
import Supervisors from "@/pages/admin/Supervisors";
import Users from "@/pages/admin/Users";
import CreateAgent from "@/pages/admin/create/CreateAgent";
import CreateTranslator from "@/pages/admin/create/CreateTranslator";
import CreateSupervisor from "@/pages/admin/create/CreateSupervisor";
import ChooseService from "@/pages/admin/ChooseService";
import CreateService from "@/pages/admin/create/CreateService";
import UpdateAgent from "@/pages/admin/update/UpdateAgent";
import UpdateSupervisor from "@/pages/admin/update/UpdateSupervisor";
import UpdateTranslator from "@/pages/admin/update/UpdateTranslator";
import ViewAgent from "@/pages/admin/view/ViewAgent";
import ViewClient from "@/pages/admin/view/ViewClient";
import ViewTranslator from "@/pages/admin/view/ViewTranslator";

const adminRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "services",
        children: [
          { path: "", element: <ChooseService /> },
          { path: "create", element: <CreateService /> },
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
            path: "create",
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
            path: "",
            element: <Chats />,
          },
          {
            path: ":id",
            element: <SingleChat />,
          },
        ],
      },
      {
        path: "agents",
        children: [
          {
            path: "",
            element: <Agents />,
          },
          {
            path: "create",
            element: <CreateAgent />,
          },
          {
            path: "update/:id",
            element: <UpdateAgent />,
          },
          {
            path: ":id",
            element: <ViewAgent />,
          },
        ],
      },
      {
        path: "translators",
        children: [
          {
            path: "",
            element: <Translators />,
          },
          {
            path: "create",
            element: <CreateTranslator />,
          },
          {
            path: "update/:id",
            element: <UpdateTranslator />,
          },
          {
            path: ":id",
            element: <ViewTranslator />,
          },
        ],
      },
      {
        path: "supervisors",
        children: [
          {
            path: "",
            element: <Supervisors />,
          },
          {
            path: "create",
            element: <CreateSupervisor />,
          },
          {
            path: "update/:id",
            element: <UpdateSupervisor />,
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            path: "",
            element: <Users />,
          },
          {
            path: ":id",
            element: <ViewClient />,
          },
        ],
      },
      {
        path: "reports",
        children: [
          {
            path: "",
            element: <Reports />,
          },
          {
            path: ":id",
            element: <Reports />,
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

export default adminRoutes;
