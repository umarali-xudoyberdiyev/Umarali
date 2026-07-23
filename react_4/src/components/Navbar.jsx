import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-100">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
          Team<span className="text-orange-400">Directory</span>
        </div>
        <nav className="flex gap-7 text-sm text-slate-400">
          <a href="#users" className="transition-colors hover:text-orange-400">
            Foydalanuvchilar
          </a>
          <a href="#about" className="transition-colors hover:text-orange-400">
            Biz haqimizda
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-orange-400"
          >
            Aloqa
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
