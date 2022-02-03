// const createError = require("http-errors");
// const express = require("express");
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");
// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
// const groupFormRouter = require("./routes/groupForm");
// const offersRouter = require("./routes/offers");
// const contactFormRouter = require("./routes/contactForm");
// const longtermRouter = require("./routes/longterm");
// const longtermCabinRouter = require("./routes/longtermCabin");
// const longtermInquiryRouter = require("./routes/longtermInquiry");
// const siteDataRouter = require("./routes/siteData");
// const groupBookingRouter = require("./routes/groupBooking");
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import groupFormRouter from "./routes/groupForm";
import offersRouter from "./routes/offers";
import contactFormRouter from "./routes/contactForm";
import longtermRouter from "./routes/longterm";
import longtermCabinRouter from "./routes/longtermCabin";
import longtermInquiryRouter from "./routes/longtermInquiry";
import siteDataRouter from "./routes/siteData";
import groupBookingRouter from "./routes/groupBooking";
import fetch from "node-fetch";

//api key
const authReq = { region: "au" };
fetch(
  "https://brisbanegateway:)W^aHqU0nYENN^au@api.newbook.cloud/rest/api_keys",
  {
    method: "POST",
    body: JSON.stringify(authReq),
    headers: { "Content-Type": "application/json" },
  }
);

//Admin Longterm
const authenticateRouter = require("./authenticate");
const retrieveLongtermsRouter = require("./admin_routes/retrieveLongterms");
const createLongtermRouter = require("./admin_routes/createLongterm");
const deleteLongtermRouter = require("./admin_routes/deleteLongterm");
const longtermAdminRouter = require("./admin_routes/longtermAdmin");
const editLongtermRouter = require("./admin_routes/editLongterm");
const crypto = require("crypto");

//Admin Offers
const retrieveOffersRouter = require("./admin_routes/retrieveOffers");
const createOfferRouter = require("./admin_routes/createOffer");
const offerAdminRouter = require("./admin_routes/offerAdmin");
const editOfferRouter = require("./admin_routes/editOffer");
const offerDeleteRouter = require("./admin_routes/deleteOffer");
//check file extension later incorperate
const multer = require("multer");
let storageLongterm = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/longterm");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".jpeg");
  },
});
let storageOffers = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/offers");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".jpeg");
  },
});
const uploadLongterm = multer({ storage: storageLongterm });
const uploadOffers = multer({ storage: storageOffers });

const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
var dotEnv = require("dotenv");
dotEnv.config();

var app = express();

app.options("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.send();
});

function verifyOriginApp(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
}

app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json({ limit: "50mb" }));

app.use(cookieParser());

//IMPROVE ROUTING - not setting header
function authenticateToken(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
  res.header("Access-Control-Allow-Headers", "*");
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    // req.user = user;
    next();
  });
}

//ADMIN Longterm
app.use("/authenticate", authenticateToken, authenticateRouter);
app.use("/retrievelongterms", authenticateToken, retrieveLongtermsRouter);
app.use(
  "/createlongterm",
  authenticateToken,
  uploadLongterm.array("cabin_images"),
  createLongtermRouter
);
app.use("/deletelongterm", authenticateToken, deleteLongtermRouter);
app.use("/longterm-admin", authenticateToken, longtermAdminRouter);
app.use(
  "/editlongterm/",
  authenticateToken,
  uploadLongterm.array("cabin_images"),
  editLongtermRouter
);
// ADMIN Offers
app.use("/retrieve-offers", authenticateToken, retrieveOffersRouter);
//ADMIN Create offer
app.use(
  "/create-offer",
  authenticateToken,
  uploadOffers.single("offer_image"),
  createOfferRouter
);
//ADMIN Edit offer
app.use(
  "/edit-offer",
  authenticateToken,
  uploadOffers.single("offer_image"),
  editOfferRouter
);
//ADMIN offer view
app.use("/offer-admin", authenticateToken, offerAdminRouter);
// ADMIN offer image
app.use("/offers-images", express.static("./images/offers"));
//ADMIN offer delete
app.use("/offer-delete", authenticateToken, offerDeleteRouter);

//BRISBANE GATEWAY WEBSITE
// Req Site Data
app.use("/site-data", verifyOriginApp, siteDataRouter);
//Group booking request
app.use("/group-booking", verifyOriginApp, groupBookingRouter);

// GATEWAY offer images
app.use("/offers-images", express.static("./images/offers"));

//Long-term Form
app.use("/longterm-inquiry", verifyOriginApp, longtermInquiryRouter);

//Long-term cabin cards
app.use("/longterm-cabins", verifyOriginApp, longtermRouter);

//Long-term details
app.use("/longterm-cabin", verifyOriginApp, longtermCabinRouter);

//Group Form
app.use("/group-form", verifyOriginApp, groupFormRouter);

//Contact Form
app.use("/contact-form", verifyOriginApp, contactFormRouter);

//Offers
app.use("/offers", verifyOriginApp, offersRouter);

//LONG-TERM IMAGES
//fullsize images
app.use(
  "/longterm-images",
  express.static("./images/longterm/longterm-resized")
);
//thumbnail images
app.use(
  "/longterm-thumbnail",
  express.static("./images/longterm/longterm-thumbnails")
);

//Home
app.use("/home-images", express.static("./images/home"));

app.use("/local-area-images", express.static("./images/local-area"));

//Holiday Cabins
app.use(
  "/holiday-cabin-thumbnails",
  express.static("images/holidayCabins/holidaycabinthumbnails")
);
app.use(
  "/one-bedroom-holiday-villa",
  express.static("images/holidayCabins/one-bedroom-holiday-villa")
);
app.use(
  "/two-bedroom-holiday-villa",
  express.static("images/holidayCabins/two-bedroom-holiday-villa")
);
app.use(
  "/three-bedroom-holiday-villa",
  express.static("images/holidayCabins/three-bedroom-holiday-villa")
);
app.use(
  "/one-bedroom-resort-home",
  express.static("images/holidayCabins/one-bedroom-resort-home")
);
app.use(
  "/two-bedroom-holiday-home",
  express.static("images/holidayCabins/two-bedroom-holiday-home")
);
app.use(
  "/two-bedroom-resort-home",
  express.static("images/holidayCabins/two-bedroom-resort-home")
);
app.use(
  "/three-bedroom-holiday-home",
  express.static("images/holidayCabins/three-bedroom-holiday-home")
);
app.use(
  "/three-bedroom-resort-home",
  express.static("images/holidayCabins/three-bedroom-resort-home")
);
app.use(
  "/large-family-holiday-home",
  express.static("images/holidayCabins/large-family-holiday-home")
);

//Facilities
app.use("/facilities", express.static("images/facilities"));

//Caravans
app.use("/caravans", express.static("images/caravans"));

app.use("/", indexRouter);
app.use("/users", usersRouter);

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
  res.send("error");
});

module.exports = app;
