import React, { useEffect, useState } from "react";
import Button1 from "../../Button1";
import LongtermFeatures from "./LongtermFeatures";

function LongtermCabinCard(props) {
  return (
    <div>
      {props.cabin.cabin_thumbnails.map((thumbnail) => (
        <img
          src={`http://localhost:9000/longterm-thumbnail/${thumbnail.img_src}`}
        />
      ))}
      <h3>{props.cabin.cabin_title}</h3>
      <p>${props.cabin.weekly_price} / week</p>
      <LongtermFeatures
        bedroom={props.cabin.bedroom}
        bathroom={props.cabin.bathroom}
        car_space={props.cabin.car_space}
      />
      <p>{`${props.cabin.min_stay} months min stay`}</p>
      {props.cabin.availability === "available_soon" && <p>Available soon</p>}
      <Button1 buttonText="View Cabin" url={`${props.cabin.cabin_id}`} />
    </div>
  );
}

export default LongtermCabinCard;
