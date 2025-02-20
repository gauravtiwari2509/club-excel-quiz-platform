import nodemailer from 'nodemailer';
import { getSignupTemplate } from './render';

// helper function to email
export const sendEmail = async (email: string, name: string) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '',
      pass: '',
    },
  });

  const mailOptions = {
    from: '',
    to: email,
    subject: 'Welcome to Club Excel Quiz',
    html: await getSignupTemplate(name),
  };

  await transporter.sendMail(mailOptions);
};