import nodemailer from 'nodemailer';

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.GMAIL_EMAIL_ADDRESS,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export async function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: `[BLOG] ${subject}`,
    from,
    html: `<div>
      <h1>${subject}</h1>
      <div>${message}</div>
      <br /><br />
      보낸사람: ${from}
    </div>`
  };
  return transporter.sendMail(mailData);
}
