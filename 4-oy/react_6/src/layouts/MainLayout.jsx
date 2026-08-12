import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../companents/Navbar";
import Fotter from "../companents/Fotter";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 p-8 bg-gray-50">
        <Outlet />
      </main>
      <Fotter />
    </div>
  );
}

export default MainLayout;
