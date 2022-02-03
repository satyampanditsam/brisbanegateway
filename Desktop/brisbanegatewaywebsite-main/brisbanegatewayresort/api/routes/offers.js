// var express = require("express");
// var router = express.Router();
// var db = require("../connection");

import express from "express"
import router from express.Router()
import db from "../connection"


router.get("/", function (req, res, next) {
  db.query(
    "SELECT HEX(offer_id), title, description, conditions, thumbnail, promo_code FROM offers WHERE active = 1",
    (err, data) => {
      if (err) throw err;
      console.log(data);
      res.send(JSON.stringify(data));
    }
  );
});

module.exports = router;
