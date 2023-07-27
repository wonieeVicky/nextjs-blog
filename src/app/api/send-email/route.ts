import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const requestData = await req.json();

  const message = {
    from: requestData.email,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: `[BLOG] ${requestData.subject}`,
    html: `<p><h1>${requestData.subject}</h1>${requestData.message}<br /><br />보낸사람: ${requestData.email}</p>`
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
