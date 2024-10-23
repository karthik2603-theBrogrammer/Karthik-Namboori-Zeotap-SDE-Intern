const nodemailer = require("nodemailer");

// Configure the email transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'namkarthik2003@gmail.com',
      pass: process.env.APP_PASSWORD,
    },
  });

// Function to send alert email
module.exports = function sendAlertEmail(alertData) {
  const { city, condition, threshold, triggeredAt } = alertData;

  const emailSubject = `Weather Alert for ${city}`;
  const emailText = `Alert for ${city}: ${condition} at ${triggeredAt.toLocaleString()}.\n\nThreshold: ${threshold} K.`;

  // Mail options for the recipient
  const mailOptionsToRecipient = {
    from: "John Doe",
    to: "namkarthik2003@gmail.com", // Replace with the user's email address
    subject: emailSubject,
    text: emailText,
  };
  
  // Send email to the recipient
  transporter.sendMail(mailOptionsToRecipient, (error, info) => {
    if (error) {
      console.log("Error sending email to recipient:", error);
    } else {
      console.log("Email sent to recipient: " + info.response);
    }
  });
}

// Export the function if needed
