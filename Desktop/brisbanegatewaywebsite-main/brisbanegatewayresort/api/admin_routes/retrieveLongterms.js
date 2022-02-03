// var express = require("express");
// var router = express.Router();
// var db = require("../connection");
import express from "express";
import router from express.Router();
import db from "../connection";

router.get("/", function (req, res, next) {
  db.query(
    "SELECT HEX(cabin_id) AS cabin_id, cabin_title, availability, weekly_price, min_stay, bedroom, bathroom, car_space FROM longterm_cabins",
    (err, data) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.send(JSON.stringify(data));
    }
  );
});

module.exports = router;
