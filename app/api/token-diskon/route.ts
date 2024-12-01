import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: any) {
  const { token, jumlah, percent } = await request.json();
  const storeData = await prisma.tokenDiskon.create({
    data: {
      token,
      jumlah,
      percent,
    },
  });
  return NextResponse.json({ storeData });
}
