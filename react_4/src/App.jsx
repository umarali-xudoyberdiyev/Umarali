import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Fotter from "./components/Fotter";
import "./index.css";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <Main />
      <Fotter />
    </div>
  );
};

export default App;
