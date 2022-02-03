// var express = require("express");
// var router = express.Router();
// const sendMail = require("../mailer");

import express from "express"
import router from express.Router()
import sendMail from "../mailer"

router.post("/", function (req, res, next) {
  console.log(req.body);
  const longtermInquiries = [];
  longtermInquiries.push(req.body);
  const mailBody = `
    <h1>Long-term Cabin Inquiry</h1>
    <p>Cabin: ${req.body.cabin_title}</p>
    <p>First name: ${req.body.first_name}</p>
    <p>Surname: ${req.body.last_name}</p>
    <p>Phone: ${req.body.phone}</p>
    <p>Phone: ${req.body.email}</p>
  `;
  sendMail("test", mailBody, (err, data) => {
    if (err) {
      console.log("err");
      res.sendStatus(500);
      return;
    }
    console.log("email send" + data);
  });
});

module.exports = router;
