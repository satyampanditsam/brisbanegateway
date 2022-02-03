import React, { useEffect, useState } from "react";
import Button1 from "../Button1";
import LongtermFeatures from "./LongtermFeatures";

function LongtermCabinCard(props) {
  function deleteCabin() {
    const accessToken = localStorage.getItem("access_token");
    const payLoad = { id: props.cabin.cabin_id };
    fetch("http://localhost:9000/deletelongterm", {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div>
      <h3>{props.cabin.cabin_title}</h3>
      <p>﹩{props.cabin.weekly_price} / week</p>
      <LongtermFeatures
        bedroom={props.cabin.bedroom}
        bathroom={props.cabin.bathroom}
        car_space={props.cabin.car_space}
      />
      <p>{`${props.cabin.min_stay} months min stay`}</p>
      <p>{props.cabin.availability}</p>
      <Button1 buttonText="Edit" url={`/longterm/${props.cabin.cabin_id}`} />
      <button onClick={deleteCabin}>Delete</button>
    </div>
  );
}

export default LongtermCabinCard;
