import React, { useEffect, useState } from "react";
import OfferCard from "./OfferCard";

//fix loading
function OfferCards(props) {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  if (offers.length > 0) {
    console.log(offers);
    return offers.map((offer) => {
      return <OfferCard offer={offer} />;
    });
  } else {
    return <div></div>;
  }
}

export default OfferCards;
