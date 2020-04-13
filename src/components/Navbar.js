import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "grey",
  textDecoration: "none",
  color: "white",
};

const Navbar = () => {
  return (
    <div className="nav-component">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{ background: "rgba(84,83,83)" }}
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/data"
        exact
        style={link}
        activeStyle={{ background: "rgba(84,83,83)" }}
        className="nav-link"
      >
        Data
      </NavLink>
      <NavLink
        to="/programmes"
        exact
        style={link}
        activeStyle={{ background: "rgba(84,83,83)" }}
        className="nav-link"
      >
        Programmes
      </NavLink>
    </div>
  );
};

export default Navbar;
