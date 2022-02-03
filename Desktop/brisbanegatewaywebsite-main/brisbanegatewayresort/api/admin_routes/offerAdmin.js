// var express = require("express");
// var router = express.Router();
// var db = require("../connection");
import express from "express";
import router from express.Router();
import db from "../connection";

router.get("/:id", function (req, res, next) {
  db.query(
    "SELECT title, description, conditions, thumbnail, promo_code, HEX(active) AS active FROM offers WHERE offer_id = UNHEX(?)",
    [req.params.id],
    (err, data) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      const payLoad = JSON.stringify(data[0]);
      res.send(payLoad);
    }
  );
});

module.exports = router;
