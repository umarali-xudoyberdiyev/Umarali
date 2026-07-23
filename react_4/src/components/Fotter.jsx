import React from "react";

const Fotter = () => {
  return (
    <footer className="border-t border-slate-800 p-5 text-center text-xs text-slate-500">
      <p>
        &copy; {new Date().getFullYear()} TeamDirectory. Barcha huquqlar
        himoyalangan.
      </p>
    </footer>
  );
};

export default Fotter;
