import React, { useState } from "react";
import Button1 from "../../Button1";
import Button2 from "../../Button2";

function OfferCard(props) {
  return (
    <div>
      <a>
        <img
          src={`http://localhost:9000/offers-images/${props.offer.thumbnail}`}
        />
      </a>
      <h3>{props.offer.title}</h3>
      <p>{props.offer.description}</p>
      <Button2
        buttonText="Book Now"
        url={`https://bookingsau.newbook.cloud/brisbane_gateway_resort/${
          props.offer.promo_code ? `?promo_code=${props.offer.promo_code}` : ""
        }`}
      />
      <Button1 buttonText="View Conditions" url="" />
      <h4>Conditions</h4>
      <p>{props.offer.conditions}</p>
    </div>
  );
}

export default OfferCard;
