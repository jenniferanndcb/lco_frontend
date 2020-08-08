import React, { useState } from "react";
import "./Navbar.css";

const Burger = () => {
  const [status, setStatus] = useState("close");
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

      
    </>
  );
};

export default Burger;
