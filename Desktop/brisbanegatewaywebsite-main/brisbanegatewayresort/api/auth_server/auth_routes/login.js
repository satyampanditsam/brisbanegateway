// const express = require("express");
// const router = express.Router();
// const db = require("../../connection");
// const jwt = require("jsonwebtoken");
// const generateAccessToken = require("../generateAccessToken");
// const refreshTokens = require("../refreshTokens");
// const dotEnv = require("dotenv");

import express from "express";
import router from express.Router();
import db from "../connection";
import jwt from "jsonwebtoken";
import generateAccessToken from "../generateAccessToken";
import refreshTokens from "../refreshTokens";
import dotEnv from "dotenv";

dotEnv.config();

router.post("/", function (req, res, next) {
  const reqEmail = req.body.email;
  const reqPassword = req.body.password;
  console.log(reqEmail);
  db.query(
    "select * from accounts where email = ? and password = ?",
    [reqEmail, reqPassword],
    (err, result) => {
      if (err) {
        res.sendStatus(401);
        return;
      } else if (!result.length) {
        res.sendStatus(401);
        return;
      } else if (!result[0].email || !result[0].password) {
        res.sendStatus(401);
        return;
      }
      const user = result[0];
      if (user.password === reqPassword) {
        const accessToken = generateAccessToken(user.id);
        const refreshToken = jwt.sign(
          { id: user.id },
          process.env.REFRESH_TOKEN_SECRET
        );
        refreshTokens.push(refreshToken);
        // res.cookie('refreshToken', refreshToken)
        return res.send({ access_token: accessToken });
      }
      return res.sendStatus(401);
    }
  );
});

module.exports = router;
