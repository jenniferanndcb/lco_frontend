import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

// const link = {
//   width: "100px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "grey",
//   textDecoration: "none",
//   color: "white",
// };

const Navbar = () => {
  return (
    <div className="nav-container">
      <NavLink
        to="/"
        exact
        activeStyle={{ background: "rgba(84,83,83)" }}
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/data"
        exact
        activeStyle={{ background: "rgba(84,83,83)" }}
        className="nav-link"
      >
        Data
      </NavLink>
      <NavLink
        to="/healthyeating"
        exact
        activeStyle={{ background: "rgba(84,83,83)" }}
        className="nav-link"
      >
        Eatwell
      </NavLink>
    </div>
  );
};

export default Navbar;
