import Error404 from "./pages/404/404";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./privateRoutes/PrivateRoutes";
import Tasks from "./pages/tasks/Tasks";

export const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },

  {
    path: "*",
    element: <Error404 />,
  },
]);
