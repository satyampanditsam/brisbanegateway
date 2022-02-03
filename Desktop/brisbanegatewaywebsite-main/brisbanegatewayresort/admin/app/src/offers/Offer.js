import React from "react";
import Button1 from "../Button1";

function Offer(props) {
  const offer_id = props.offer.offer_id;
  function deleteOffer() {
    const accessToken = localStorage.getItem("access_token");
    fetch(`http://localhost:9000/offer-delete/${offer_id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
  return (
    <div>
      <h3>{props.offer.title}</h3>
      <p>{props.offer.promo_code ? props.offer.promo_code : "null"}</p>
      <Button1 url={`/offers/${props.offer.offer_id}`} buttonText="Edit" />
      <button onClick={deleteOffer}>Delete</button>
    </div>
  );
}

export default Offer;
