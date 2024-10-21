import midtransClient from "midtrans-client";

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_SERVER_KEY,
});

export default snap;
