const express = require('express');
const app = express.Router();
const nodemailer = require('nodemailer');
require("dotenv").config();
app.post('/',(req, res) => {
    let{name,email,message} = req.body;
    console.log(process.env.EMAIL, process.env.PASS)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        }
      });
      
      const mailOptions = {
        from: email,
        to: 'kylemcb.24@gmail.com',
        subject: 'New Contact from portfolio',
        text: `${name} has contacted you
        
        Please contact them back on ${email}

        ${message}
        `,
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(400).send({msg: "Email not sent" + error});
        } else {
          console.log('Email sent: ' + info.response);
          res.send({msg:"Email has been sent successfully"});
        }
      });
    })
module.exports = app