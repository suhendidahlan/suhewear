import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: any) {
  const {
    id_product,
    nama_product,
    image_product,
    user_id,
    berat,
    harga,
    size,
    qty,
  } = await request.json();
  const data = {
    id_product,
    nama_product,
    image_product,
    user_id,
    berat,
    harga,
    size,
    qty,
  };

  const addToChart = await prisma.chart.create({ data });

  if (!addToChart) return NextResponse.json({ status: 500, isCreated: false });
  else return NextResponse.json({ status: 200, isCreated: true });
}
