const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express.Router();

app.post("/", (req, res) => {
  let { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "kylemcb.24@gmail.com",
    subject: "New Contact From Portfolio",
    text: `${name} has contacted you 
        
        Please contact them back on ${email}
        
        ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(404).send({ msg: "Email not sent " + error });
    } else {
      console.log("Email sent: " + info.response);
      res.send({ msg: "Email sent successfully!" });
    }
  });
});
module.exports = app