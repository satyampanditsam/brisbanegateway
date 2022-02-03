import React, { useState, useEffect } from "react";
import DashNavbar from "./DashNavBar";
import DashFooter from "./DashFooter";
import { Outlet } from "react-router-dom";
function DashLayout(props) {
  return (
    <div>
      <DashNavbar />
      <Outlet />
      <DashFooter />
    </div>
  );
}

export default DashLayout;
