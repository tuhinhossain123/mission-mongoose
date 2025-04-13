import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production', // true for port 465, false for other ports
    auth: {
      user: 'csetuhin55@gmail.email',
      pass: 'jn7jnAPss4f63QBp6D',
    },
  });

  await transporter.sendMail({
    from: 'csetuhin55@gmail.com', // sender address
    to, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Reset Your Password Within 10 Mim', // plain text body
    html: '<b>Hello world?</b>', // html body
  });
};
