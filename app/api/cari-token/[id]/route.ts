import { getTokenDisc } from "@/components/token-diskon/data";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(id: string) {
  const cariData = await getTokenDisc(id);
  console.log(cariData);
  return NextResponse.json({ cariData });
}
