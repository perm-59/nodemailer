const nodemailer = require("nodemailer");
const htmlTemplate = `
`;
// Create a transporter object
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "", // YOU email
    pass: "", // YOU password (or password from application)
  },
});
// Define the email options
const mailOptions = {
  from: "", // e-mail
  to: "", // e-mail
  subject: "Hello from Nodemailer", // theme
  html: htmlTemplate // body
};
// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
