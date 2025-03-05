/** @format */

import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
// import { Logo } from "../assets/index";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/" className="">
        <img
          src='/assets/images/logo.png'
          alt="logo"
          className="w-[100px] h-[80px] "
        />
      </Link>
      <div
        className={`menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" onClick={handleMenuClose}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/#overview" onClick={handleMenuClose}>
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/#faq" onClick={handleMenuClose}>
            FAQs
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" onClick={handleMenuClose}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={handleMenuClose}>
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};