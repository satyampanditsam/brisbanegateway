// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// const refreshTokens = require("../refreshTokens");
// const generateAccessToken = require("../generateAccessToken");
import express from "express";
import router from express.Router();
import jwt from "jsonwebtoken";
import refreshTokens from "../refreshTokens";
import generateAccessToken from "../generateAccessToken";

router.post("/", (req, res, next) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken(user.id);
    res.json({ accessToken: accessToken });
  });
});

module.exports = router;
