import React, { useEffect, useState } from "react";

function LongtermFeatures(props) {
  return (
    <div>
      <ul>
        <li>
          {props.bedroom} bedroom{props.bedroom != 1 ? "s" : ""}
        </li>
        <li>
          {props.bathroom} bathroom{props.bathroom != 1 ? "s" : ""}
        </li>
        <li>
          {props.car_space} car space{props.car_space != 1 ? "s" : ""}
        </li>
      </ul>
    </div>
  );
}

export default LongtermFeatures;
