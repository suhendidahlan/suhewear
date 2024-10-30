import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: any) {
  const { email } = await request.json();

  var transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "suhendidahlan1997@gmail.com",
      pass: "vhsr pvfi hwem axcf",
    },
  });

  const sendEmail = await transport.sendMail({
    from: "apparel@suheapp.com",
    to: email,
    envelope: {
      from: "Daemon <apparel@suheapp.com>", // used as MAIL FROM: address for SMTP
      to: email, // used as RCPT TO: address for SMTP
    },
    subject: "dari suhendi",
    text: "suhendi dahlan apparel",
    html: "hello world",
  });

  console.log(sendEmail);
  return NextResponse.json({ sendEmail });
}
