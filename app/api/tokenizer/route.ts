import midtransClient from "midtrans-client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY,
});

export async function POST(request: any) {
  const {
    id,
    id_product,
    title,
    price,
    sub_total,
    qty,
    size,
    ket,
    berat,
    pajak_jml,
    nama,
    email,
    phone,
    nama_ship,
    telp,
    alamat,
    optionPicked,
    optionKurir,
  } = await request.json();

  const pajak = "Pajak PPN (11%)";
  const ongkir = "Ongkos Kirim (Shipping)";
  const alamatLengkap = alamat + ", " + optionPicked.label;
  const city = optionPicked.label;
  const ongkir_jml: number = optionKurir.value * qty;
  const gross: number = sub_total + pajak_jml + ongkir_jml;

  const disc = 0;
  const courier = optionKurir.label;
  const user_id = "defen394321";

  let parameter = {
    item_details: [
      {
        name: title,
        price: price,
        quantity: qty,
      },
      {
        name: pajak,
        price: pajak_jml,
        quantity: 1,
      },
      {
        name: ongkir,
        price: ongkir_jml,
        quantity: 1,
      },
    ],
    transaction_details: {
      order_id: id,
      gross_amount: gross,
    },
    customer_details: {
      first_name: nama,
      email: email,
      phone: phone,
      shipping_address: {
        first_name: nama_ship,
        phone: telp,
        address: alamatLengkap,
        city: city,
      },
    },
  };

  const token = await snap.createTransactionToken(parameter);

  const createTransaction = await prisma.trsingle.create({
    data: {
      user_id: user_id,
      nama: nama,
      email: email,
      wa: phone,
      id_product: id_product,
      nama_product: title,
      harga: price,
      size: size,
      qty: qty,
      berat: berat,
      keterangan: ket,
      ongkir: ongkir_jml,
      pajak: pajak_jml,
      disc: disc,
      total: gross,
      kurir: courier,
      alamat_kirim: alamatLengkap,
      hp: telp,
      city: optionPicked.label,
    },
  });

  const pesan: string =
    "Order Masuk : " +
    "Nama : " +
    nama +
    " , No HP : " +
    phone +
    " , Tipe Transaksi : SINGLE TRANSACTION " +
    " , Email : " +
    email +
    " , Produk : " +
    title;

  const pesanToCustomer: string =
    "Notifikasi create order product di SUHE Activewear Apparel. Dengan ID Produk sebagai berikut: " +
    "Nama Customer : " +
    nama +
    ", Nama Product : " +
    title +
    ", Total Belanja : " +
    rupiah.format(gross) +
    ". Silahkan lakukan pembayaran melalui gateway yang tersedia. Apabila terdapat masalah, silahkan hubungi WhatsApp admin berikut : 0859 - 6238 - 4140. Terima kasih telah berbelanja di SUHE Activewear Apparel.";

  var transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const sendEmail = await transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to: "suheweardotcom@gmail.com",
    subject: "ORDER MASUK _ SUHE APPAREL",
    text: "suhendi dahlan apparel",
    html: pesan,
  });

  const sendEmailToCostumer = await transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to: email,
    subject: "ORDER SUHE_APPAREL",
    text: "New Order Notification",
    html: pesanToCustomer,
  });

  console.log(token, createTransaction, sendEmail, sendEmailToCostumer);
  return NextResponse.json({ token });
}
