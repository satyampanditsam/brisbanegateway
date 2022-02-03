// const express = require("express");
// const router = express.Router();
// const db = require("../connection");
import express from "express";
import router from express.Router();
import db from "../connection";

router.post("/:id", function (req, res, next) {
  const offerID = req.params.id;

  const updateDetails = new Promise((resolve, reject) => {
    const offerTitle = req.body.offer_title;
    const offerDescription = req.body.offer_description;
    const offerConditions = req.body.offer_conditions;
    const promoCode = req.body.promo_code;
    const offerStatus = parseInt(req.body.offer_status);

    //Maybe could be 1 with procedure
    if (typeof req.file != "undefined") {
      const image = req.file.filename;
      const offerQuery =
        "UPDATE offers SET title = ?, description = ?, conditions = ?, thumbnail = ?, promo_code = ?, active = ? WHERE offer_id = UNHEX(?)";
      db.query(
        offerQuery,
        [
          offerTitle,
          offerDescription,
          offerConditions,
          image,
          promoCode,
          offerStatus,
          offerID,
        ],
        (err) => {
          if (err) {
            res.sendStatus(500);
            reject(err);
          }
          resolve();
        }
      );
    } else {
      const offerQuery =
        "UPDATE offers SET title = ?, description = ?, conditions = ?, promo_code = ?, active = ? WHERE offer_id = UNHEX(?)";
      db.query(
        offerQuery,
        [
          offerTitle,
          offerDescription,
          offerConditions,
          promoCode,
          offerStatus,
          offerID,
        ],
        (err) => {
          if (err) {
            res.sendStatus(500);
            reject(err);
          }
          resolve();
        }
      );
    }
  });
  updateDetails.then(() => res.send(204));
});

module.exports = router;
