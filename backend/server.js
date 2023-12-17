const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3001; // Choose a port number

// Middleware to parse JSON data
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoint for handling form submissions
app.post("/submit-form", (req, res) => {
  // Get form data from the request body
  const { name, description, email } = req.body;

  // Construct the email body
  const emailBody = `
    Name: ${name}
    Description: ${description}
    Email: ${email}
  `;

  // Configure nodemailer to send the email (replace with your SMTP settings)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "recipient@example.com",
    subject: "New Form Submission",
    text: emailBody,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Form submitted successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
