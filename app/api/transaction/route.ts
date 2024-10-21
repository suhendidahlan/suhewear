import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST({ request }: { request: any }) {
  const {
    nama,
    email,
    wa,
    user_id,
    id_product,
    nama_product,
    harga,
    size,
    qty,
    berat,
    keterangan,
    ongkir,
    pajak,
    disc,
    total,
    kurir,
    alamat_kirim,
    hp,
    update_kirim,
    status_kirim,
  } = await request.json();

  const data = {
    nama,
    email,
    wa,
    user_id,
    id_product,
    nama_product,
    harga,
    size,
    qty,
    berat,
    keterangan,
    ongkir,
    pajak,
    disc,
    total,
    kurir,
    alamat_kirim,
    hp,
    update_kirim,
    status_kirim,
  };

  const createTransaction = await prisma.trsingle.create({ data });

  if (!createTransaction) {
    return NextResponse.json({ status: 500, isCreated: false });
  } else return NextResponse.json({ status: 200, isCreated: true });
}
