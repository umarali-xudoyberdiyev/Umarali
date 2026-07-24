import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Adminpanel from "./pages/Adminpanel";

import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/admin",
      element: <Adminpanel />,
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
