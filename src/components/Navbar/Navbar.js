import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <NavLink to="/" exact className="nav-link" activeClassName="selected">
        Home
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
    </div>
  );
};

export default Navbar;
