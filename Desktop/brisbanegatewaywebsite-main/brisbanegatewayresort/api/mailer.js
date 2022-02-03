// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

// "smtps://brisbanegatewayform%40gmail.com:black2gold@smtp.gmail.com"
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "brisbanegatewayform@gmail.com",
    pass: "36BNXhbC2bPWKi",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

function sendMail(subject, html, info) {
  const mailOptions = {
    from: `"lach" <brisbanegatewayform@gmail.com>`,
    to: "lachholland@gmail.com",
    subject: subject,
    html: html,
  };
  transporter.sendMail(mailOptions, (err, infoo) => {
    const res = { responsecode: "" };
    if (err) {
      res.responsecode = 401;
      return info(new Error(res.responsecode), null);
    }
    res.responsecode = 200;
    info(null, res.responsecode + infoo.response);
  });
}

module.exports = sendMail;
