import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Drawer from "./drawer"
import Burger from "./burger";

const Navbar = () => {
  const [status, setStatus] = useState("close");
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

      <Burger status={status} handleClick={() => setStatus(status == "open" ? "close" : "open")}/>
      <Drawer status={status} />
    </div>
  );
};

export default Navbar;
