import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const requestData = await req.json();

  const message = {
    from: requestData.email,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: requestData.subject,
    html: `<p>${requestData.message}</p>`
  };

  let transporter = await nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  return new Promise((resolve) => {
    transporter.sendMail(message, (err) => {
      const status = err ? 500 : 200;
      const message = err?.toString() ?? 'Email sent successfully!';
      resolve(NextResponse.json({ message }, { status }));
    });
  });
}
