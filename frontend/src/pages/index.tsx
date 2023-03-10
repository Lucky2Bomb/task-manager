import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import LoginPage from "./login";
import Settings from "./settings";
import Sandbox from "./sandbox";
import { routes } from "@/shared/config/routes";

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Home />,
  },
  {
    path: routes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: routes.SETTINGS,
    element: <Settings />,
  },
  {
    path: "/sandbox",
    element: <Sandbox />,
  },
]);

function Routing(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default Routing;
