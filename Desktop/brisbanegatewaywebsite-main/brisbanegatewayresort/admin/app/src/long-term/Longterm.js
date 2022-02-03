import React, { useEffect, useState } from "react";
import LongtermCabinCards from "./LongtermCabinCards";
import LongtermInput from "./LongtermInput";

function Longterm(props) {
  return (
    <div>
      <div>
        <h1>Long-term Cabins</h1>
        <LongtermCabinCards />
      </div>
      <div>
        <LongtermInput />
      </div>
    </div>
  );
}

export default Longterm;
