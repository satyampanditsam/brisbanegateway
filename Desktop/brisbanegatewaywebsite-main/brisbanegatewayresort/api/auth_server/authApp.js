import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import jwt from "jsonwebtoken";
import loginRouter from "./auth_routes/login";
import logoutRouter from "./auth_routes/logout";
import bodyParser from "body-parser";
import { verifiy } from "crypto";
import tokenRouter from "./auth_routes/token";

// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
// const jwt = require("jsonwebtoken");
// const loginRouter = require("./auth_routes/login");
// const logoutRouter = require("./auth_routes/logout");

// const bodyParser = require("body-parser");
// const { verify } = require("crypto");
// const tokenRouter = require("./auth_routes/token");

const app = express();
app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.options("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.send();
});

function verifyOrigin(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
}

//Login
app.use("/login", verifyOrigin, loginRouter);

//Logout
app.use("/logout", verifyOrigin, logoutRouter);

app.use("/token", verifyOrigin, tokenRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
