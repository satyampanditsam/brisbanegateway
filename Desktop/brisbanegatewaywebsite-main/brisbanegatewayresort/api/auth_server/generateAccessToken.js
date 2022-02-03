// var dotEnv = require('dotenv')
import dotEnv from "dotenv";
dotEnv.config();

const jwt = require("jsonwebtoken");
// { expiresIn: '60s' }
function generateAccessToken(userID) {
  return jwt.sign(userID, process.env.ACCESS_TOKEN_SECRET);
}

module.exports = generateAccessToken;
