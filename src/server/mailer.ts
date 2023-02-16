import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dev.test.jalen@gmail.com',
    pass: 'gsitlkthhuprziku'
  }
});

