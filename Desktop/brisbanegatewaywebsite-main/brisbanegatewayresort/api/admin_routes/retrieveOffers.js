// const express = require("express");
// const router = express.Router();
// const db = require("../connection");
import express from "express";
import router from express.Router();
import db from "../connection";

router.get("/", (req, res, next) => {
  const payLoad = {};
  db.query(
    "SELECT HEX(offer_id) AS offer_id, title, thumbnail, promo_code FROM offers",
    (err, data) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      payLoad.offers = data;
      res.send(payLoad);
    }
  );
});

module.exports = router;
