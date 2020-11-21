import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/" onClick={() => localStorage.removeItem("user")}>
        Sign Out
      </NavLink>
    </div>
  );
}

export default Nav;
