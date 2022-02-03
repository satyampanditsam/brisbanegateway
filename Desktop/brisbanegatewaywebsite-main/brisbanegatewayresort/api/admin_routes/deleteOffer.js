// const express = require("express");
// const router = express.Router();
// const db = require("../connection");

import express from "express";
import router from express.Router();
import db from "../connection";

router.post("/:id", function (req, res, next) {
  const offer_id = req.params.id;
  db.query(
    "DELETE FROM offers WHERE offer_id = UNHEX(?)",
    [offer_id],
    (err, result) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(204);
    }
  );
});

module.exports = router;
