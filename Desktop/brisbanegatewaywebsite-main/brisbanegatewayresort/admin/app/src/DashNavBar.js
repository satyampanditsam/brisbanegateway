import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logo from "../public/images/nav-logo.png";
import { Logout } from "./Logout";

function DashNavBar(props) {
  //Need to handle refresh token delete
  function handleClick() {
    Logout();
  }
  return (
    <div>
      <nav className="NavbarItems">
        <a className="NavbarLogo" href="/">
          <img class="logoImage" src={logo} />
        </a>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <button onClick={handleClick}>Logout</button>
        <button className="MenuButton">Menu</button>
      </nav>
    </div>
  );
}

export default DashNavBar;
