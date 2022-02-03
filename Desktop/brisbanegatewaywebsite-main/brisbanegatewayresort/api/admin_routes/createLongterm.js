// const express = require("express");
// const router = express.Router();
// const db = require("../connection");
// const crypto = require("crypto");
// const sharp = require("sharp");
// const path = require("path");

import express from "express"
import router from express.Router()
import db from "../connection"
import crypto from "crypto"
import sharp from "sharp"
import path from "path"

router.post("/", function (req, res, next) {
  const cabin_id = crypto.randomUUID();

  if (!req.files.length) {
    res.sendStatus(500);
    return;
  }
  const recCabinDetails = new Promise((resolve, reject) => {
    const cabin_title = req.body.cabin_title;
    const availability = req.body.availability;
    const weekly_price = req.body.weekly_price;
    const min_stay = req.body.min_stay;
    const bedroom = req.body.bedroom;
    const bathroom = req.body.bathroom;
    const car_space = req.body.car_space;
    const description = req.body.description;
    db.query(
      "INSERT INTO longterm_cabins (cabin_id, cabin_title, availability, weekly_price, min_stay, bedroom, bathroom, car_space, description) VALUES (UNHEX(REPLACE(?,'-','')), ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        cabin_id,
        cabin_title,
        availability,
        weekly_price,
        min_stay,
        bedroom,
        bathroom,
        car_space,
        description,
      ],
      (err, data) => {
        if (err) {
          res.send(500);
          reject(err);
        }
        resolve();
      }
    );
  });

  //Store long-term cabin image
  //Create thumbnail versions of cabin images
  const recCabinImages = new Promise((resolve, reject) => {
    for (let i = 0; i < req.files.length; i++) {
      //normal image resize
      sharp("images/longterm/" + req.files[i].filename)
        .resize({ height: 800, width: 1200 })
        .toFile(
          path.resolve(
            "images/longterm/longterm-resized/" + req.files[i].filename
          )
        )
        .then((newFile) => console.log("image resized"));
      //thumbnail resize
      sharp("images/longterm/" + req.files[i].filename)
        .resize({ height: 300, width: 435 })
        .toFile(
          path.resolve(
            "images/longterm/longterm-thumbnails/" + req.files[i].filename
          )
        )
        .then((newFile) => console.log("image resized"));

      db.query(
        "INSERT INTO cabin_images (cabin_id, img_src) VALUES (UNHEX(REPLACE(?,'-','')), ?)",
        [cabin_id, req.files[i].filename],
        (err, result) => {
          if (err) {
            res.send(500);
            reject(err);
          }
        }
      );
    }
    resolve();
  });

  const recCabinFeatures = new Promise((resolve, reject) => {
    const features = req.body.features;
    let featureId;
    for (let i = 0; i < features.length; i++) {
      featureId = crypto.randomUUID();
      db.query(
        "INSERT INTO cabin_features (cabin_id, feature) VALUES (UNHEX(REPLACE(?,'-','')), ?)",
        [cabin_id, features[i]],
        (err, data) => {
          if (err) {
            res.send(500);
            reject(err);
          }
        }
      );
    }
    resolve();
  });

  recCabinDetails
    .then(() => recCabinImages)
    .then(() => recCabinFeatures)
    .then(() => res.sendStatus(204));
});

module.exports = router;
