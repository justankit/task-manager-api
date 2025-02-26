const postmark = require("postmark");

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

const sendWelcomeEmail = (email, name) => {
  client.sendEmail({
    From: "ankitt@valuefy.com",
    To: email,
    Subject: "Welcome Email: Thanks for joining in",
    HtmlBody: `Welcome to the app ${name}. let me know how you get along with the email`,
    // TextBody: `Welcome to the app, ${name} . Let me know how you get along with the email`,
    MessageStream: "udemy-course",
  });
};

// New function to send cancellation email
const sendCancellationEmail = (email, name) => {
  client.sendEmail({
    From: "ankitt@valuefy.com",
    To: email,
    Subject: "Cancellation Confirmation",
    HtmlBody: `Dear ${name},<br><br>We have received your request to cancel your account. We're sorry to see you go, but we respect your decision.<br><br>If you have any feedback or if there's anything we could have done better, please let us know. Your input is valuable to us!<br><br>Thank you for being a part of our community. We hope to see you again in the future!<br><br>Best regards,<br>The Valuefy Team`,
    // TextBody: `Dear ${name},\n\nWe have received your request to cancel your account. We're sorry to see you go, but we respect your decision.\n\nIf you have any feedback or if there's anything we could have done better, please let us know. Your input is valuable to us!\n\nThank you for being a part of our community. We hope to see you again in the future!\n\nBest regards,\nThe Valuefy Team`,
    MessageStream: "udemy-course",
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
