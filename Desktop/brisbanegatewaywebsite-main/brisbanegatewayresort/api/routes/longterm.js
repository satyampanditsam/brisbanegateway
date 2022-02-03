// var express = require("express");
// var router = express.Router();
// var db = require("../connection");
import express from "express"
import router from express.Router()
import db from "../connection"

router.get("/", function (req, res, next) {
  let cabinData;

  const queryCabinDetails = new Promise((resolve, reject) => {
    db.query(
      "SELECT HEX(cabin_id) AS cabin_id, cabin_title, availability, weekly_price, min_stay, bedroom, bathroom, car_space FROM longterm_cabins WHERE availability = 'available_soon' OR availability = 'available'",
      (err, data) => {
        if (err) {
          reject(err);
        }
        cabinData = data;
        resolve(data);
      }
    );
  });

  const cabinThumbnailsQuery = new Promise((resolve, reject) => {
    db.query(
      "SELECT HEX(cabin_id) AS cabin_id, img_src, ordinance FROM cabin_images WHERE HEX(cabin_id) IN (SELECT HEX(cabin_id) AS cabin_id FROM longterm_cabins WHERE availability = 'available_soon' OR availability = 'available')",
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });

  queryCabinDetails
    .then(() => cabinThumbnailsQuery)
    .then((thumbnails) => {
      let cabin;
      let thumbnail;
      for (let i = 0; i < cabinData.length; i++) {
        cabin = cabinData[i];
        cabin.cabin_thumbnails = [];
        for (let i = 0; i < thumbnails.length; i++) {
          thumbnail = thumbnails[i];
          if (thumbnail.cabin_id == cabin.cabin_id) {
            cabin.cabin_thumbnails.push({
              img_src: thumbnail.img_src,
              sort: thumbnail.ordinance,
            });
          }
        }
      }
    })
    .then(() => res.send(JSON.stringify(cabinData)));
});

module.exports = router;
