import React from "react";
import "./Navbar.css";

const Burger = (props) => {
  return (
    <>
      <div className="burger" role="button" onClick={props.handleClick}>
        <div className={props.status} />
        <div className={props.status} />
        <div className={props.status} />
      </div>
    </>
  );
};

export default Burger;
