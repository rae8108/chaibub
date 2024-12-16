import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import Locations from "./Components/Locations";
import './Nav.css';

export default function Nav() {
  return (
    <Router>
      <div>
        <div className="Nav">
          <div>
            <small className="name">chaibub</small>
          </div>

          <nav>
            <div><NavLink to="/">Home</NavLink></div>
            <div><NavLink to="/menu">Menu</NavLink></div>
            <div><NavLink to="/products">Products</NavLink></div>
            <div><NavLink to="/locations">Locations</NavLink></div>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Modified to match NavLink */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/products" element={<Products />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    </Router>
  );
}