import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Navbar.css";

const Burger = () => {
  const [status, setStatus] = useState("open");
  return (
    <>
      <div
        className="burger"
        role="button"
        onClick={() => setStatus(status === "open" ? "close" : "open")}
      >
        <div className={status} />
        <div className={status} />
        <div className={status} />
      </div>

      <Navbar status={status} />
    </>
  );
};

export default Burger;
