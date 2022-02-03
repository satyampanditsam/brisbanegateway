// const express = require("express");
// const router = express.Router();
// const db = require("../connection");
// const crypto = require("crypto");
import express from "express"
import router from express.Router();
import db from "../connection";
import crypto from "crypto";

router.post("/", function (req, res, next) {
  const offerID = crypto.randomUUID();
  const offerTitle = req.body.offer_title;
  const offerDescription = req.body.offer_description;
  const offerConditions = req.body.offer_conditions;
  const promoCode = req.body.promo_code;
  const offerStatus = parseInt(req.body.offer_status);
  const offerImage = req.file.filename;

  db.query(
    "INSERT INTO offers (offer_id, title, description, conditions, thumbnail, promo_code, active) VALUES (UNHEX(REPLACE(?,'-','')), ?, ?, ?, ?, ?, ?)",
    [
      offerID,
      offerTitle,
      offerDescription,
      offerConditions,
      offerImage,
      promoCode,
      offerStatus,
    ],
    (err, data) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(204);
    }
  );
});

module.exports = router;
