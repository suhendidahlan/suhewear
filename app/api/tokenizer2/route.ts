import midtransClient from "midtrans-client";
import { NextResponse } from "next/server";
import type { chart } from "@prisma/client";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY,
});

export async function POST(request: any) {
  const {
    id,
    data,
    nama,
    email,
    phone,
    nama_ship,
    telp,
    alamat,
    optionKurir,
    optionPicked,
    ket,
  } = await request.json();

  const pajak = "Pajak PPN (11%)";
  const ongkir = "Ongkos Kirim (Shipping)";
  const session = await auth();
  const user_id = session?.user.id + " - Sub Total";

  const id_product = data
    .map((list: chart) => list.id_product)
    .reduce((a: string, b: string) => a + ", " + b);

  const title = data
    .map((list: chart) => list.nama_product + "(" + list.size + ")")
    .reduce((a: string, b: string) => a + ", " + b);

  const size = data
    .map((list: chart) => list.size)
    .reduce((a: string, b: string) => a + ", " + b);

  const berat = data
    .map((list: chart) => list.berat)
    .reduce((a: number, b: number) => a + b, 0);

  const price = data
    .map((list: chart) => list.harga * list.qty)
    .reduce((a: number, b: number) => a + b, 0);

  const qty = 1;

  const qtyOngkir = data
    .map((list: chart) => list.qty)
    .reduce((a: number, b: number) => a + b, 0);

  const pajak_jml =
    data
      .map((list: chart) => list.harga * list.qty)
      .reduce((a: number, b: number) => a + b, 0) * 0.11;

  const ongkir_jml = optionKurir.value * qtyOngkir;
  const keterangan = "multi : " + ket;
  const disc = 0;
  const courier = optionKurir.label;
  const alamatLengkap = alamat + ", " + optionPicked.label;

  const gross = price * qty + pajak_jml + ongkir_jml;
  const city = optionPicked.label;

  let parameter = {
    item_details: [
      {
        name: user_id,
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
        address: alamat,
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
      keterangan: keterangan,
      ongkir: ongkir_jml,
      pajak: pajak_jml,
      disc: disc,
      total: gross,
      kurir: courier,
      alamat_kirim: alamatLengkap,
      hp: telp,
    },
  });

  console.log(token, createTransaction);
  return NextResponse.json({ token });
}

export async function DELETE(request: any) {
  const { id, data } = await request.json();
  const deleteChart = await prisma.chart.delete({ where: { id } });
}
