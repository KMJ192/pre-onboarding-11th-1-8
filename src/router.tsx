import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@pages/Home";

import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";
import Content from "@pages/Content";
import NotFound from "@pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/todo",
        element: <Content />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
