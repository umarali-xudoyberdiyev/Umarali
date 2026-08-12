import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Fotter from "./Fotter";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <Outlet />
      <Fotter />
    </div>
  );
};

export default MainLayout;
