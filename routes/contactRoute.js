const express = require('express');
const app = express.Router();
const nodemailer = require('nodemailer');
app.post('/',(req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mcbkyle0@gmail.com',
          pass: 'Kyle-2409'
        }
      });
      
      const mailOptions = {
        from: 'email',
        to: 'mcbkyle0@gmail.com',
        subject: 'New Contact from portfolio',
        text: `${name} has contacted you
        
        Please contact them back on ${contact}

        ${message}
        `,
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(400).send({msg: "Email not sent"});
        } else {
          console.log('Email sent: ' + info.response);
          res.send({msg:"Email has been sent successfully"});
        }
      });
    })
module.exports = app