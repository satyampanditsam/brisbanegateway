// var express = require("express");
// var router = express.Router();
// var db = require("../connection");
import express from "express";
import router from express.Router();
import db from "../connection";

router.get("/:id", function (req, res, next) {
  const cabin_id = req.params.id;
  const payLoad = {};

  const queryCabin = new Promise((resolve, reject) => {
    db.query(
      "SELECT cabin_title, availability, weekly_price, min_stay, bedroom, bathroom, car_space, description FROM longterm_cabins WHERE cabin_id = UNHEX(?)",
      [cabin_id],
      (err, data) => {
        if (err) {
          res.send(500);
          reject(err);
        }
        payLoad.details = data[0];
        resolve();
      }
    );
  });

  const queryFeatures = new Promise((resolve, reject) => {
    db.query(
      "SELECT feature FROM cabin_features WHERE cabin_id = UNHEX(?)",
      [cabin_id],
      (err, features) => {
        if (err) {
          res.sendStatus(500);
          reject(err);
        }
        const longtermFeatures = [];
        for (let i = 0; i < features.length; i++) {
          longtermFeatures.push(features[i].feature);
        }
        payLoad.features = longtermFeatures;
        resolve();
      }
    );
  });

  const queryImages = new Promise((resolve, reject) => {
    db.query(
      "SELECT img_src, ordinance FROM cabin_images WHERE cabin_id = UNHEX(?)",
      [cabin_id],
      (err, images) => {
        if (err) {
          res.send(500);
          reject(err);
        }
        const longtermImages = [];
        for (let i = 0; i < images.length; i++) {
          longtermImages.push(images[i].img_src);
        }
        payLoad.images = longtermImages;
        resolve();
      }
    );
  });

  queryCabin
    .then(() => queryFeatures)
    .then(() => queryImages)
    .then(() => res.send(JSON.stringify(payLoad)));
});

module.exports = router;
