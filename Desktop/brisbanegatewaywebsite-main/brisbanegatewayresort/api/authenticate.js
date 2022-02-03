// const express = require("express");
// const router = express.Router();
import express from "express";
import router from express.Router();

router.get("/", function (req, res, next) {
  res.json({ authenticated: "true" });
});

module.exports = router;
