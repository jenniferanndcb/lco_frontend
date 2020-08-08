import React, { useState } from "react";
import Drawer from "./drawer"
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

      <Drawer status={status} />
    </>
  );
};

export default Burger;
