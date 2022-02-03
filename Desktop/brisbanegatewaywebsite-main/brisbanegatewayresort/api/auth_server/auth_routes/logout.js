// const express = require("express");
// const router = express.Router();
// const refreshTokens = require("../refreshTokens");

import express from "express";
import router from express.Router();
import refreshTokens from "../refreshTokens";

router.delete("/", (req, res, next) => {
  const accessToken = req.headers["authorization"].split(" ")[1];
  console.log(accessToken);
  res.sendStatus(204);
});

module.exports = router;
