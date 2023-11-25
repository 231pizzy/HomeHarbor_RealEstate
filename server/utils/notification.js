import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export const sendmail = async (to, html) => {
  try {
    const info = await transporter.sendMail({
      from: {
        name: "HomeHarbor",
        from: process.env.GMAIL_USER,
      },
      to,
      subject: "Forgot Password",
      html,
    });
  } catch (err) {
    console.log(err);
  }
};
