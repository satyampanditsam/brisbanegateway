import React, { useState } from "react";
import logo from "../public/images/nav-logo.png";

function Navbar(props) {
  return (
    <nav className="NavbarItems">
      <a className="NavbarLogo" href="/">
        <img class="logoImage" src={logo} />
      </a>
    </nav>
  );
}

export default Navbar;
