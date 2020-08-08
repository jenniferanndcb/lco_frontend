import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Burger from "./burger";

const Navbar = () => {
  return (
    <div className="nav-container">
      <NavLink to="/" exact className="nav-link" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/about" exact className="nav-link" activeClassName="selected">
        About
      </NavLink>
      <NavLink to="/data" exact className="nav-link" activeClassName="selected">
        Data
      </NavLink>
      <NavLink
        to="/healthyeating"
        exact
        className="nav-link"
        activeClassName="selected"
      >
        Eatwell
      </NavLink>

      <Burger />
    </div>
  );
};

export default Navbar;
