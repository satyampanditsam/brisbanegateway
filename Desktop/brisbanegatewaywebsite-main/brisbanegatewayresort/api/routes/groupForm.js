// var express = require("express");
// var router = express.Router();
// const sendMail = require("../mailer");

import express from "express"
import router from express.Router()
import sendMail from "../mailer"

router.post("/", function (req, res, next) {
  const groupInquiries = [];
  groupInquiries.push(req.body);
  const mailBody = `<h1>Group Inquiry</h1>
  <p>Group name: ${req.body.groupname}</p>
  <p>First name: ${req.body.firstname}</p>
  <p>Surname: ${req.body.surname}</p>
  <p>Email: ${req.body.email}</p>
  <p>Phone: ${req.body.phone}</p>
  <p>Arrival: ${req.body.arrival}</p>
  <p>Departure: ${req.body.departure}</p>
  <p>Estimated arrival time: ${req.body.arrival}</p>
  <p>Males under 14: ${req.body.malesunder14}</p>
  <p>Females under 14: ${req.body.femalesunder14}</p>
  <p>Males 14 - 17: ${req.body.males14to17}</p>
  <p>Males 18+: ${req.body.males18plus}</p>
  <p>Females 18+: ${req.body.females18plus}</p>
  <p>Male supervisors: ${req.body.malesupers}</p>
  <p>Female supervisors: ${req.body.femalesupers}</p>
  <p>Supervisors must be in separate cabin: ${req.body.superscabin}</p>
  <p>Supervisors must be in seperate bedrooms: ${req.body.supersbedroom}</p>
  <p>Group members' cabins must be seperated by gender: ${req.body.groupgender}</p>
  <p>No supervisors in bunk beds: ${req.body.supersbunks}</p>
  <p>Coach driver requires a separate cabin: ${req.body.drivercabin}</p>
  <p>Supervisors can share cabins with the group members provided they are in separate bedrooms: ${req.body.sharecabin}</p>
  <p>Supervisors' cabins must be separated by gender: ${req.body.supersgender}</p>
  <p>Only one person in each bed (no sharing of queen beds): ${req.body.oneperbed}</p>
  <p>No group members in bunk beds: ${req.body.groupbunks}</p>
  <p>Comments: ${req.body.comments}</p>`;
  sendMail("test", mailBody, (err, data) => {
    if (err) {
      console.log("err");
    }
    console.log("email send" + data);
  });
});

module.exports = router;
