import React, { useEffect, useState } from "react";
import Offer from "./Offer";

function Offers(props) {
  const [offers, setOffers] = useState([]);
  const [offerTitle, setOfferTitle] = useState("");
  const [offerDescription, setOfferDescription] = useState("");
  const [promoCode, setPromoCode] = useState(0);
  const [offerConditions, setOfferConditions] = useState("");
  const [offerStatus, setOfferStatus] = useState(0);
  const [offerImage, setOfferImage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/retrieve-offers", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOffers(data.offers);
      });
  }, []);

  function handleStatusChange() {
    console.log(promoCode);
    setOfferStatus(1 - offerStatus);
  }

  function handleImageInput(event) {
    setOfferImage(event.target.files[0]);
  }

  function handleOfferSubmit(event) {
    event.preventDefault();
    console.log(offerTitle);
    console.log(offerDescription);
    console.log(offerConditions);
    console.log(promoCode);
    console.log(offerStatus);
    console.log(offerImage);
    const data = new FormData();
    data.append("offer_title", offerTitle);
    data.append("offer_description", offerDescription);
    data.append("promo_code", promoCode);
    data.append("offer_conditions", offerConditions);
    data.append("offer_status", offerStatus);
    data.append("offer_image", offerImage);

    fetch("http://localhost:9000/create-offer", {
      method: "POST",
      body: data,
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((response) => {
      if (!response.ok) {
        console.log("fail");
      } else {
        console.log("success");
      }
    });
  }

  return (
    <div>
      <div>
        <div>
          <h1>Offers</h1>
        </div>
        {offers.map((offer) => {
          return (
            <div>
              <Offer offer={offer} />
            </div>
          );
        })}
      </div>
      <form>
        <h1>Create Offer</h1>
        <label>Offer Title</label>
        <br />
        <input
          type="text"
          id="offer_title"
          value={offerTitle}
          onChange={(e) => setOfferTitle(e.target.value)}
        />
        <br />
        <label>Offer Description</label>
        <br />
        <input
          type="text"
          id="offer_description"
          value={offerDescription}
          onChange={(e) => setOfferDescription(e.target.value)}
        />
        <br />
        <label>Promo code</label>
        <br />
        <input
          type="text"
          id="promo_code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <br />
        <label>Offer Conditions</label>
        <br />
        <input
          type="text"
          id="offer_conditions"
          value={offerConditions}
          onChange={(e) => setOfferConditions(e.target.value)}
        />
        <br />
        <label>Offer Image</label>
        <br />
        <input
          type="file"
          id="offer_thumbnail"
          onChange={handleImageInput}
          accept="image/x-png,image/gif,/image/jpeg"
        />

        <br />
        <h3>Offer Status</h3>
        <input
          type="radio"
          id="offer_status"
          name="offer_status"
          value="inactive"
          onChange={handleStatusChange}
          checked={!offerStatus}
        />
        <label>Inactive</label>
        <br />
        <input
          type="radio"
          id="offer_status"
          name="offer_status"
          value="active"
          onChange={handleStatusChange}
          checked={offerStatus}
        />
        <label>Active</label>
        <br />
        <button onClick={handleOfferSubmit}>Add New Offer</button>
      </form>
    </div>
  );
}

export default Offers;
