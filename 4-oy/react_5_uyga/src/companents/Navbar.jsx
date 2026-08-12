import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-100"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
          Team<span className="text-orange-400">Directory</span>
        </Link>
        <nav className="flex gap-7 text-sm text-slate-400">
          <Link to="/" className="transition-colors hover:text-orange-400">
            Foydalanuvchilar
          </Link>
          <Link to="/about" className="transition-colors hover:text-orange-400">
            Biz haqimizda
          </Link>
          <Link
            to="/contact"
            className="transition-colors hover:text-orange-400"
          >
            Aloqa
          </Link>
          <Link to="/admin" className="transition-colors hover:text-orange-400">
            Admin panel
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
