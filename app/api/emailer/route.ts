import { NextResponse } from "next/server";
import { hashSync } from "bcrypt-ts";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: any) {
  const { email } = await request.json();

  var transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "smtp@mailtrap.io",
      pass: "2ed9ded66f1c7282152efbfaf932a672",
    },
  });

  const sendEmail = await transport.sendMail({
    from: "hi@demomailtrap.com",
    to: email,
    subject: "dari suhendi",
    text: "suhendi dahlan apparel",
    html: "hello world",
  });

  console.log(sendEmail);
  return NextResponse.json({ sendEmail });
}
