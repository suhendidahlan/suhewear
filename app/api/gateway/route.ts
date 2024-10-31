import { NextResponse } from "next/server";
import midtransClient from "midtrans-client";

let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY,
});

export async function POST(request: any) {
  const { id, harga, qty, nama, email, wa, kurir, hp, alamat, city } =
    await request.json();
  const title = "Total Belanja";

  let parameter = {
    item_details: {
      name: title,
      price: harga,
      quantity: qty,
    },
    transaction_details: {
      order_id: id,
      gross_amount: harga * qty,
    },
    customer_details: {
      first_name: nama,
      email: email,
      phone: wa,
      shipping_address: {
        first_name: kurir,
        phone: hp,
        address: alamat,
        city: city,
      },
    },
  };

  const token = await snap.createTransactionToken(parameter);

  console.log(token);
  return NextResponse.json({ token });
}
