import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function OfferDetails(props) {
  const { id } = useParams();
  const [offerTitle, setOfferTitle] = useState();
  const [offerStatus, setOfferStatus] = useState();
  const [promoCode, setPromoCode] = useState();
  const [offerDescription, setOfferDescription] = useState();
  const [offerImage, setOfferImage] = useState();
  const [offerConditions, setOfferConditions] = useState();

  const [editOfferTitle, setEditOfferTitle] = useState();
  const [editOfferStatus, setEditOfferStatus] = useState();
  const [editPromoCode, setEditPromoCode] = useState();
  const [editOfferDescription, setEditOfferDescription] = useState();
  const [editOfferImage, setEditOfferImage] = useState();
  const [editOfferConditions, setEditOfferConditions] = useState();
  const [editLoaded, setEditLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9000/offer-admin/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOfferTitle(data.title);
        setOfferStatus(data.active);
        setPromoCode(data.promo_code);
        setOfferDescription(data.description);
        setOfferImage(data.thumbnail);
        setOfferConditions(data.conditions);
        setEditOfferTitle(data.title);
        setEditOfferStatus(data.active);
        setEditPromoCode(data.promo_code);
        setEditOfferDescription(data.description);
        setEditOfferConditions(data.conditions);
      })
      .then(setEditLoaded(true));
  }, []);

  function handleStatusChange() {
    setEditOfferStatus(1 - editOfferStatus);
  }

  function handleImageInput(event) {
    setEditOfferImage(event.target.files[0]);
  }

  function handleOfferSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append("offer_title", editOfferTitle);
    data.append("offer_description", editOfferDescription);
    data.append("promo_code", editPromoCode);
    data.append("offer_conditions", editOfferConditions);
    data.append("offer_status", editOfferStatus);
    data.append("offer_image", editOfferImage);

    fetch(`http://localhost:9000/edit-offer/${id}`, {
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

  if (editLoaded) {
    return (
      <div>
        <div>
          <img src={`http://localhost:9000/offers-images/${offerImage}`} />
          <h1>{offerTitle}</h1>
          <p>{promoCode}</p>
          <p>{offerStatus == 0 ? "Inactive" : "active"}</p>
          <p>{offerDescription}</p>
          <p>{offerConditions}</p>
        </div>
        <div>
          <form>
            <h1>Edit Offer</h1>
            <label>Offer Title</label>
            <br />
            <input
              type="text"
              id="offer_title"
              value={editOfferTitle}
              onChange={(e) => setEditOfferTitle(e.target.value)}
            />
            <br />
            <label>Offer Description</label>
            <br />
            <input
              type="text"
              id="offer_description"
              value={editOfferDescription}
              onChange={(e) => setEditOfferDescription(e.target.value)}
            />
            <br />
            <label>Promo code</label>
            <br />
            <input
              type="text"
              id="promo_code"
              value={editPromoCode}
              onChange={(e) => setEditPromoCode(e.target.value)}
            />
            <br />
            <label>Offer Conditions</label>
            <br />
            <input
              type="text"
              id="offer_conditions"
              value={editOfferConditions}
              onChange={(e) => setEditOfferConditions(e.target.value)}
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
              checked={editOfferStatus == 0}
            />
            <label>Inactive</label>
            <br />
            <input
              type="radio"
              id="offer_status"
              name="offer_status"
              value="active"
              onChange={handleStatusChange}
              checked={editOfferStatus == 1}
            />
            <label>Active</label>
            <br />
            <button onClick={handleOfferSubmit}>Save Changes</button>
          </form>
        </div>
      </div>
    );
  } else {
    return <h1>dsjas</h1>;
  }
}

export default OfferDetails;
