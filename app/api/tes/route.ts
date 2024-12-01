import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  var transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const sendEmail = await transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to: email,
    subject: "ORDER MASUK _ SUHE APPAREL",
    text: "suhendi dahlan apparel",
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .title {
        background-color: aqua;
      }
    </style>
  </head>
  <body>
    <div class="title">Selamat datang di hutan</div>
  </body>
</html>
`,
  });

  return NextResponse.json({ sendEmail });
}
