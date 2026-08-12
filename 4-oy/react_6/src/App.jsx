import AlbomPages from "./pages/AlbomPages";
import ProductPages from "./pages/ProductPages";
import TodoPages from "./pages/TodoPages";
import UsersPages from "./pages/UsersPages";

import React from "react";
import Navbar from "./companents/Navbar";
import MainLayout from "./layouts/MainLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from "./pages/HomePages";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePages />,
        },
        {
          path: "/users",
          element: <UsersPages />,
        },
        {
          path: "/todo",
          element: <TodoPages />,
        },
        {
          path: "/product",
          element: <ProductPages />,
        },
        {
          path: "/albom",
          element: <AlbomPages />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
