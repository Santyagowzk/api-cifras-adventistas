import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-800 text-white px-6 py-4 shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">🎶 Advento Cifras</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Início</Link>
          <Link to="/albuns" className="hover:underline">Álbuns</Link>
          <Link to="/artistas" className="hover:underline">Artistas</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
