// var express = require("express");
// var router = express.Router();
// var db = require("../connection");
import express from "express"
import router from express.Router()
import db from "../connection"

router.get("/:cabin_id", function (req, res, next) {
  const cabin_id = req.params.cabin_id;
  const payLoad = {};

  const queryDetails = new Promise((resolve, reject) => {
    db.query(
      "SELECT cabin_title, availability, weekly_price, min_stay, bedroom, bathroom, car_space, description FROM longterm_cabins WHERE cabin_id = UNHEX(?)",
      [cabin_id],
      (err, data) => {
        if (err) {
          res.sendStatus(500);
          reject();
        }
        payLoad.cabin_details = data[0];
        resolve();
      }
    );
  });

  const queryImages = new Promise((resolve, reject) => {
    db.query(
      "SELECT img_src, ordinance FROM cabin_images WHERE cabin_id = UNHEX(?)",
      [cabin_id],
      (err, data) => {
        if (err) {
          res.sendStatus(500);
          reject(err);
        }
        payLoad.cabin_images = data;
        resolve();
      }
    );
  });

  const queryFeatures = new Promise((resolve, reject) => {
    db.query(
      "SELECT feature FROM cabin_features WHERE cabin_id = UNHEX(?)",
      [cabin_id],
      (err, data) => {
        if (err) {
          res.sendStatus(500);
          reject(err);
        }
        payLoad.features = data;
        resolve();
      }
    );
  });

  queryDetails
    .then(() => queryFeatures)
    .then(() => queryImages)
    .then(() => res.send(payLoad));
});

module.exports = router;
