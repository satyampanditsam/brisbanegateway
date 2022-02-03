import React, { useState } from "react";
import Banner from "../Banner";
import MainDescription from "../MainDescription";
import GroupCards from "./GroupCards";

function Groups(props) {
  return (
    <div>
      <Banner title="Group Booking Inquiry" />
      <h3>Instructions</h3>
      <ol>
        <li>Add dates and check availability</li>
        <li>Add multiple accommodations to your shopping cart</li>
        <li>Add contact details</li>
        <li>Send group inquiry</li>
      </ol>
      <div>
        <GroupCards />
      </div>
    </div>
  );
}

export default Groups;
