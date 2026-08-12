import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "./companents/MainLayout";
import Home from "./pages/Home";
import Karzinka from "./pages/Karzinka";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "karzinka",
        element: <Karzinka />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
