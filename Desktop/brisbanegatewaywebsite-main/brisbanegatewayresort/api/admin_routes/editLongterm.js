// const express = require("express");
// const router = express.Router();
// const db = require("../connection");
import express from "express";
import router from express.Router();
import db from "../connection";

router.post("/:id", function (req, res, next) {
  const EDIT_LONGTERM_DETAILS =
    "UPDATE longterm_cabins SET cabin_title = ?, availability = ?, weekly_price = ?, min_stay = ?, bedroom = ?, bathroom = ?, car_space = ?, description = ? WHERE cabin_id = UNHEX(?)";
  const UPDATE_LONGTERM_FEATURES =
    "REPLACE into cabin_features (cabin_id, feature) VALUES (UNHEX(?), ?)";
  const DELETE_LONGTERM_FEATURES =
    "DELETE FROM cabin_features WHERE cabin_id = UNHEX(?) AND feature NOT IN (?)";
  const ADD_LONGTERM_IMAGES =
    "INSERT INTO cabin_images (cabin_id, img_src) VALUES (UNHEX(?), ?)";
  const DELETE_LONGTERM_IMAGES =
    "DELETE FROM cabin_images WHERE img_src IN (?)";

  if (!req.params.id) {
    res.send(500);
  }

  const cabin_id = req.params.id;

  const editLongtermDetails = new Promise((resolve, reject) => {
    db.query(EDIT_LONGTERM_DETAILS, [
      req.body.cabin_title,
      req.body.availability,
      req.body.weekly_price,
      req.body.min_stay,
      req.body.bedroom,
      req.body.bathroom,
      req.body.car_space,
      req.body.description,
      cabin_id,
    ]);
  });

  //no error handling?

  const addLongtermFeatures = new Promise((resolve, reject) => {
    if (req.body.features) {
      const features = req.body.features;
      const featuresQuery = [];
      if (!Array.isArray(features)) {
        featuresQuery.push([cabin_id, features]);
      } else {
        for (let i = 0; i < features.length; i++) {
          featuresQuery.push([cabin_id, features[i]]);
        }
      }
      for (let i = 0; i < featuresQuery.length; i++) {
        db.query(UPDATE_LONGTERM_FEATURES, featuresQuery[i]);
      }
    }
  });

  const deleteLongtermFeatures = new Promise((resolve, reject) => {
    db.query(DELETE_LONGTERM_FEATURES, [cabin_id, req.body.features]);
  });

  const addLongtermImages = new Promise((resolve, reject) => {
    if (req.files) {
      const addImagesQuery = [];

      for (let i = 0; i < req.files.length; i++) {
        addImagesQuery.push([cabin_id, req.files[i].filename]);
      }

      for (let i = 0; i < addImagesQuery.length; i++) {
        db.query(ADD_LONGTERM_IMAGES, addImagesQuery[i]);
      }
    }
  });

  const deleteLongtermImages = new Promise((resolve, reject) => {
    if (req.body.images_delete) {
      const deleteQuery = [];
      const images = req.body.images_delete;
      if (!Array.isArray(images)) {
        deleteQuery.push(images);
      }
      for (let i = 0; i < images.length; i++) {
        deleteQuery.push(images[i]);
      }
      db.query(DELETE_LONGTERM_IMAGES, [deleteQuery]);
    }
  });

  Promise.all([
    editLongtermDetails,
    addLongtermFeatures,
    deleteLongtermFeatures,
    addLongtermFeatures,
    addLongtermImages,
    deleteLongtermImages,
  ]).then((values) => res.send(200));
});

module.exports = router;
