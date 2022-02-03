// var express = require("express")
// var router = express.Router()
// const sendMail = require("../mailer")
import express from "express"
import router from express.Router()
import sendMail from "../mailer"

router.post("/", function (req, res, next) {
  const contactMessages = [];
  contactMessages.push(req.body);
  const mailBody = `
    <h1>Contact Message</h1>
    <p>First name: ${req.body.firstName}</p>
    <p>Surname: ${req.body.surname}</p>
    <p>Message: ${req.body.message}</p>
  `;
  sendMail("test", mailBody, (err, data) => {
    if (err) {
      console.log("err");
    }
    console.log("email send" + data);
  });
});

module.exports = router;
