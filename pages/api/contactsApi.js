
require('dotenv').config();
const PASSWORD = process.env.password;
console.log("api endpoints ")
const express = require('express');
const app = express();
app.use(express.json());

export default function (req, res) {
    console.log(" apirequest ", req.body)
    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'drootdummy23@gmail.com',
            pass: PASSWORD,
        },
        secure: true,
    });
    console.log("resolved",req.body)

    const mailData = {
        from:'drootdummy23@gmail.com',
        to: 'drootdummy23@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        html: `<div> Hi droot, </div>
        <div>${req.body.message}</div>
        <div>Thanks <br>${req.body.name}</div>
        <div>Message sent from  ${req.body.email}</div>`
       }
       transporter.sendMail(mailData, function (err, info) {
        console.log("sending email");
        if(err)
          console.log(err)
        else
          console.log(info);
          
      })
      res.status(200).send();
      
  }







// app.post('/api/contactsApi', (req, res) => {
//     const { email, name, message } = req.body;
  
//     // Create a Nodemailer transporter
//     let nodemailer = require('nodemailer');
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.directmail.aliyun.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: 'drootdummy23@gmail.com',
//         pass: PASSWORD,
//       },
//     });
  
//     // Define the email data
//     const mailOptions = {
//       from: email,
//       to: 'drootdummy23@gmail.com',
//       subject: `Welcome to Direct Mail ${name}`,
//       text: `Hi ${message}, welcome to Direct Mail!`,
//     };
  
//     // Send the email using Nodemailer
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send('An error occurred while sending the email.');
//       } else {
//         console.log(`The email was sent to ${email} successfully.`);
//         res.status(200).send('The email was sent successfully.');
//       }
//     });
//   });

//   app.listen(3000, () => {
//     console.log('The server is running on http://localhost:3000.');
//   });