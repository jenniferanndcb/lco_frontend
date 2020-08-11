import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Drawer = (props) => {
  return (
    <div className="drawer_container">
      <NavLink to="/" exact className="drwr-link" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/about" exact className="drwr-link" activeClassName="selected">
        About
      </NavLink>
      <NavLink to="/data" exact className="drwr-link" activeClassName="selected">
        Data
      </NavLink>
      <NavLink
        to="/healthyeating"
        exact
        className="drwr-link"
        activeClassName="selected"
      >
        Eatwell
      </NavLink>
    </div>
  );
};

export default Drawer;
