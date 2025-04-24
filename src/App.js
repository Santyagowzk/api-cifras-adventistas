import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Albuns from "./Albuns";
import Artistas from "./Artistas";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        <Navbar />
        <div className="p-6 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albuns" element={<Albuns />} />
            <Route path="/artistas" element={<Artistas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

