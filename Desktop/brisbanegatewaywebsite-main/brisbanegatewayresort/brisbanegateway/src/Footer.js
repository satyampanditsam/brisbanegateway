import React, { useState } from "react";
import BottomBar from "./BottomBar";
import FooterContact from "./FooterContact";
const Footer = (props) => {
  return (
    <div>
      <FooterContact />
      <BottomBar />
    </div>
  );
};

export default Footer;
