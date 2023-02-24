import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Settings from "./settings";
import Sandbox from "./sandbox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/settings",
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
