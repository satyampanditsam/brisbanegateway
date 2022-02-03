// const express = require("express");
// const router = express.Router();
// const db = require("../connection");

import express from "express";
import router from express.Router();
import db from "../connection";

router.post("/", function (req, res, next) {
  db.query(
    "DELETE FROM longterm_cabins WHERE cabin_id = UNHEX(?)",
    [req.body.id],
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
