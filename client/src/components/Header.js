import React from "react";

import Nav from "./Nav";
import headerImg from "../assets/header-img.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header-img">
        <img src={headerImg} alt="anytime fitness company card" />
      </div>
      <div className="header-nav">
        <Nav />
      </div>
    </div>
  );
}

export default Header;
