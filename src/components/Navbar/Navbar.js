import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [status, setStatus] = useState('open');
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

      <div className="burger" role="button" onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
        <div className={status}/>
        <div className={status}/>
        <div className={status}/>
      </div>
    </div>
  );
};

export default Navbar;
